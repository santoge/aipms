"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Users,
  Shield,
  BookOpen,
  MessageCircle,
  Target,
  Calendar,
  Star,
  CheckCircle,
  Heart,
  Smile,
  Award,
  UserCheck,
  Clock,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const counsellingServices = [
  {
    icon: Brain,
    title: "Academic Counselling",
    description: "Guidance for academic challenges and study strategies",
    color: "from-blue-500 to-cyan-500",
    services: ["Study skills development", "Time management", "Exam anxiety support", "Academic goal setting"],
  },
  {
    icon: Heart,
    title: "Personal Counselling",
    description: "Support for personal and emotional challenges",
    color: "from-purple-500 to-pink-500",
    services: ["Stress management", "Anxiety support", "Depression counseling", "Self-esteem building"],
  },
  {
    icon: Users,
    title: "Social Counselling",
    description: "Help with relationships and social interactions",
    color: "from-green-500 to-emerald-500",
    services: ["Peer relationships", "Communication skills", "Conflict resolution", "Social anxiety"],
  },
  {
    icon: Target,
    title: "Career Counselling",
    description: "Guidance for career planning and professional development",
    color: "from-orange-500 to-red-500",
    services: ["Career exploration", "Job search strategies", "Interview preparation", "Professional networking"],
  },
]

const counsellingApproaches = [
  {
    title: "Individual Counselling",
    description: "One-on-one sessions tailored to your specific needs",
    icon: UserCheck,
    features: [
      "Personalized attention",
      "Confidential environment",
      "Flexible scheduling",
      "Goal-oriented approach",
      "Progress tracking",
    ],
  },
  {
    title: "Group Counselling",
    description: "Peer support sessions for shared experiences",
    icon: Users,
    features: [
      "Peer support network",
      "Shared experiences",
      "Group dynamics",
      "Social skills development",
      "Cost-effective approach",
    ],
  },
  {
    title: "Crisis Intervention",
    description: "Immediate support for urgent situations",
    icon: Shield,
    features: [
      "24/7 availability",
      "Immediate response",
      "Safety assessment",
      "Emergency protocols",
      "Follow-up support",
    ],
  },
  {
    title: "Preventive Programs",
    description: "Proactive mental health and wellness initiatives",
    icon: Award,
    features: [
      "Mental health awareness",
      "Stress prevention",
      "Wellness workshops",
      "Mindfulness training",
      "Resilience building",
    ],
  },
]

const counsellingTeam = [
  {
    name: "Dr. Meera Krishnan",
    position: "Chief Counsellor",
    specialization: "Clinical Psychology & Mental Health",
    experience: "12+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["PhD in Clinical Psychology", "Licensed Mental Health Counselor", "Trauma Specialist"],
    expertise: ["Depression & Anxiety", "Academic Stress", "Career Guidance"],
  },
  {
    name: "Mrs. Anjali",
    position: "Student Counsellor",
    specialization: "Educational Psychology & Student Support",
    experience: "8+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["M.A. in Psychology", "Certified Student Counselor", "Group Therapy Training"],
    expertise: ["Study Skills", "Peer Relationships", "Social Anxiety"],
  },
  {
    name: "Mr. Suresh",
    position: "Career Counsellor",
    specialization: "Career Development & Guidance",
    experience: "10+ Years",
    image: "/placeholder.svg?height=200&width=200",
    qualifications: ["M.Sc. in Psychology", "Career Development Certification", "Industry Experience"],
    expertise: ["Career Planning", "Job Placement", "Professional Skills"],
  },
]

const mentalHealthResources = [
  {
    category: "Self-Help Resources",
    items: [
      "Stress management techniques",
      "Mindfulness and meditation guides",
      "Study skills worksheets",
      "Goal setting templates",
      "Mood tracking tools",
    ],
  },
  {
    category: "Emergency Support",
    items: [
      "24/7 crisis hotline",
      "Emergency counseling sessions",
      "Safety planning resources",
      "Referral to external services",
      "Family notification protocols",
    ],
  },
  {
    category: "Wellness Programs",
    items: [
      "Mental health awareness workshops",
      "Stress reduction seminars",
      "Peer support groups",
      "Wellness challenges",
      "Relaxation sessions",
    ],
  },
  {
    category: "Academic Support",
    items: [
      "Study skills workshops",
      "Time management training",
      "Exam preparation strategies",
      "Academic goal setting",
      "Learning style assessment",
    ],
  },
]

export default function CounsellingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/80 to-[#003d82]/70"></div>

          {/* Floating Mental Health Icons */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
              <Heart className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
              <Smile className="h-7 w-7 text-blue-300" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20">
                <Brain className="h-4 w-4 mr-2" />
                Professional Mental Health & Wellness Support
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Student
              </span>
              <br />
              <span className="text-white">Counselling</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Professional support for your{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Mental Health & Academic Success
              </span>{" "}
              throughout your educational journey
            </p>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Phone className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                <p className="text-blue-100 text-sm">Crisis Hotline</p>
                <p className="text-white font-semibold">24/7 Available</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Mail className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                <p className="text-blue-100 text-sm">counselling@adhithyan.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Calendar className="h-8 w-8 text-cyan-300 mx-auto mb-3" />
                <p className="text-blue-100 text-sm">Book Appointment</p>
                <p className="text-white font-semibold">Online & Walk-in</p>
              </div>
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
                  alt="Counselling Center"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">Safe</div>
                    <div className="text-sm text-gray-600">& Confidential</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                    <Smile className="h-5 w-5 text-[#002366] mr-2" />
                    <span className="text-sm font-medium text-[#002366]">Professional Mental Health Support</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Your Mental Health Matters</h2>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Our counselling services provide{" "}
                      <strong className="text-[#002366]">professional, confidential support</strong> to help students
                      navigate academic, personal, and social challenges during their educational journey.
                    </p>
                    <p className="leading-relaxed">
                      We offer <strong className="text-[#002366]">individual and group counselling</strong> sessions,
                      crisis intervention, and preventive mental health programs designed to promote overall wellbeing
                      and academic success.
                    </p>
                    <p className="leading-relaxed">
                      Our <strong className="text-[#002366]">qualified counsellors</strong> use evidence-based
                      approaches to help students develop coping strategies, improve mental health, and achieve their
                      personal and academic goals.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Shield className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Confidential Support</h4>
                    <p className="text-sm text-gray-600">Safe, private environment for all counselling sessions</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Clock className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">24/7 Crisis Support</h4>
                    <p className="text-sm text-gray-600">Emergency counselling available round the clock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselling Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Counselling Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive mental health support tailored to your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {counsellingServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${service.color} rounded-full w-12 h-12 flex items-center justify-center mr-4`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{service.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#002366] mb-3">Services Include:</h4>
                      {service.services.map((item, idx) => (
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

      {/* Counselling Approaches */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple counselling approaches to meet diverse student needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {counsellingApproaches.map((approach, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <approach.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#002366]">{approach.title}</h3>
                        <p className="text-gray-600 text-sm">{approach.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {approach.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
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

      {/* Counselling Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Counselling Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Qualified professionals dedicated to your mental health and wellbeing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {counsellingTeam.map((member, index) => (
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
                        <Brain className="h-4 w-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#002366] mb-2">{member.name}</h3>
                    <Badge className="bg-[#002366] text-white mb-3">{member.position}</Badge>
                    <p className="text-gray-600 mb-4 text-sm">{member.specialization}</p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-[#002366] text-sm">Qualifications:</h4>
                      {member.qualifications.map((qual, idx) => (
                        <div key={idx} className="flex items-center justify-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          {qual}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-[#002366] text-sm">Expertise:</h4>
                      <div className="flex flex-wrap justify-center gap-1">
                        {member.expertise.map((exp, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {exp}
                          </Badge>
                        ))}
                      </div>
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

      {/* Mental Health Resources */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Resources & Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive resources to support your mental health journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mentalHealthResources.map((section, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{section.category}</h3>
                    </div>

                    <div className="space-y-3">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
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

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Crisis Support Available 24/7</h2>
            <p className="text-xl text-red-100 mb-8">
              If you're experiencing a mental health crisis, don't wait - reach out for immediate support
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Crisis Hotline</h3>
                <p className="text-red-100">Call: +91 9562934815</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Emergency Chat</h3>
                <p className="text-red-100">Available 24/7</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Walk-in Support</h3>
                <p className="text-red-100">Campus Counselling Center</p>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take the First Step Towards Better Mental Health</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our counselling team is here to support you - book an appointment today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
