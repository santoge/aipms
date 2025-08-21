-- Enable RLS on all tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;

-- Admin profiles policies
CREATE POLICY "Admin profiles are viewable by authenticated admins" ON admin_profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admin profiles are updatable by authenticated admins" ON admin_profiles
    FOR UPDATE USING (auth.uid() = id);

-- Blog posts policies
CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
    FOR SELECT USING (published = true OR EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));

CREATE POLICY "Blog posts are manageable by admins" ON blog_posts
    FOR ALL USING (EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));

-- Authors policies
CREATE POLICY "Authors are viewable by everyone" ON authors
    FOR SELECT USING (true);

CREATE POLICY "Authors are manageable by admins" ON authors
    FOR ALL USING (EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));

-- Categories policies
CREATE POLICY "Categories are viewable by everyone" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Categories are manageable by admins" ON categories
    FOR ALL USING (EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));

-- Gallery images policies
CREATE POLICY "Gallery images are viewable by everyone" ON gallery_images
    FOR SELECT USING (true);

CREATE POLICY "Gallery images are manageable by admins" ON gallery_images
    FOR ALL USING (EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));

-- Gallery categories policies
CREATE POLICY "Gallery categories are viewable by everyone" ON gallery_categories
    FOR SELECT USING (true);

CREATE POLICY "Gallery categories are manageable by admins" ON gallery_categories
    FOR ALL USING (EXISTS (
        SELECT 1 FROM admin_profiles WHERE admin_profiles.id = auth.uid()
    ));
