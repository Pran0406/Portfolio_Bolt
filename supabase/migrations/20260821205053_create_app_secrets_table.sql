/*
# Create app_secrets table for storing service-side secrets

1. New Tables
- `app_secrets`
  - `key` (text, primary key — secret identifier)
  - `value` (text — the secret value)
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `app_secrets`.
- NO policies for anon or authenticated roles — only the service role
  (which bypasses RLS) can read or write this table. This keeps secrets
  like the Notion integration token completely invisible to the frontend.
*/

CREATE TABLE IF NOT EXISTS app_secrets (
  key text PRIMARY KEY,
  value text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE app_secrets ENABLE ROW LEVEL SECURITY;
