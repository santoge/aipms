"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Headphones,
  Monitor,
  Mic,
  Volume2,
  Globe,
  Users,
  Play,
  BookOpen,
  Star,
  CheckCircle,
  Brain,
  Languages,
  Wifi,
  Settings,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const labFeatures = [
  {
    icon: Headphones,
    title: "Individual Headsets",
    description: "High-quality audio delivery for each student",
    metric: "50+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Digital Workstations",
    description: "Modern computer systems with language software",
    metric: "Advanced",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Mic,
    title: "Recording Capability",
    description: "Practice and record pronunciation exercises",
    metric: "HD Quality",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Volume2,
    title: "Audio-Visual Materials",
    description: "Interactive multimedia learning resources",
    metric: "1000+",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Teacher Control",
    description: "Instructor can monitor and guide students",
    metric: "Real-time",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Support for various international languages",
    metric: "10+",
    color: "from-teal-500 to-cyan-500",
  },
]

const languagePrograms = [
  {
    language: "English",
    level: "Beginner to Advanced",
    focus: "Medical English & Communication",
    icon: "🇺🇸",
    skills: ["Medical Terminology", "Patient Communication", "Professional Writing", "Presentation Skills"],
  },
  {
    language: "German",
    level: "Basic to Intermediate",
    focus: "Healthcare German",
    icon: "🇩🇪",
    skills: ["Medical German", "Cultural Awareness", "Professional Interaction", "Technical Documentation"],
  },
  {
    language: "French",
    level: "Basic to Intermediate",
    focus: "Medical French",
    icon: "🇫🇷",
    skills: ["Healthcare Vocabulary", "Patient Care Communication", "Medical Reports", "Cultural Competency"],
  },
  {
    language: "Arabic",
    level: "Basic to Intermediate",
    focus: "Healthcare Arabic",
    icon: "🇸🇦",
    skills: ["Medical Arabic", "Cultural Sensitivity", "Patient Interaction", "Professional Communication"],
  },
]

const learningMethods = [
  {
    title: "Interactive Listening",
    description: "Audio materials with native speaker pronunciation",
    icon: Headphones,
    benefits: ["Improved comprehension", "Accent training", "Listening skills"],
  },
  {
    title: "Speaking Practice",
    description: "Record and compare pronunciation with native speakers",
    icon: Mic,
    benefits: ["Pronunciation improvement", "Confidence building", "Fluency development"],
  },
  {
    title: "Visual Learning",
    description: "Video content and interactive multimedia",
    icon: Monitor,
    benefits: ["Visual association", "Context understanding", "Engaging content"],
  },
  {
    title: "Guided Instruction",
    description: "Teacher-led sessions with real-time feedback",
    icon: Users,
    benefits: ["Personalized guidance", "Immediate correction", "Structured learning"],
  },
]

export default function LanguageLabPage() {
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

          {/* Floating Language Icons */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 animate-float">
              <Languages className="h-8 w-8 text-white" />
            </div>
            <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
              <Globe className="h-6 w-6 text-cyan-300" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float delay-500">
              <Headphones className="h-7 w-7 text-blue-300" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 shadow-2xl">
                <Languages className="h-4 w-4 mr-2" />
                Advanced Language Learning Technology
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                Language
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Laboratory</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Master multiple languages with our{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Sophisticated Language Lab
              </span>{" "}
              featuring cutting-edge audio-visual technology
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Workstations" },
                { number: "10+", label: "Languages" },
                { number: "1000+", label: "Audio Materials" },
                { number: "HD", label: "Quality Audio" },
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
                  alt="Modern Language Laboratory"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">Smart</div>
                    <div className="text-sm text-gray-600">Technology</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                    <Brain className="h-5 w-5 text-[#002366] mr-2" />
                    <span className="text-sm font-medium text-[#002366]">Advanced Learning Technology</span>
                  </div>

                  <h2 className="text-4xl font-bold text-[#002366] mb-6">Sophisticated Language Learning</h2>
                  <div className="prose prose-lg text-gray-700 space-y-4">
                    <p className="leading-relaxed">
                      Our college is equipped with a{" "}
                      <strong className="text-[#002366]">well-sophisticated Language Lab</strong> which makes students
                      excellent in handling different languages essential for global healthcare careers.
                    </p>
                    <p className="leading-relaxed">
                      Students can access <strong className="text-[#002366]">audio and audio-visual materials</strong>{" "}
                      through individual workstations, allowing for personalized learning experiences tailored to their
                      pace and proficiency level.
                    </p>
                    <p className="leading-relaxed">
                      With <strong className="text-[#002366]">teacher-controlled audio delivery</strong> through
                      individual headsets, instructors can monitor progress, provide guidance, and ensure effective
                      language acquisition for every student.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Settings className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Teacher Control</h4>
                    <p className="text-sm text-gray-600">
                      Instructors can manage and monitor student audio individually
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#002366]/10">
                    <Wifi className="h-8 w-8 text-[#002366] mb-3" />
                    <h4 className="font-semibold text-[#002366] mb-2">Digital Integration</h4>
                    <p className="text-sm text-gray-600">Modern technology for enhanced learning experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Advanced Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art technology for immersive language learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {labFeatures.map((feature, index) => (
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

      {/* Language Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Language Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive language courses designed for healthcare professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {languagePrograms.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{program.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#002366]">{program.language}</h3>
                        <Badge className="bg-[#002366] text-white mt-1">{program.level}</Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 font-medium">{program.focus}</p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#002366] mb-3">Key Skills Covered:</h4>
                      {program.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{skill}</span>
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

      {/* Learning Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Learning Methods</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative approaches to accelerate your language learning journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {learningMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#002366]">{method.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6">{method.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#002366] mb-3">Benefits:</h4>
                      {method.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
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
              <Languages className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Languages for Global Healthcare</h2>
            <p className="text-xl text-blue-100 mb-8">
              Enhance your communication skills and expand your career opportunities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
