/*
# Create projects_cache table for live Notion sync

1. New Tables
- `projects_cache`
  - `id` (uuid, primary key)
  - `slug` (text, unique identifier from Notion)
  - `title` (text, project name)
  - `category` (text, project category)
  - `description` (text, short description)
  - `tagline` (text, tagline string)
  - `impact` (text, business impact metric)
  - `tools` (jsonb, array of tool names)
  - `challenge` (text, the challenge section)
  - `approach` (text, the approach section)
  - `results` (text, the results section)
  - `live_url` (text, live demo URL)
  - `github_url` (text, GitHub URL)
  - `sort_order` (integer, display order)
  - `status` (text, publication status)
  - `updated_at` (timestamptz, last sync time)

2. Security
- Enable RLS on `projects_cache`.
- Allow anon + authenticated SELECT (public portfolio data).
- No INSERT/UPDATE/DELETE from the frontend — only the edge function
  (using the service role key) writes to this table.
*/

CREATE TABLE IF NOT EXISTS projects_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  tagline text NOT NULL DEFAULT '',
  impact text NOT NULL DEFAULT '',
  tools jsonb NOT NULL DEFAULT '[]',
  challenge text NOT NULL DEFAULT '',
  approach text NOT NULL DEFAULT '',
  results text NOT NULL DEFAULT '',
  live_url text NOT NULL DEFAULT '',
  github_url text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 99,
  status text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects_cache ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_projects" ON projects_cache;
CREATE POLICY "anon_read_projects"
  ON projects_cache FOR SELECT
  TO anon, authenticated
  USING (true);
