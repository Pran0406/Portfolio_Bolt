import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { projects as staticProjects, type Project, type ProjectCategory } from '@/data/content';

const accentMap: Record<string, string> = {
  Python: 'from-nebula-500/30 to-aqua-500/20',
  'Machine Learning': 'from-magenta-500/25 to-nebula-500/20',
  SQL: 'from-aqua-500/25 to-nebula-500/20',
  'Power BI': 'from-nebula-500/25 to-magenta-500/20',
  Automation: 'from-nebula-500/25 to-aqua-500/25',
  Excel: 'from-aqua-500/20 to-magenta-500/20',
};

type ProjectRow = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tagline: string;
  impact: string;
  tools: string[];
  challenge: string;
  approach: string;
  results: string;
  insights: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  sort_order: number;
  is_published: boolean;
};

function rowToProject(row: ProjectRow): Project {
  return {
    title: row.title,
    slug: row.slug,
    category: (row.category || 'Excel') as ProjectCategory,
    description: row.description || '',
    tagline: row.tagline || '',
    impact: row.impact || '',
    tools: Array.isArray(row.tools) ? row.tools : [],
    challenge: row.challenge || '',
    approach: row.approach || '',
    results: row.results || '',
    insights: Array.isArray(row.insights) ? row.insights : [],
    liveUrl: row.live_url || '',
    githubUrl: row.github_url || '',
    imageUrl: row.image_url || '',
    accent: accentMap[row.category] || accentMap.Excel,
  };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('slug, title, category, description, tagline, impact, tools, challenge, approach, results, insights, image_url, github_url, live_url, sort_order, is_published')
          .eq('is_published', true)
          .order('sort_order', { ascending: true });

        if (error) throw error;

        if (!cancelled && data && data.length > 0) {
          setProjects(data.map(rowToProject));
        }
      } catch {
        // fall back to static data
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProjects();
    return () => { cancelled = true; };
  }, []);

  return { projects, loading };
}
