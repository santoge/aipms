-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Set up storage policies for authenticated users
CREATE POLICY "Allow authenticated users to upload images" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id = 'images');

CREATE POLICY "Allow public access to images" ON storage.objects
FOR SELECT TO public USING (bucket_id = 'images');

CREATE POLICY "Allow authenticated users to update their images" ON storage.objects
FOR UPDATE TO authenticated USING (bucket_id = 'images');

CREATE POLICY "Allow authenticated users to delete their images" ON storage.objects
FOR DELETE TO authenticated USING (bucket_id = 'images');
