"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Download,
  ExternalLink,
  Microscope,
  Heart,
  Stethoscope,
  Activity,
  Eye,
  Quote,
  BookOpen,
  Clock,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import AdmissionsPopup from "@/components/admissions-popup"
import Script from "next/script"
import { createClient } from "@/lib/supabase/client"

const courses = [
  {
    id: 1,
    title: "Medical Lab Technology",
    duration: "3 Years",
    type: "B.VOC",
    image: "/courses/medical-lab.jpg",
    description: "Comprehensive training in laboratory diagnostics and medical testing procedures.",
    highlights: ["Clinical Chemistry", "Microbiology", "Hematology", "Immunology"],
    icon: Microscope,
  },
  {
    id: 2,
    title: "Dialysis Technology",
    duration: "3 Years",
    type: "B.VOC",
    image: "/courses/dialysis.avif",
    description: "Specialized program for kidney dialysis procedures and patient care.",
    highlights: ["Hemodialysis", "Peritoneal Dialysis", "Patient Care", "Equipment Management"],
    icon: Heart,
  },
  {
    id: 3,
    title: "Radiology & Imaging",
    duration: "3 Years",
    type: "B.VOC",
    image: "/courses/radiology.avif",
    description: "Advanced training in medical imaging and radiological procedures.",
    highlights: ["X-Ray Technology", "CT Scan", "MRI", "Ultrasound"],
    icon: Eye,
  },
  {
    id: 4,
    title: "Cardiac Care Technology",
    duration: "3 Years",
    type: "B.VOC",
    image: "/courses/cardiac-care.avif",
    description: "Specialized training in cardiovascular diagnostics and care.",
    highlights: ["ECG", "Echo Cardiography", "Cardiac Catheterization", "Patient Monitoring"],
    icon: Activity,
  },
  {
    id: 5,
    title: "Operation Theatre Technology",
    duration: "3 Years",
    type: "B.VOC",
    image: "/courses/operation-theatre.avif",
    description: "Comprehensive training for surgical assistance and OT management.",
    highlights: ["Surgical Procedures", "Sterilization", "Equipment Handling", "Patient Safety"],
    icon: Stethoscope,
  },
  {
    id: 6,
    title: "Hospital Administration",
    duration: "1 Year",
    type: "Certificate",
    image: "/courses/hospital-admin.avif",
    description: "Management and administrative skills for healthcare facilities.",
    highlights: ["Healthcare Management", "Medical Records", "Insurance", "Quality Control"],
    icon: Building,
  },
]

const stats = [
  { number: "500+", label: "Students Graduated", icon: GraduationCap },
  { number: "95%", label: "Placement Rate", icon: Award },
  { number: "50+", label: "Hospital Partners", icon: Building },
  { number: "15+", label: "Expert Faculty", icon: Users },
]

const features = [
  {
    title: "UGC Approved Courses",
    description: "All our programs are recognized and approved by UGC and relevant medical councils.",
    icon: Award,
  },
  {
    title: "100% Placement Support",
    description: "Dedicated placement cell ensuring career opportunities in top healthcare institutions.",
    icon: Users,
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art laboratories and equipment for hands-on practical training.",
    icon: Building,
  },
  {
    title: "Expert Faculty",
    description: "Learn from experienced professionals and industry experts in healthcare.",
    icon: GraduationCap,
  },
]

const testimonials = [
  {
    name: "Priya Nair",
    course: "Medical Lab Technology",
    image: "/placeholder.svg?height=80&width=80",
    text: "The practical training at Adhithyan Institute prepared me perfectly for my career. Now working at AIIMS!",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    course: "Dialysis Technology",
    image: "/placeholder.svg?height=80&width=80",
    text: "Excellent faculty and modern equipment. The placement support helped me secure a great job immediately after graduation.",
    rating: 5,
  },
  {
    name: "Sneha Raj",
    course: "Radiology & Imaging",
    image: "/placeholder.svg?height=80&width=80",
    text: "The comprehensive curriculum and hands-on experience made me industry-ready from day one.",
    rating: 5,
  },
]

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [blogPosts, setBlogPosts] = useState([])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const supabase = createClient()

        const { data } = await supabase
          .from("blog_posts")
          .select(`
            *,
            authors (name),
            categories (name)
          `)
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(3)

        if (data) {
          setBlogPosts(data)
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        // Gracefully handle error - fallback data will be used
      }
    }

    fetchBlogPosts()
  }, [])

  const displayBlogPosts =
    blogPosts.length > 0
      ? blogPosts
      : [
          {
            id: 1,
            title: "The Future of Paramedical Education: Embracing Technology and Innovation",
            summary:
              "Discover how cutting-edge technology is revolutionizing paramedical education and preparing students for tomorrow's healthcare challenges.",
            categories: { name: "Education" },
            authors: { name: "Dr. Rajesh Kumar" },
            created_at: "2024-12-20",
            featured_image_url: "/placeholder.svg?height=300&width=400",
            slug: "future-paramedical-education-technology",
          },
          {
            id: 2,
            title: "Success Story: From Student to Healthcare Hero",
            summary:
              "Follow the inspiring journey of our alumna who became a leading medical technologist in a premier hospital.",
            categories: { name: "Success Stories" },
            authors: { name: "Priya Nair" },
            created_at: "2024-12-18",
            featured_image_url: "/placeholder.svg?height=300&width=400",
            slug: "success-story-student-healthcare-hero",
          },
          {
            id: 3,
            title: "Latest Advances in Medical Laboratory Technology",
            summary:
              "Explore the cutting-edge developments in medical lab technology that are transforming diagnostic medicine.",
            categories: { name: "Industry News" },
            authors: { name: "Dr. Suresh Menon" },
            created_at: "2024-12-15",
            featured_image_url: "/placeholder.svg?height=300&width=400",
            slug: "advances-medical-laboratory-technology",
          },
        ]

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Script
        src="https://dxyfhfnbvotbixwyhdsf.supabase.co/functions/v1/chatbot-widget?chatbot-id=5eb0db58-85f1-4831-bff9-0620c0e15e82"
        strategy="afterInteractive"
      />

      <Header />
      <AdmissionsPopup />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/95 to-[#003d82]/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center py-32">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 shadow-2xl">
                Leading Paramedical Education Institute in Kerala
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Building Medical
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join Kerala's premier paramedical institute with{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                UGC, NSQF, NAAC
              </span>{" "}
              Approved Programs
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="group bg-white text-[#002366] hover:bg-blue-50 text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <GraduationCap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Courses
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link href="/apply">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-12 py-5 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  Apply Now
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "15+", label: "Courses Available" },
                { number: "100%", label: "Placement Support" },
                { number: "500+", label: "Students Trained" },
                { number: "5+", label: "Partner Hospitals" },
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

      {/* Chairman's Message - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Chairman Photo */}
              <div className="relative order-2 lg:order-1">
                <div className="relative group">
                  {/* Background Decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute -inset-2 bg-white rounded-2xl shadow-2xl"></div>

                  {/* Chairman Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/chairman-new.jpg"
                      alt="Shyamlaiju. LS - Chairman"
                      width={600}
                      height={700}
                      className="w-full h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center shadow-xl">
                    <Quote className="h-6 w-6 text-white" />
                  </div>

                  {/* Chairman Title Card */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#002366] mb-1">Shyamlaiju. LS</div>
                      <div className="text-sm text-gray-600 font-medium">Chairman</div>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chairman Message Content */}
              <div className="order-1 lg:order-2">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                      <Award className="h-5 w-5 text-[#002366] mr-2" />
                      <span className="text-sm font-medium text-[#002366]">Leadership Message</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-8 leading-tight">
                      Chairman's Message
                    </h2>
                  </div>

                  {/* Enhanced Quote */}
                  <div className="relative">
                    <div className="absolute -left-4 -top-4 text-6xl text-[#002366]/10 font-serif">"</div>
                    <blockquote className="text-xl text-gray-700 leading-relaxed pl-8 pr-4 py-6 bg-white/50 rounded-2xl border-l-4 border-[#002366] shadow-lg">
                      Adhithyan Institute of Paramedical Science is committed to delivering high-quality education and
                      hands-on training in the field of healthcare.
                    </blockquote>
                    <div className="absolute -right-4 -bottom-4 text-6xl text-[#002366]/10 font-serif rotate-180">
                      "
                    </div>
                  </div>

                  {/* Vision Card */}
                  <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-2xl p-8 text-white shadow-2xl">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-yellow-300" />
                      </div>
                      <h3 className="text-2xl font-semibold">Our Commitment</h3>
                    </div>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      To foster excellence, innovation, and compassionate healthcare professionals who serve humanity
                      with dedication and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Institute Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">About Adhithyan Institute</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Adhithyan Institute of Paramedical Science was founded with a clear mission: to provide world-class
                paramedical education and create competent healthcare professionals who serve humanity with dedication
                and expertise.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative group">
                {/* Futuristic Background Effects */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -inset-6 bg-gradient-to-br from-[#002366]/5 to-[#003d82]/5 rounded-3xl"></div>

                {/* Animated Border Elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 backdrop-blur-sm">
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 rounded-tl-lg opacity-60"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-blue-400 rounded-tr-lg opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400 rounded-bl-lg opacity-60"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-indigo-400 rounded-br-lg opacity-60"></div>

                  {/* Image with Perfect Fit */}
                  <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-50 to-blue-50/30">
                    <Image
                      src="/lbs-skill-center.png"
                      alt="LBS Skill Centre - Government of Kerala"
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-lg"
                      style={{ objectFit: "contain" }}
                    />

                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
                  </div>

                  {/* Tech Grid Overlay */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `
                        linear-gradient(rgba(0, 35, 102, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 35, 102, 0.1) 1px, transparent 1px)
                      `,
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-xl opacity-80 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg flex items-center justify-center shadow-lg opacity-70 group-hover:-rotate-12 transition-transform duration-500">
                  <Building className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-[#002366] mb-6">Our Legacy</h3>
                  <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                    <p>
                      We offer UGC, NSQF, NAAC, PSC approved university courses, providing comprehensive healthcare
                      education through our specialized programs.
                    </p>

                    <p>
                      <strong>Our B.VOC Programs include:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>B.VOC in Medical Lab Technology</li>
                      <li>B.VOC in Dialysis Technology</li>
                      <li>B.VOC in Radiology & Medical Imaging Technology</li>
                      <li>B.VOC in Cardiac Care Technology</li>
                      <li>B.VOC in Ophthalmic Technology</li>
                      <li>B.VOC in Operation Theatre Technology</li>
                      <li>B.VOC in Hospital Administration</li>
                    </ul>

                    <p>
                      Additionally, we offer all Kerala Government LBS-approved Skill Diploma Courses, ensuring our
                      students receive industry-relevant training and certification.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Futuristic Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0.5 bg-white/80 rounded-2xl"></div>

                    <div className="relative z-10">
                      <Award className="h-10 w-10 text-[#002366] mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-bold text-[#002366] mb-3 text-lg">Accredited Programs</h4>
                      <p className="text-gray-600">UGC, NSQF, NAAC approved courses with industry recognition</p>
                    </div>
                  </div>

                  <div className="relative group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Futuristic Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0.5 bg-white/80 rounded-2xl"></div>

                    <div className="relative z-10">
                      <Users className="h-10 w-10 text-[#002366] mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-bold text-[#002366] mb-3 text-lg">Expert Faculty</h4>
                      <p className="text-gray-600">Experienced professionals with industry expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Network</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Collaborating with leading healthcare institutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Neyyar Medicity</h3>
                  <p className="text-gray-600 text-center font-medium">Kattakkada</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Saraswathi Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Parassala</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Mamal Multi Speciality Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Kattakkada</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Rollands Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Neyyattinkara</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Royal Medicity Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Pazhayakada and Shangumugham</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Ananthapuri Hospitals</h3>
                  <p className="text-gray-600 text-center font-medium">Thiruvananthapuram</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">PRS Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Thiruvananthapuram</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#002366] mb-2 text-center">Nirmala Hospital</h3>
                  <p className="text-gray-600 text-center font-medium">Thiruvananthapuram</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Excellence in Healthcare Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Adhithyan Institute the preferred choice for aspiring healthcare professionals across
              Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UGC Approved Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of paramedical courses designed to meet industry standards and career
              aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.slice(0, 6).map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#002366] text-white shadow-lg">{course.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <course.icon className="h-6 w-6 text-[#002366]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <Badge variant="outline" className="text-[#002366] border-[#002366]">
                      {course.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    {course.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Latest Updates</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">From Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and stories from our institute and the healthcare industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {displayBlogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featured_image_url || "/placeholder.svg?height=300&width=400"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#002366] text-white shadow-lg">{post.categories?.name}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />5 min read
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#002366] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.summary}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">{post.authors?.name}</span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-all duration-300 bg-transparent"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Student Success</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful graduates who are now making a difference in healthcare institutions across
              India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4 shadow-lg"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Healthcare Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful healthcare professionals who started their career at Adhithyan Institute.
              Apply now and secure your future in the growing healthcare industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#002366] hover:bg-blue-50 text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <ExternalLink className="mr-3 h-6 w-6" />
                  Apply Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-transparent"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
