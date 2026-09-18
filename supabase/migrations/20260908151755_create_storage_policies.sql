/*
# Storage policies for project-images bucket

## Purpose
Allow public read access to project images stored in the project-images bucket.
Public users can READ images but cannot modify or delete them.

## Security
- SELECT (read): public (anon + authenticated)
- INSERT/UPDATE/DELETE: authenticated only (portfolio owner)
*/

-- Public can read project images
DROP POLICY IF EXISTS "public_read_project_images" ON storage.objects;
CREATE POLICY "public_read_project_images"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'project-images');

-- Authenticated can upload project images
DROP POLICY IF EXISTS "auth_insert_project_images" ON storage.objects;
CREATE POLICY "auth_insert_project_images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'project-images');

-- Authenticated can update project images
DROP POLICY IF EXISTS "auth_update_project_images" ON storage.objects;
CREATE POLICY "auth_update_project_images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'project-images') WITH CHECK (bucket_id = 'project-images');

-- Authenticated can delete project images
DROP POLICY IF EXISTS "auth_delete_project_images" ON storage.objects;
CREATE POLICY "auth_delete_project_images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'project-images');