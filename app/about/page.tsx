"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  Award,
  Building,
  CheckCircle,
  Star,
  ExternalLink,
  BookOpen,
  Target,
  Eye,
  Heart,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ChatBot from "@/components/chatbot"

const milestones = [
  {
    year: "2018",
    title: "Institute Founded",
    description:
      "Adhithyan Institute of Paramedical Science was established with a vision to provide quality healthcare education.",
    icon: Building,
  },
  {
    year: "2020",
    title: "UGC Recognition",
    description: "Received University Grants Commission approval for all B.VOC programs.",
    icon: Award,
  },
  {
    year: "2021",
    title: "NAAC Accreditation",
    description: "Achieved National Assessment and Accreditation Council accreditation.",
    icon: Star,
  },
  {
    year: "2022",
    title: "100% Placement Record",
    description: "Achieved remarkable milestone of 100% placement for graduating students.",
    icon: CheckCircle,
  },
  {
    year: "2023",
    title: "Industry Partnerships",
    description: "Established strategic partnerships with leading healthcare institutions across Kerala.",
    icon: Users,
  },
  {
    year: "2024",
    title: "500+ Graduates",
    description: "Celebrated the milestone of training over 500 healthcare professionals.",
    icon: GraduationCap,
  },
]

const values = [
  {
    title: "Excellence",
    description: "We strive for the highest standards in education, training, and student outcomes.",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge technology and modern teaching methodologies.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our operations and relationships.",
    icon: Heart,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Compassion",
    description: "We foster empathy and care in our students to serve humanity with dedication.",
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
]

const stats = [
  { number: "500+", label: "Students Graduated", icon: GraduationCap },
  { number: "95%", label: "Placement Rate", icon: Award },
  { number: "15+", label: "Expert Faculty", icon: Users },
  { number: "6", label: "Years of Excellence", icon: Building },
]

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/95 to-[#003d82]/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20">
                About Adhithyan Institute
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Our Story of Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the journey of Kerala's premier paramedical institute, committed to shaping the future of
              healthcare professionals.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-cyan-300 mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-xs font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Story</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">
                    Building Healthcare Excellence Since 2018
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Adhithyan Institute of Paramedical Science was founded with a clear mission: to provide world-class
                    paramedical education and create competent healthcare professionals who serve humanity with
                    dedication and expertise.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002366] mb-2">Our Foundation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Established by visionary leaders with decades of experience in healthcare and education, we
                        began our journey to bridge the gap between academic learning and practical healthcare skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002366] mb-2">Our Growth</h3>
                      <p className="text-gray-700 leading-relaxed">
                        From a small institute to Kerala's premier paramedical education center, we have consistently
                        expanded our programs, facilities, and partnerships to serve more students and communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002366] mb-2">Our Impact</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Today, our graduates work in leading healthcare institutions across India, making a positive
                        impact on countless lives and contributing to the advancement of healthcare services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#002366]/10 to-[#003d82]/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/about/faculty-group.jpg"
                      alt="Faculty and Staff Group Photo"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/20 to-transparent"></div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-bold text-[#002366] mb-1">Our Dedicated Team</h3>
                        <p className="text-sm text-gray-600">
                          Faculty and staff committed to excellence in healthcare education
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Vision & Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Guiding Principles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our vision and mission drive everything we do, from curriculum development to student support and
                industry partnerships.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">
                  To be the leading paramedical education institute in Kerala, recognized globally for excellence in
                  healthcare education, innovation, and producing competent healthcare professionals who serve humanity
                  with dedication and expertise.
                </p>
              </div>

              <div className="bg-white border-2 border-[#002366]/20 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#002366]">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide world-class paramedical education through innovative teaching methodologies,
                  state-of-the-art infrastructure, industry partnerships, and comprehensive student support, ensuring
                  100% placement and creating healthcare professionals who make a positive impact on society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Values</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Core Values That Define Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental values guide our decisions, shape our culture, and inspire our commitment to
                excellence in healthcare education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Journey</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Milestones & Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A timeline of our key achievements and milestones that have shaped our journey towards excellence in
                paramedical education.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#002366] to-[#003d82] rounded-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#002366] rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                      <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-full flex items-center justify-center mr-4">
                              <milestone.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-lg font-bold text-[#002366]">{milestone.year}</div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of Our Success Story</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join Adhithyan Institute and become part of a legacy of excellence in healthcare education. Your journey
              to a rewarding healthcare career starts here.
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
              <Link href="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-transparent"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
