"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Search,
  Globe,
  Clock,
  Users,
  Monitor,
  Database,
  FileText,
  Newspaper,
  GraduationCap,
  Star,
  CheckCircle,
  Brain,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const libraryFeatures = [
  {
    icon: BookOpen,
    title: "Extensive Collection",
    description: "Thousands of books, journals, and publications",
    metric: "5000+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Digital Resources",
    description: "Online databases and e-learning materials",
    metric: "24/7",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Newspaper,
    title: "Current Publications",
    description: "Latest journals and research papers",
    metric: "100+",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Monitor,
    title: "Computer Access",
    description: "High-speed internet and research facilities",
    metric: "50+",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Study Spaces",
    description: "Individual and group study areas",
    metric: "200+",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Open during convenient study hours",
    metric: "12 hrs",
    color: "from-teal-500 to-cyan-500",
  },
]

const collections = [
  {
    category: "Medical Sciences",
    subjects: [
      "Anatomy & Physiology",
      "Medical Laboratory Technology",
      "Clinical Biochemistry",
      "Microbiology & Immunology",
      "Pathology & Histopathology",
      "Hematology & Blood Banking",
    ],
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Paramedical Technology",
    subjects: [
      "Dialysis Technology",
      "Radiology & Imaging",
      "Cardiac Care Technology",
      "Operation Theatre Technology",
      "Ophthalmic Technology",
      "Emergency Medical Services",
    ],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Research & Journals",
    subjects: [
      "International Medical Journals",
      "Research Methodologies",
      "Clinical Case Studies",
      "Healthcare Management",
      "Medical Ethics & Law",
      "Public Health Sciences",
    ],
    icon: FileText,
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Reference Materials",
    subjects: [
      "Medical Dictionaries",
      "Drug References",
      "Clinical Guidelines",
      "Diagnostic Manuals",
      "Procedure Handbooks",
      "Safety Protocols",
    ],
    icon: Search,
    color: "from-orange-500 to-red-500",
  },
]

const libraryServices = [
  {
    title: "Book Lending",
    description: "Borrow books for extended study periods",
    icon: BookOpen,
  },
  {
    title: "Reference Service",
    description: "Expert assistance in finding research materials",
    icon: Search,
  },
  {
    title: "Digital Access",
    description: "Online databases and e-resources",
    icon: Globe,
  },
  {
    title: "Study Support",
    description: "Quiet spaces for focused learning",
    icon: Lightbulb,
  },
  {
    title: "Research Assistance",
    description: "Help with academic projects and assignments",
    icon: FileText,
  },
  {
    title: "Inter-library Loans",
    description: "Access to resources from partner institutions",
    icon: Users,
  },
]

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/95 to-[#003d82]/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>

          {/* Floating Book Icons */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
              <FileText className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
              <Search className="h-7 w-7 text-blue-300" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 shadow-2xl">
                <BookOpen className="h-4 w-4 mr-2" />
                Knowledge Hub & Learning Center
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Digital
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Library</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover a world of knowledge with our{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Modern Library
              </span>{" "}
              featuring extensive collections and digital resources
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "5000+", label: "Books & Journals" },
                { number: "100+", label: "Digital Resources" },
                { number: "200+", label: "Seating Capacity" },
                { number: "12", label: "Hours Daily" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
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
                  alt="Modern Library Interior"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Digital Access</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                    <Database className="h-5 w-5 text-[#002366] mr-2" />
                    <span className="text-sm font-medium text-[#002366]">Knowledge Repository</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Curated Collection of Excellence</h2>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Our library is a <strong className="text-[#002366]">curated collection of sources</strong> of
                      information and similar resources, selected by experts and made accessible to our defined
                      community for reference or borrowing.
                    </p>
                    <p className="leading-relaxed">
                      We provide both <strong className="text-[#002366]">physical and digital access</strong> to
                      materials, creating a comprehensive learning environment that supports your academic journey in
                      health sciences.
                    </p>
                    <p className="leading-relaxed">
                      Our library features{" "}
                      <strong className="text-[#002366]">abundant publications, journals, books, and newspapers</strong>{" "}
                      in various subjects related to health sciences, ensuring you have access to the latest knowledge
                      and research.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Globe className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Digital Resources</h4>
                    <p className="text-sm text-gray-600">Access online databases and e-learning materials anytime</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Users className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Expert Curation</h4>
                    <p className="text-sm text-gray-600">Resources selected by subject matter experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Modern Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art amenities designed to enhance your learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {libraryFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`bg-gradient-to-r ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
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

      {/* Collections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Specialized Collections</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive resources across all healthcare disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${collection.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}
                      >
                        <collection.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{collection.category}</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {collection.subjects.map((subject, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{subject}</span>
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

      {/* Library Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Library Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support services to enhance your research and learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {libraryServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Knowledge Universe</h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover thousands of resources and unlock your potential with our comprehensive library
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <Search className="mr-2 h-5 w-5" />
                Browse Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Library Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
