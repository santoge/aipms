import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CategoryManager from "@/components/category-manager"

export const dynamic = "force-dynamic"

export default async function CategoriesPage() {
  const supabase = await createClient()

  if (!supabase) {
    return <div>Supabase not configured</div>
  }

  // Fetch both blog and gallery categories
  const [blogCategoriesResult, galleryCategoriesResult] = await Promise.all([
    supabase.from("categories").select("*").order("name"),
    supabase.from("gallery_categories").select("*").order("name"),
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        <p className="text-gray-600 mt-2">Manage blog and gallery categories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Blog Categories</CardTitle>
            <CardDescription>Categories for blog posts and articles</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryManager categories={blogCategoriesResult.data || []} type="blog" tableName="categories" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gallery Categories</CardTitle>
            <CardDescription>Categories for gallery images</CardDescription>
          </CardHeader>
          <CardContent>
            <CategoryManager
              categories={galleryCategoriesResult.data || []}
              type="gallery"
              tableName="gallery_categories"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
