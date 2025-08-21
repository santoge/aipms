"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Shield,
  BookOpen,
  MessageCircle,
  Target,
  Calendar,
  Star,
  CheckCircle,
  Brain,
  Smile,
  Award,
  UserCheck,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const carePrograms = [
  {
    icon: Users,
    title: "Team Building Activities",
    description: "Creating a sense of belonging through collaborative experiences",
    color: "from-blue-500 to-cyan-500",
    activities: ["Group projects", "Social events", "Peer mentoring", "Community service"],
  },
  {
    icon: Shield,
    title: "Problem Prevention",
    description: "Developing skills and knowledge to prevent specific issues",
    color: "from-purple-500 to-pink-500",
    activities: ["Anti-bullying programs", "Conflict resolution", "Stress management", "Digital wellness"],
  },
  {
    icon: Heart,
    title: "Emotional Support",
    description: "Providing counseling and comfort for students in need",
    color: "from-green-500 to-emerald-500",
    activities: ["Individual counseling", "Group therapy", "Crisis intervention", "Grief support"],
  },
  {
    icon: Target,
    title: "Academic Guidance",
    description: "Supporting study patterns and academic achievement",
    color: "from-orange-500 to-red-500",
    activities: ["Study skills", "Time management", "Goal setting", "Academic planning"],
  },
]

const supportAreas = [
  {
    title: "Personal Wellbeing",
    description: "Comprehensive support for mental, emotional, and physical health",
    icon: Smile,
    services: [
      "Mental health counseling",
      "Stress management workshops",
      "Wellness programs",
      "Health screenings",
      "Mindfulness training",
    ],
  },
  {
    title: "Social Development",
    description: "Building healthy relationships and social skills",
    icon: Users,
    services: [
      "Peer relationship guidance",
      "Communication skills",
      "Social integration programs",
      "Cultural sensitivity training",
      "Leadership development",
    ],
  },
  {
    title: "Academic Progress",
    description: "Ensuring students reach their full academic potential",
    icon: BookOpen,
    services: [
      "Study pattern analysis",
      "Learning style assessment",
      "Academic goal setting",
      "Progress monitoring",
      "Remedial support",
    ],
  },
  {
    title: "Career Guidance",
    description: "Preparing students for successful healthcare careers",
    icon: Target,
    services: [
      "Career counseling",
      "Post-college pathways",
      "Industry connections",
      "Skill development",
      "Professional networking",
    ],
  },
]

const pastoralTeam = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Pastoral Care Officer",
    specialization: "Clinical Psychology & Student Welfare",
    experience: "15+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["PhD in Clinical Psychology", "Certified Counselor", "Student Welfare Specialist"],
  },
  {
    name: "Mrs. Priya",
    position: "Student Counselor",
    specialization: "Educational Psychology & Guidance",
    experience: "10+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["M.A. in Psychology", "Guidance Counselor Certification", "Crisis Intervention Training"],
  },
  {
    name: "Mr. Rajesh",
    position: "Wellness Coordinator",
    specialization: "Mental Health & Wellness Programs",
    experience: "8+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["M.Sc. in Mental Health", "Wellness Program Certification", "Group Therapy Training"],
  },
]

export default function PastoralCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/80 to-[#003d82]/70"></div>

          {/* Floating Care Icons */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
              <Users className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
              <Shield className="h-7 w-7 text-blue-300" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20">
                <Heart className="h-4 w-4 mr-2" />
                Comprehensive Student Welfare & Support
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Pastoral
              </span>
              <br />
              <span className="text-white">Care</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Nurturing your{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Personal & Social Wellbeing
              </span>{" "}
              for academic success and life fulfillment
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "24/7", label: "Support Available" },
                { number: "100%", label: "Student Coverage" },
                { number: "4", label: "Core Programs" },
                { number: "Expert", label: "Care Team" },
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
                  alt="Pastoral Care Center"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">Care</div>
                    <div className="text-sm text-gray-600">& Support</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                    <Brain className="h-5 w-5 text-[#002366] mr-2" />
                    <span className="text-sm font-medium text-[#002366]">Holistic Student Development</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Comprehensive Care & Support</h2>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Pastoral care at Adhithyan Institute is{" "}
                      <strong className="text-[#002366]">concerned with the care and promotion</strong> of all students'
                      personal and social wellbeing, ensuring progress and fostering positive attitudes.
                    </p>
                    <p className="leading-relaxed">
                      Pastoral Care is <strong className="text-[#002366]">central to the College</strong> achieving its
                      educational aims of enabling students to reach their academic potential while developing as
                      well-rounded individuals.
                    </p>
                    <p className="leading-relaxed">
                      Our <strong className="text-[#002366]">pastoral teacher</strong> is the member of staff who takes
                      primary responsibility for the welfare, achievement and behavior management of each student and is
                      the first point of contact between parents and the college.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <UserCheck className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Personal Development</h4>
                    <p className="text-sm text-gray-600">Individual growth and character building programs</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Award className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Academic Excellence</h4>
                    <p className="text-sm text-gray-600">Supporting students to reach their full potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Four Pillars of Care</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive pastoral care program includes these essential pillars
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {carePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${program.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}
                      >
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{program.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#002366] mb-3">Key Activities:</h4>
                      {program.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{activity}</span>
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

      {/* Support Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Support Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support across all aspects of student life and development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <area.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#002366]">{area.title}</h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {area.services.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
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

      {/* Pastoral Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Care Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated professionals committed to your wellbeing and success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastoralTeam.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="w-30 h-30 rounded-full mx-auto object-cover border-4 border-[#002366]/20 group-hover:border-[#002366] transition-colors duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#002366] to-[#003d82] text-white rounded-full p-2">
                        <Heart className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#002366] mb-2">{member.name}</h3>
                    <Badge className="bg-[#002366] text-white mb-3">{member.position}</Badge>
                    <p className="text-gray-600 mb-4 text-sm">{member.specialization}</p>

                    <div className="space-y-2 mb-4">
                      {member.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex items-center justify-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {qual}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {member.experience}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Schedule */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="p-8 bg-white shadow-xl border-0">
                <h3 className="text-2xl font-bold text-[#002366] mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3" />
                  Support Schedule
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Individual Counseling</span>
                    <span className="text-[#002366]">Mon-Fri 9AM-5PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Group Sessions</span>
                    <span className="text-[#002366]">Wed & Fri 2PM-4PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Crisis Support</span>
                    <span className="text-[#002366]">24/7 Available</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Wellness Programs</span>
                    <span className="text-[#002366]">Daily Activities</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-[#002366] to-[#003d82] text-white shadow-xl border-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Get Support
                </h3>
                <div className="space-y-6">
                  <p className="text-blue-100 leading-relaxed">
                    Our pastoral care team is here to support you through any challenges you may face during your
                    academic journey.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                      <span className="text-blue-100">Confidential counseling sessions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                      <span className="text-blue-100">Academic and personal guidance</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                      <span className="text-blue-100">Crisis intervention support</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                      <span className="text-blue-100">Wellness and mindfulness programs</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Support? We're Here for You</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't hesitate to reach out - our pastoral care team is ready to support your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule Counseling
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
