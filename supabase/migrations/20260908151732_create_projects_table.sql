/*
# Create projects table for portfolio

## Purpose
Stores all portfolio project data that the frontend Projects section reads from.
Replaces the old hardcoded project data in content.ts.

## New Table: projects
- id (bigint identity PK)
- slug (text, unique, not null) — URL-safe identifier
- title (text, not null) — project display name
- category (text) — Excel, Power BI, Python, Automation, Machine Learning, SQL
- description (text) — short card description
- tagline (text) — uppercase label shown on card
- impact (text) — insight label like "Regional & Sales Performance"
- tools (text[]) — array of tool/technology names
- challenge (text) — case study: the challenge
- approach (text) — case study: the approach
- results (text) — case study: business impact
- insights (text[]) — case study: key insights bullet points
- image_url (text) — URL to project image in Supabase Storage
- github_url (text) — GitHub link
- live_url (text) — live demo link
- sort_order (integer, default 99) — display ordering
- is_published (boolean, default true) — visibility flag
- created_at (timestamptz, default now())
- updated_at (timestamptz, default now())

## Indexes
- Unique index on slug
- Index on category for filter queries
- Index on sort_order for ordering

## Security (RLS)
- Enable RLS on projects
- Public SELECT: anyone can read published projects (is_published = true)
- No public INSERT, UPDATE, or DELETE
- Only authenticated users (portfolio owner) can manage projects

## Notes
1. This is a single-tenant portfolio — no user_id needed
2. The frontend uses the anon/publishable key to read projects
3. Image URLs point to the project-images storage bucket
*/

CREATE TABLE IF NOT EXISTS projects (
  id           bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug         text UNIQUE NOT NULL,
  title        text NOT NULL,
  category     text DEFAULT 'Excel',
  description  text DEFAULT '',
  tagline      text DEFAULT '',
  impact       text DEFAULT '',
  tools        text[] DEFAULT '{}',
  challenge    text DEFAULT '',
  approach     text DEFAULT '',
  results      text DEFAULT '',
  insights     text[] DEFAULT '{}',
  image_url    text DEFAULT '',
  github_url   text DEFAULT '',
  live_url     text DEFAULT '',
  sort_order   integer NOT NULL DEFAULT 99,
  is_published boolean NOT NULL DEFAULT true,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects (slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects (category);
CREATE INDEX IF NOT EXISTS idx_projects_sort_order ON projects (sort_order);

-- updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS projects_updated_at ON projects;
CREATE TRIGGER projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Public can read published projects only
DROP POLICY IF EXISTS "public_select_projects" ON projects;
CREATE POLICY "public_select_projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

-- Only authenticated (portfolio owner) can insert
DROP POLICY IF EXISTS "auth_insert_projects" ON projects;
CREATE POLICY "auth_insert_projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated (portfolio owner) can update
DROP POLICY IF EXISTS "auth_update_projects" ON projects;
CREATE POLICY "auth_update_projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated (portfolio owner) can delete
DROP POLICY IF EXISTS "auth_delete_projects" ON projects;
CREATE POLICY "auth_delete_projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);