"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Shield,
  BookOpen,
  Target,
  Calendar,
  MessageCircle,
  Eye,
  CheckCircle,
  Award,
  Clock,
  UserCheck,
  AlertTriangle,
  Camera,
  Bell,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const committees = [
  {
    title: "Academic Monitoring Committee",
    acronym: "AMC",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    description: "Strengthening academic structure and promoting excellence in affiliated institutions",
    objectives: [
      "Meet periodically to assess ongoing academic programs",
      "Objective assessment of examinations and syllabus coverage",
      "Constitute guidelines as per KUHS instructions",
      "Formulate steps to rectify defects and inadequacies",
      "Facilitate feedback and discussions for improvement",
    ],
    activities: [
      "Academic calendar preparation",
      "Teaching plan development",
      "Faculty improvement programs",
      "Student progress monitoring",
      "Quality assurance initiatives",
    ],
  },
  {
    title: "Parents Teachers Association",
    acronym: "PTA",
    icon: Users,
    color: "from-green-500 to-emerald-500",
    description: "Partnership between parents and educators to enhance student learning and enrich lives",
    objectives: [
      "Enhance student learning experiences",
      "Bridge communication between parents and teachers",
      "Provide forum for parent feedback and opinions",
      "Understand students from parent's perspective",
      "Work towards making college the best place for education",
    ],
    activities: [
      "General body meetings twice yearly",
      "Class PTA meetings after internal exams",
      "Parent-Teacher-Student meetings",
      "Discussion of college functioning",
      "Individual student progress reviews",
    ],
  },
  {
    title: "Anti Ragging Committee",
    acronym: "ARC",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    description: "Vigilant committee ensuring safe and harassment-free campus environment",
    objectives: [
      "Prevent all forms of ragging and harassment",
      "Create awareness about anti-ragging policies",
      "Provide safe reporting mechanisms",
      "Ensure swift action against violations",
      "Maintain peaceful campus environment",
    ],
    activities: [
      "Orientation programs for new students",
      "Regular awareness campaigns",
      "CCTV surveillance monitoring",
      "Hostel supervision programs",
      "Anonymous reporting systems",
    ],
  },
]

const antiRaggingMeasures = [
  {
    icon: Bell,
    title: "Orientation Programs",
    description: "First-year students are instructed about anti-ragging measures during orientation",
  },
  {
    icon: MessageCircle,
    title: "Class Committee Meetings",
    description: "Students can voice opinions about ragging in bi-semester meetings",
  },
  {
    icon: Eye,
    title: "Hostel Supervision",
    description: "Wardens conduct periodic supervision to check ragging at hostel premises",
  },
  {
    icon: AlertTriangle,
    title: "Warning Displays",
    description: "Boards displayed prominently warning students against ragging",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description: "Entire campus under surveillance with student movement monitoring",
  },
]

const ptaBenefits = [
  "Teachers understand students from parent's perspective",
  "Parents gain insight into college functioning",
  "Collaborative problem-solving approach",
  "Enhanced communication channels",
  "Improved student support systems",
  "Quality education assurance",
]

export default function CommitteePage() {
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
                <Users className="h-4 w-4 mr-2" />
                Academic Governance & Student Welfare
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Academic
              </span>
              <br />
              <span className="text-white">Committees</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Dedicated committees ensuring{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Academic Excellence & Student Welfare
              </span>{" "}
              through collaborative governance
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "3", label: "Active Committees" },
                { number: "100%", label: "Student Coverage" },
                { number: "24/7", label: "Support Available" },
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

      {/* Committees Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Our Committees</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Structured governance ensuring quality education and student welfare
              </p>
            </div>

            <div className="space-y-12">
              {committees.map((committee, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Committee Header */}
                      <div className={`bg-gradient-to-br ${committee.color} p-8 text-white`}>
                        <div className="flex items-center mb-6">
                          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                            <committee.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{committee.title}</h3>
                            <Badge className="bg-white/20 text-white mt-2">{committee.acronym}</Badge>
                          </div>
                        </div>
                        <p className="text-white/90 leading-relaxed">{committee.description}</p>
                      </div>

                      {/* Objectives */}
                      <div className="p-8">
                        <h4 className="text-xl font-bold text-[#002366] mb-6 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Primary Objectives
                        </h4>
                        <div className="space-y-3">
                          {committee.objectives.map((objective, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{objective}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="p-8 bg-gray-50">
                        <h4 className="text-xl font-bold text-[#002366] mb-6 flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          Key Activities
                        </h4>
                        <div className="space-y-3">
                          {committee.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{activity}</span>
                            </div>
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

      {/* PTA Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">PTA Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innumerable benefits associated with our Parent Teacher Association
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ptaBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-green-50/30"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">PTA Meeting Schedule</h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white/10 rounded-2xl p-6">
                  <Clock className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">General Body Meetings</h4>
                  <p className="text-green-100 text-sm">Twice yearly - Beginning and end of academic year</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <Calendar className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Class PTA Meetings</h4>
                  <p className="text-green-100 text-sm">Twice yearly - Following internal examinations</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Parent-Teacher-Student</h4>
                  <p className="text-green-100 text-sm">Special meetings for comprehensive discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Ragging Measures */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Anti-Ragging Measures</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive steps taken to ensure a safe and harassment-free campus environment
              </p>
            </div>

            <div className="mb-12 bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3" />
                Definition of Ragging
              </h3>
              <p className="text-red-700 leading-relaxed">
                Ragging means any conduct whether by words spoken or written or by an act which has the effect of
                teasing, treating, handling with rudeness any other student, indulging in rowdy or undisciplined
                activities which causes or is likely to cause annoyance, hardship or psychological harm or to raise fear
                or apprehension thereof in a fresher or a junior student or asking the students to do any act or perform
                something which such student will not in the ordinary course and which has the effect of causing or
                generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a
                fresher or a junior student.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {antiRaggingMeasures.map((measure, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <measure.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#002366] mb-3">{measure.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{measure.description}</p>
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
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Academic Community</h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of our collaborative approach to academic excellence and student welfare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Committee
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Meeting Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
