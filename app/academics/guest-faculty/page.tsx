"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Award,
  Users,
  Star,
  Heart,
  Building,
  Phone,
  Mail,
  Stethoscope,
  BookOpen,
  Globe,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const guestFaculty = [
  {
    name: "Dr. D. Rajan",
    position: "Guest Lecturer",
    specialization: "Pulmonologist",
    image: "/faculty/dr-rajan.jpg",
    qualifications: ["MBBS", "MD"],
    experience: "20 Years",
    expertise: "Pulmonary Medicine & Respiratory Care",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
    description: "Renowned pulmonologist with extensive experience in respiratory medicine and critical care.",
  },
]

const industryQualities = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Real-world experience from leading healthcare professionals",
    metric: "20+ Years",
  },
  {
    icon: Heart,
    title: "Practical Knowledge",
    description: "Hands-on experience in clinical practice and patient care",
    metric: "Expert Level",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Guidance from experienced practitioners in the field",
    metric: "Personalized",
  },
  {
    icon: TrendingUp,
    title: "Current Trends",
    description: "Up-to-date knowledge of latest medical practices and technologies",
    metric: "Latest",
  },
]

const specializations = [
  {
    name: "Pulmonary Medicine",
    icon: Stethoscope,
    color: "from-blue-500 to-cyan-500",
    topics: ["Respiratory Disorders", "Critical Care", "Lung Function Tests", "Ventilator Management"],
  },
  {
    name: "Clinical Practice",
    icon: Heart,
    color: "from-red-500 to-pink-500",
    topics: ["Patient Care", "Diagnostic Procedures", "Treatment Protocols", "Emergency Medicine"],
  },
  {
    name: "Medical Research",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    topics: ["Clinical Studies", "Evidence-Based Medicine", "Research Methodology", "Medical Publications"],
  },
  {
    name: "Healthcare Management",
    icon: Building,
    color: "from-purple-500 to-indigo-500",
    topics: ["Hospital Administration", "Quality Assurance", "Healthcare Systems", "Medical Ethics"],
  },
]

export default function GuestFacultyPage() {
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
                <Star className="h-4 w-4 mr-2" />
                Industry Experts
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Guest
              </span>
              <br />
              <span className="text-white">Faculty</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Learn from{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Industry Leaders
              </span>{" "}
              and experienced healthcare professionals
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "1", label: "Guest Lecturer" },
                { number: "20+", label: "Years Experience" },
                { number: "Expert", label: "Industry Knowledge" },
                { number: "Practical", label: "Real-world Training" },
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

      {/* Industry Excellence */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Industry Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our guest faculty brings real-world experience and industry expertise to enhance your learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {industryQualities.map((quality, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <quality.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#002366] mb-2">{quality.metric}</div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-3">{quality.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{quality.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Faculty Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Meet Our Guest Lecturers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry experts sharing their knowledge and experience with our students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {guestFaculty.map((faculty, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2 max-w-md mx-auto"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Specialization Badge */}
                      <Badge className="absolute top-4 left-4 bg-[#002366] text-white shadow-lg">
                        {faculty.specialization}
                      </Badge>

                      {/* Experience Badge */}
                      <Badge className="absolute top-4 right-4 bg-white/90 text-[#002366] shadow-lg">
                        {faculty.experience}
                      </Badge>

                      {/* Icon */}
                      <div
                        className={`absolute bottom-4 right-4 bg-gradient-to-r ${faculty.color} rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <faculty.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#002366] mb-2 group-hover:text-[#003d82] transition-colors">
                        {faculty.name}
                      </h3>
                      <Badge className="bg-[#002366] text-white mb-4">{faculty.position}</Badge>
                      <p className="text-gray-600 mb-4 text-sm">{faculty.description}</p>

                      {/* Expertise */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#002366] mb-2 text-sm">Expertise:</h4>
                        <p className="text-gray-600 text-sm">{faculty.expertise}</p>
                      </div>

                      {/* Qualifications */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#002366] mb-2 text-sm">Qualifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {faculty.qualifications.map((qual, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {qual}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive coverage of specialized medical fields and practical applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specializations.map((spec, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${spec.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}
                      >
                        <spec.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{spec.name}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {spec.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center">
                          <Award className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{topic}</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn from Industry Experts</h2>
            <p className="text-xl text-blue-100 mb-8">
              Gain practical knowledge and real-world insights from experienced healthcare professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <Mail className="mr-2 h-5 w-5" />
                Contact Guest Faculty
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
