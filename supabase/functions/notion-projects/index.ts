import { createClient } from "npm:@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const NOTION_DATABASE_ID = "3bcb9fc3-6077-8100-9629-e8f775004677";
const NOTION_API_URL = `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`;

type NotionProperty =
  | { type: "title"; title: { plain_text: string }[] }
  | { type: "rich_text"; rich_text: { plain_text: string }[] }
  | { type: "select"; select: { name: string } | null }
  | { type: "multi_select"; multi_select: { name: string }[] }
  | { type: "url"; url: string | null }
  | { type: "number"; number: number | null }
  | { type: "status"; status: { name: string } | null }
  | { type: "date"; date: { start: string } | null }
  | { type: "formula"; formula: { string?: string } | null };

function getText(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  if (prop.type === "title" && prop.title) {
    return prop.title.map((t) => t.plain_text).join("");
  }
  if (prop.type === "rich_text" && prop.rich_text) {
    return prop.rich_text.map((t) => t.plain_text).join("");
  }
  return "";
}

function getSelect(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  if (prop.type === "select" && prop.select) {
    return prop.select.name || "";
  }
  return "";
}

function getMultiSelect(prop: NotionProperty | undefined): string[] {
  if (!prop) return [];
  if (prop.type === "multi_select" && prop.multi_select) {
    return prop.multi_select.map((t) => t.name);
  }
  return [];
}

function getUrl(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  if (prop.type === "url" && prop.url) {
    return prop.url;
  }
  return "";
}

function getNumber(prop: NotionProperty | undefined): number {
  if (!prop) return 99;
  if (prop.type === "number" && prop.number !== null) {
    return prop.number;
  }
  return 99;
}

function getStatus(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  if (prop.type === "status" && prop.status) {
    return prop.status.name || "";
  }
  return "";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(
        JSON.stringify({ error: "Supabase env not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Read the Notion token from the app_secrets table (service role bypasses RLS)
    const { data: secretRow, error: secretError } = await supabase
      .from("app_secrets")
      .select("value")
      .eq("key", "NOTION_TOKEN")
      .maybeSingle();

    if (secretError || !secretRow) {
      return new Response(
        JSON.stringify({ error: "Notion token not found in app_secrets" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const notionToken = secretRow.value;

    // Fetch from Notion API (paginated)
    const allResults: any[] = [];
    let cursor: string | undefined = undefined;
    let hasMore = true;

    while (hasMore) {
      const body: any = { page_size: 100 };
      if (cursor) body.start_cursor = cursor;

      const notionRes = await fetch(NOTION_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!notionRes.ok) {
        const errText = await notionRes.text();
        return new Response(
          JSON.stringify({ error: `Notion API error: ${notionRes.status}`, detail: errText }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const notionData = await notionRes.json();
      allResults.push(...notionData.results);
      hasMore = notionData.has_more;
      cursor = notionData.next_cursor;
    }

    // Parse Notion pages into project records
    const projects = allResults
      .map((page: any) => {
        const props = page.properties;
        const title = getText(props["Name"] as NotionProperty);
        if (!title) return null;

        const slug = getText(props["Slug"] as NotionProperty) || page.id;
        const category = getSelect(props["Category"] as NotionProperty);
        const description = getText(props["Description"] as NotionProperty);
        const tagline = getText(props["Tagline"] as NotionProperty);
        const impact = getText(props["Impact"] as NotionProperty);
        const tools = getMultiSelect(props["Tools"] as NotionProperty);
        const challenge = getText(props["Challenge"] as NotionProperty);
        const approach = getText(props["Approach"] as NotionProperty);
        const results = getText(props["Results"] as NotionProperty);
        const liveUrl = getUrl(props["Live URL"] as NotionProperty);
        const githubUrl = getUrl(props["GitHub URL"] as NotionProperty);
        const order = getNumber(props["Order"] as NotionProperty);
        const status = getStatus(props["Status"] as NotionProperty);

        return {
          slug,
          title,
          category,
          description,
          tagline,
          impact,
          tools,
          challenge,
          approach,
          results,
          live_url: liveUrl,
          github_url: githubUrl,
          sort_order: order,
          status,
        };
      })
      .filter((p: any) => p !== null);

    // Upsert into Supabase cache table
    {
      for (const proj of projects) {
        await supabase
          .from("projects_cache")
          .upsert(proj, { onConflict: "slug" });
      }

      // Remove projects that no longer exist in Notion
      const slugs = projects.map((p: any) => p.slug);
      await supabase
        .from("projects_cache")
        .delete()
        .not("slug", "in", `(${slugs.map((s: string) => `'${s.replace(/'/g, "''")}'`).join(",")})`);
    }

    return new Response(
      JSON.stringify({ synced: projects.length, projects }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
