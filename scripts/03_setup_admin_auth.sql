-- Create admin profiles table
CREATE TABLE IF NOT EXISTS public.admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Admin profiles policies
CREATE POLICY "Admin profiles are viewable by authenticated admins"
  ON public.admin_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admin profiles are insertable by authenticated users"
  ON public.admin_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Admin profiles are updatable by owner"
  ON public.admin_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create function to handle new admin user creation
CREATE OR REPLACE FUNCTION public.handle_new_admin_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.admin_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  )
  ON CONFLICT (id) DO NOTHING;
  
  RETURN NEW;
END;
$$;

-- Create trigger for new admin users
DROP TRIGGER IF EXISTS on_auth_admin_user_created ON auth.users;
CREATE TRIGGER on_auth_admin_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_admin_user();

-- Update existing tables to have proper admin access policies
-- Blog posts policies for admin access
DROP POLICY IF EXISTS "Blog posts are viewable by everyone" ON public.blog_posts;
DROP POLICY IF EXISTS "Blog posts are insertable by admins" ON public.blog_posts;
DROP POLICY IF EXISTS "Blog posts are updatable by admins" ON public.blog_posts;
DROP POLICY IF EXISTS "Blog posts are deletable by admins" ON public.blog_posts;

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone"
  ON public.blog_posts FOR SELECT
  USING (true);

CREATE POLICY "Blog posts are insertable by admins"
  ON public.blog_posts FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Blog posts are updatable by admins"
  ON public.blog_posts FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Blog posts are deletable by admins"
  ON public.blog_posts FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

-- Authors policies for admin access
DROP POLICY IF EXISTS "Authors are viewable by everyone" ON public.authors;
DROP POLICY IF EXISTS "Authors are insertable by admins" ON public.authors;
DROP POLICY IF EXISTS "Authors are updatable by admins" ON public.authors;
DROP POLICY IF EXISTS "Authors are deletable by admins" ON public.authors;

ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authors are viewable by everyone"
  ON public.authors FOR SELECT
  USING (true);

CREATE POLICY "Authors are insertable by admins"
  ON public.authors FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Authors are updatable by admins"
  ON public.authors FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Authors are deletable by admins"
  ON public.authors FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

-- Categories policies for admin access
DROP POLICY IF EXISTS "Categories are viewable by everyone" ON public.categories;
DROP POLICY IF EXISTS "Categories are insertable by admins" ON public.categories;
DROP POLICY IF EXISTS "Categories are updatable by admins" ON public.categories;
DROP POLICY IF EXISTS "Categories are deletable by admins" ON public.categories;

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "Categories are insertable by admins"
  ON public.categories FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Categories are updatable by admins"
  ON public.categories FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Categories are deletable by admins"
  ON public.categories FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

-- Gallery images policies for admin access
DROP POLICY IF EXISTS "Gallery images are viewable by everyone" ON public.gallery_images;
DROP POLICY IF EXISTS "Gallery images are insertable by admins" ON public.gallery_images;
DROP POLICY IF EXISTS "Gallery images are updatable by admins" ON public.gallery_images;
DROP POLICY IF EXISTS "Gallery images are deletable by admins" ON public.gallery_images;

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gallery images are viewable by everyone"
  ON public.gallery_images FOR SELECT
  USING (true);

CREATE POLICY "Gallery images are insertable by admins"
  ON public.gallery_images FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Gallery images are updatable by admins"
  ON public.gallery_images FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Gallery images are deletable by admins"
  ON public.gallery_images FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

-- Gallery categories policies for admin access
DROP POLICY IF EXISTS "Gallery categories are viewable by everyone" ON public.gallery_categories;
DROP POLICY IF EXISTS "Gallery categories are insertable by admins" ON public.gallery_categories;
DROP POLICY IF EXISTS "Gallery categories are updatable by admins" ON public.gallery_categories;
DROP POLICY IF EXISTS "Gallery categories are deletable by admins" ON public.gallery_categories;

ALTER TABLE public.gallery_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gallery categories are viewable by everyone"
  ON public.gallery_categories FOR SELECT
  USING (true);

CREATE POLICY "Gallery categories are insertable by admins"
  ON public.gallery_categories FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Gallery categories are updatable by admins"
  ON public.gallery_categories FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Gallery categories are deletable by admins"
  ON public.gallery_categories FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_profiles 
      WHERE id = auth.uid()
    )
  );
