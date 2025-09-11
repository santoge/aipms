"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Building, CheckCircle, Star, ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ChatBot from "@/components/chatbot"

const managementTeam = [
  {
    id: 1,
    name: "Shyamlaiju. LS",
    position: "Chairman",
    image: "/chairman-new.jpg",
    bio: "Visionary leader with over 20 years of experience in healthcare education and administration. Committed to excellence in paramedical training.",
    qualifications: ["BA", "LLB"],
    expertise: ["Healthcare Administration", "Strategic Planning", "Quality Assurance"],
  },
  {
    id: 2,
    name: "Manjusha PG",
    position: "Vice Chairman",
    image: "/leadership/manjusha.jpg",
    bio: "Experienced academic leader with 8 years of experience in educational management and student support services.",
    qualifications: ["BA-Malayalam"],
    expertise: ["Curriculum Development", "Academic Planning", "Student Assessment"],
  },
  {
    id: 3,
    name: "Shyni S Shaji",
    position: "Manager",
    image: "/faculty/shyni.jpg",
    bio: "Educational management specialist with expertise in student support services and operational excellence.",
    qualifications: ["BBA - Special Educator"],
    expertise: ["Educational Management", "Student Support Services", "Administrative Operations"],
  },
  {
    id: 4,
    name: "Sunilkumar. S",
    position: "Administration Officer",
    image: "/leadership/sunil-kumar.jpg",
    bio: "Dynamic leader with extensive experience in educational management and healthcare operations. Drives innovation and excellence in paramedical education.",
    qualifications: ["MA- HISTORY", "JUNIOR EMPLOYMENT OFFICER(RTD)"],
    expertise: ["Operations Management", "Technology Integration", "Process Optimization"],
  },
  {
    id: 5,
    name: "Thushara. A. J",
    position: "Principal",
    image: "/leadership/thushara.jpg",
    bio: "Skilled operations manager ensuring smooth functioning of all institute activities and maintaining high operational standards.",
    qualifications: [
      "PhD Scholar in Biochemistry, University of Kerala",
      "MSc. Biochemistry - 2nd Rank Holder",
      "BSc. Biochemistry",
      "Former Research Assistant in Biochemistry department, University of Kerala, Karyavattom Campus",
    ],
    expertise: ["Operations Management", "Resource Planning", "Quality Control"],
  },
  {
    id: 6,
    name: "Reshma J.S",
    position: "Accountant",
    image: "/faculty/reshma.jpg",
    bio: "Financial management specialist with expertise in computer systems and accounting. Ensures accurate financial operations and reporting.",
    qualifications: ["MSc Computer Science"],
    expertise: ["Financial Management", "Computer Systems", "Accounting Operations"],
  },
]

const achievements = [
  {
    title: "UGC Recognition",
    description: "All programs approved by University Grants Commission",
    icon: Award,
    year: "2020",
  },
  {
    title: "NAAC Accreditation",
    description: "Accredited by National Assessment and Accreditation Council",
    icon: Star,
    year: "2021",
  },
  {
    title: "100% Placement Record",
    description: "Consistent placement success for all graduating students",
    icon: CheckCircle,
    year: "2022-2024",
  },
  {
    title: "Industry Partnerships",
    description: "Strategic partnerships with leading healthcare institutions",
    icon: Building,
    year: "2023",
  },
]

const stats = [
  { number: "6", label: "Leadership Team Members", icon: Users },
  { number: "20+", label: "Years Combined Experience", icon: Award },
  { number: "500+", label: "Students Guided", icon: Building },
  { number: "15+", label: "Programs Managed", icon: BookOpen },
]

export default function ManagementPage() {
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
                Leadership Excellence
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Our Management Team
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders driving excellence in paramedical education and shaping the future of
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

      {/* Management Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Leadership Team</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Meet Our Leaders</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced management team brings together decades of expertise in healthcare education,
                operations, and strategic leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {managementTeam.map((member) => (
                <Card
                  key={member.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#002366] text-white shadow-lg">{member.position}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#002366] mb-2">{member.name}</h3>
                      <p className="text-lg text-gray-600 font-medium mb-4">{member.position}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-[#002366] mb-2">Qualifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.qualifications.map((qual, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-50 text-[#002366] rounded-full text-sm font-medium"
                            >
                              {qual}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#002366] mb-2">Expertise:</h4>
                        <div className="space-y-1">
                          {member.expertise.map((skill, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-center text-sm text-gray-600"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Achievements</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Milestones & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized through various accreditations and achievements in
                healthcare education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-[#002366] font-semibold mb-2">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Our Vision</Badge>
                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Vision & Mission</h2>
                </div>

                <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-2xl p-8 text-white shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-yellow-300" />
                    </div>
                    <h3 className="text-2xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-lg">
                    To be the leading paramedical education institute in Kerala, recognized for excellence in healthcare
                    education, innovation, and producing competent healthcare professionals who serve humanity with
                    dedication.
                  </p>
                </div>

                <div className="bg-white border-2 border-[#002366]/20 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#002366] rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#002366]">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To provide world-class paramedical education through innovative teaching methodologies,
                    state-of-the-art infrastructure, and industry partnerships, ensuring 100% placement support and
                    creating healthcare professionals who make a positive impact on society.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#002366]/10 to-[#003d82]/10 rounded-3xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Excellence Journey</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Be part of an institution led by visionary leaders committed to your success in the healthcare industry.
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
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-transparent"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Learn More
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
