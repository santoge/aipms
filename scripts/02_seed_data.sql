-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
('General', 'general', 'General blog posts and announcements'),
('Academics', 'academics', 'Academic programs and educational content'),
('Campus Life', 'campus-life', 'Student life and campus activities'),
('Healthcare', 'healthcare', 'Healthcare and medical education content')
ON CONFLICT (slug) DO NOTHING;

-- Insert default author
INSERT INTO authors (name, email, bio) VALUES
('Admin', 'admin@adhithyaninstitute.com', 'Administrator of Adhithyan Institute')
ON CONFLICT (email) DO NOTHING;

-- Insert default gallery categories
INSERT INTO gallery_categories (name, slug, description) VALUES
('Campus', 'campus', 'Campus facilities and infrastructure'),
('Events', 'events', 'Institute events and celebrations'),
('Students', 'students', 'Student activities and achievements'),
('Faculty', 'faculty', 'Faculty and staff photos')
ON CONFLICT (slug) DO NOTHING;
