-- Create fresh seed data with proper structure
INSERT INTO authors (id, name, email, bio, avatar_url, created_at, updated_at) VALUES
(gen_random_uuid(), 'Adhithyan Admin', 'admin@adhithyan.edu', 'Institute Administrator', '/placeholder.svg?height=100&width=100', NOW(), NOW()),
(gen_random_uuid(), 'Faculty Team', 'faculty@adhithyan.edu', 'Academic Faculty', '/placeholder.svg?height=100&width=100', NOW(), NOW());

INSERT INTO categories (id, name, slug, description, created_at, updated_at) VALUES
(gen_random_uuid(), 'Education', 'education', 'Educational content and insights', NOW(), NOW()),
(gen_random_uuid(), 'Campus Life', 'campus-life', 'Student life and activities', NOW(), NOW()),
(gen_random_uuid(), 'Success Stories', 'success-stories', 'Student and alumni achievements', NOW(), NOW());

INSERT INTO gallery_categories (id, name, slug, description, created_at, updated_at) VALUES
(gen_random_uuid(), 'Events', 'events', 'Institute events and ceremonies', NOW(), NOW()),
(gen_random_uuid(), 'Campus', 'campus', 'Campus facilities and infrastructure', NOW(), NOW()),
(gen_random_uuid(), 'Community', 'community', 'Community outreach programs', NOW(), NOW());
