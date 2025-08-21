import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ImageIcon, Tags, Users } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Blog Posts",
      description: "Manage blog posts and articles",
      icon: FileText,
      href: "/admin/blog", // Fixed blog link to match actual admin blog route
      color: "text-blue-600",
    },
    {
      title: "Gallery",
      description: "Manage gallery images",
      icon: ImageIcon,
      href: "/admin/gallery",
      color: "text-green-600",
    },
    {
      title: "Categories",
      description: "Manage blog and gallery categories",
      icon: Tags,
      href: "/admin/categories",
      color: "text-purple-600",
    },
    {
      title: "Authors",
      description: "Manage blog authors",
      icon: Users,
      href: "/admin/authors",
      color: "text-orange-600",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your website content and settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <CardDescription>{stat.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
