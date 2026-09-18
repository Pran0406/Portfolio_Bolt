/*
# Lock down app_secrets table

The app_secrets table stores the Notion integration token and must never
be readable from the frontend. RLS is already enabled with no policies
(deny-by-default), but this migration also explicitly revokes all
privileges from the anon and authenticated roles as defense-in-depth.
Only the service role (used by edge functions) can access this table,
because the service role bypasses RLS.
*/

REVOKE ALL ON app_secrets FROM anon;
REVOKE ALL ON app_secrets FROM authenticated;
