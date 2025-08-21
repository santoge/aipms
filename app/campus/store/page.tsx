"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Package,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  BookOpen,
  Stethoscope,
  Shirt,
  Coffee,
  Heart,
  DollarSign,
  Users,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const storeCategories = [
  {
    icon: BookOpen,
    title: "Academic Supplies",
    description: "Essential stationery and study materials",
    color: "from-blue-500 to-cyan-500",
    items: ["Notebooks & Folders", "Pens & Pencils", "Study Guides", "Reference Books", "Lab Manuals"],
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    description: "Professional medical tools and instruments",
    color: "from-purple-500 to-pink-500",
    items: ["Stethoscopes", "Blood Pressure Monitors", "Thermometers", "Medical Kits", "Diagnostic Tools"],
  },
  {
    icon: Shirt,
    title: "College Merchandise",
    description: "Official college branded items and apparel",
    color: "from-green-500 to-emerald-500",
    items: ["College T-shirts", "Hoodies & Jackets", "Bags & Backpacks", "Mugs & Bottles", "ID Card Holders"],
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Health and wellness products",
    color: "from-orange-500 to-red-500",
    items: ["First Aid Supplies", "Toiletries", "Tissues & Sanitizers", "Health Supplements", "Personal Hygiene"],
  },
  {
    icon: Coffee,
    title: "Snacks & Beverages",
    description: "Quick refreshments and energy boosters",
    color: "from-indigo-500 to-blue-500",
    items: ["Healthy Snacks", "Energy Drinks", "Coffee & Tea", "Fresh Juices", "Instant Meals"],
  },
  {
    icon: Package,
    title: "Daily Essentials",
    description: "Everyday items for campus life",
    color: "from-teal-500 to-cyan-500",
    items: ["Cleaning Products", "Laundry Supplies", "Electronics Accessories", "Phone Chargers", "Batteries"],
  },
]

const storeFeatures = [
  {
    icon: DollarSign,
    title: "Low Prices",
    description: "Affordable prices for all students",
    metric: "Best Value",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open during college hours for easy access",
    metric: "8 AM - 6 PM",
  },
  {
    icon: MapPin,
    title: "Central Location",
    description: "Located near the central store on campus",
    metric: "Easy Access",
  },
  {
    icon: Users,
    title: "Student Friendly",
    description: "Designed specifically for student needs",
    metric: "100% Focus",
  },
]

const popularItems = [
  {
    name: "College Notebook Set",
    price: "₹150",
    description: "High-quality notebooks with college branding",
    image: "/placeholder.svg?height=200&width=200",
    category: "Academic",
  },
  {
    name: "Medical Stethoscope",
    price: "₹2,500",
    description: "Professional grade stethoscope for students",
    image: "/placeholder.svg?height=200&width=200",
    category: "Medical",
  },
  {
    name: "College T-Shirt",
    price: "₹350",
    description: "Official college branded cotton t-shirt",
    image: "/placeholder.svg?height=200&width=200",
    category: "Apparel",
  },
  {
    name: "First Aid Kit",
    price: "₹450",
    description: "Complete first aid kit for emergencies",
    image: "/placeholder.svg?height=200&width=200",
    category: "Healthcare",
  },
  {
    name: "Study Lamp",
    price: "₹800",
    description: "LED desk lamp for late-night studying",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
  },
  {
    name: "College Backpack",
    price: "₹1,200",
    description: "Durable backpack with college logo",
    image: "/placeholder.svg?height=200&width=200",
    category: "Accessories",
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/80 to-[#003d82]/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Campus Convenience Store
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Campus
              </span>
              <br />
              <span className="text-white">Store</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Your one-stop shop for{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Academic & Daily Essentials
              </span>{" "}
              at affordable prices
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Products Available" },
                { number: "Low", label: "Prices" },
                { number: "10", label: "Hours Daily" },
                { number: "Central", label: "Location" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-3xl opacity-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Campus Store Interior"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">Best</div>
                    <div className="text-sm text-gray-600">Prices</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                    <Package className="h-5 w-5 text-[#002366] mr-2" />
                    <span className="text-sm font-medium text-[#002366]">Campus Convenience</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Everything You Need</h2>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      The College store provides{" "}
                      <strong className="text-[#002366]">all necessary College-related novelty items</strong>. It is
                      located on campus near to the central store for easy accessibility.
                    </p>
                    <p className="leading-relaxed">
                      The Store is well stocked with{" "}
                      <strong className="text-[#002366]">many items that students need</strong> — including notebooks,
                      pens, folders and other supplies as well as cleaning products, basic first aid or medical
                      supplies, toiletries such as toothpaste and tissues.
                    </p>
                    <p className="leading-relaxed">
                      Everything is available at <strong className="text-[#002366]">low prices</strong> to ensure
                      affordability for all students, making campus life more convenient and comfortable.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <DollarSign className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Affordable Prices</h4>
                    <p className="text-sm text-gray-600">Student-friendly pricing on all items</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <MapPin className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Convenient Location</h4>
                    <p className="text-sm text-gray-600">Easily accessible near central store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Store Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed with students in mind for maximum convenience and affordability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {storeFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#002366] mb-2">{feature.metric}</div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Product Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wide range of products to meet all your campus needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storeCategories.map((category, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div
                      className={`bg-gradient-to-r ${category.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm">{category.description}</p>

                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Popular Items</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Most sought-after products by our students</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularItems.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#002366] text-white shadow-lg">{item.category}</Badge>
                      <div className="absolute top-4 right-4 bg-white/90 text-[#002366] px-3 py-1 rounded-full font-bold shadow-lg">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#002366] mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <Button className="w-full bg-[#002366] hover:bg-[#003d82]">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Campus Store</h2>
            <p className="text-xl text-blue-100 mb-8">
              Find everything you need for your academic journey at student-friendly prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <MapPin className="mr-2 h-5 w-5" />
                Store Location
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Store Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
