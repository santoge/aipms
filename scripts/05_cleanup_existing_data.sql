-- Clean up existing data that might be causing server exceptions
DELETE FROM blog_posts;
DELETE FROM gallery_images;
DELETE FROM categories;
DELETE FROM gallery_categories;
DELETE FROM authors;

-- Reset sequences if they exist
ALTER SEQUENCE IF EXISTS blog_posts_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS gallery_images_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS categories_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS gallery_categories_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS authors_id_seq RESTART WITH 1;
