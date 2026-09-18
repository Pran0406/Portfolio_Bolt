/*
# Create contact_messages table

## Purpose
Stores messages submitted by visitors through the portfolio Contact form.
The form saves name, email, and message here so the portfolio owner can read them.

## New Table: contact_messages
- id (bigint identity PK)
- name (text, not null) — visitor's name
- email (text, not null) — visitor's email
- message (text, not null) — visitor's message
- is_read (boolean, default false) — track whether owner has read it
- created_at (timestamptz, default now())

## Security (RLS)
- Enable RLS on contact_messages
- Public INSERT: anyone (anon + authenticated) can submit messages
- No public SELECT: visitors cannot read messages
- No public UPDATE or DELETE
- Only authenticated (portfolio owner) can read, update, and delete messages

## Notes
1. This is a no-auth portfolio — visitors submit as anon
2. The anon key can INSERT but cannot SELECT, UPDATE, or DELETE
3. The portfolio owner reads messages through the Supabase dashboard (authenticated)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name       text NOT NULL,
  email      text NOT NULL,
  message    text NOT NULL,
  is_read    boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_messages_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_is_read ON contact_messages (is_read);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact message (INSERT only)
DROP POLICY IF EXISTS "public_insert_messages" ON contact_messages;
CREATE POLICY "public_insert_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated (portfolio owner) can read messages
DROP POLICY IF EXISTS "auth_read_messages" ON contact_messages;
CREATE POLICY "auth_read_messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated (portfolio owner) can update messages
DROP POLICY IF EXISTS "auth_update_messages" ON contact_messages;
CREATE POLICY "auth_update_messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated (portfolio owner) can delete messages
DROP POLICY IF EXISTS "auth_delete_messages" ON contact_messages;
CREATE POLICY "auth_delete_messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);