"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Search,
  Star,
  ChevronRight,
  Calendar,
  CheckCircle,
  TrendingUp,
  Globe,
  Briefcase,
  Heart,
  Microscope,
  Stethoscope,
  Activity,
  Eye,
  Zap,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const courses = [
  {
    id: "mlt",
    name: "B.VOC Medical Lab Technology (MLT)",
    shortName: "MLT",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/medical-lab.jpg",
    category: "bachelor",
    rating: 4.8,
    students: 150,
    placement: 95,
    description:
      "Comprehensive training in medical laboratory procedures, diagnostics, and modern analytical techniques.",
    highlights: [
      "Advanced Laboratory Equipment Training",
      "Clinical Biochemistry & Microbiology",
      "Pathology & Hematology Specialization",
      "Industry-Standard Certification",
    ],
    careerOptions: [
      "Medical Laboratory Technologist",
      "Clinical Research Associate",
      "Quality Control Analyst",
      "Laboratory Manager",
    ],
    syllabus: [
      "Human Anatomy & Physiology",
      "Clinical Biochemistry",
      "Medical Microbiology",
      "Pathology & Histopathology",
      "Hematology & Blood Banking",
      "Immunology & Serology",
    ],
    icon: Microscope,
  },
  {
    id: "dialysis",
    name: "B.VOC Dialysis Technology",
    shortName: "Dialysis Tech",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/dialysis.avif",
    category: "bachelor",
    rating: 4.7,
    students: 120,
    placement: 92,
    description: "Specialized training in dialysis procedures, patient care, and advanced renal replacement therapies.",
    highlights: [
      "Hemodialysis & Peritoneal Dialysis",
      "Patient Care & Safety Protocols",
      "Advanced Dialysis Equipment",
      "Clinical Internship Program",
    ],
    careerOptions: ["Dialysis Technician", "Renal Care Specialist", "Clinical Coordinator", "Dialysis Unit Supervisor"],
    syllabus: [
      "Renal Anatomy & Physiology",
      "Dialysis Principles & Procedures",
      "Water Treatment Systems",
      "Infection Control & Safety",
      "Patient Assessment & Care",
      "Equipment Maintenance",
    ],
    icon: Activity,
  },
  {
    id: "radiology",
    name: "B.VOC Radiology & Medical Imaging Technology",
    shortName: "Radiology",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/radiology.avif",
    category: "bachelor",
    rating: 4.9,
    students: 100,
    placement: 98,
    description: "Advanced imaging techniques, radiological procedures, and modern diagnostic equipment operation.",
    highlights: [
      "X-Ray, CT, MRI & Ultrasound Training",
      "Digital Imaging Technology",
      "Radiation Safety & Protection",
      "Clinical Imaging Protocols",
    ],
    careerOptions: ["Radiologic Technologist", "MRI Technician", "CT Scan Operator", "Imaging Department Supervisor"],
    syllabus: [
      "Radiographic Physics",
      "Imaging Techniques & Procedures",
      "Cross-sectional Anatomy",
      "Radiation Protection",
      "Digital Imaging Systems",
      "Quality Assurance",
    ],
    icon: Eye,
  },
  {
    id: "cardiac-care",
    name: "B.VOC Cardiac Care Technology",
    shortName: "Cardiac Care",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/cardiac-care.avif",
    category: "bachelor",
    rating: 4.8,
    students: 90,
    placement: 96,
    description: "Specialized training in cardiovascular diagnostics, monitoring, and cardiac care procedures.",
    highlights: [
      "ECG & Echocardiography Training",
      "Cardiac Catheterization Lab",
      "Patient Monitoring Systems",
      "Emergency Cardiac Care",
    ],
    careerOptions: ["Cardiac Technologist", "ECG Technician", "Cath Lab Technician", "Cardiac Monitor Technician"],
    syllabus: [
      "Cardiovascular Anatomy",
      "Cardiac Diagnostic Procedures",
      "ECG Interpretation",
      "Echocardiography",
      "Cardiac Catheterization",
      "Emergency Cardiac Care",
    ],
    icon: Heart,
  },
  {
    id: "operation-theatre",
    name: "B.VOC Operation Theatre Technology",
    shortName: "OT Technology",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/operation-theatre.avif",
    category: "bachelor",
    rating: 4.7,
    students: 110,
    placement: 94,
    description: "Comprehensive training in surgical procedures, OT management, and sterile technique protocols.",
    highlights: [
      "Surgical Instrumentation",
      "Sterile Technique & Infection Control",
      "Anesthesia Equipment Handling",
      "Emergency Surgical Procedures",
    ],
    careerOptions: [
      "Operation Theatre Technician",
      "Surgical Technologist",
      "OT Coordinator",
      "Sterile Processing Technician",
    ],
    syllabus: [
      "Surgical Anatomy",
      "Operating Room Procedures",
      "Surgical Instrumentation",
      "Anesthesia Technology",
      "Infection Control",
      "Emergency Procedures",
    ],
    icon: Stethoscope,
  },
  {
    id: "hospital-admin-bvoc",
    name: "B.VOC Hospital Administration",
    shortName: "Hospital Admin",
    duration: "3 Years",
    fee: "₹45,000",
    feeType: "per semester",
    eligibility: "12th Any Stream",
    image: "/courses/hospital-admin.avif",
    category: "bachelor",
    rating: 4.6,
    students: 80,
    placement: 90,
    description: "Comprehensive management training for healthcare administration and hospital operations.",
    highlights: [
      "Healthcare Management Systems",
      "Medical Records Management",
      "Insurance & Billing Procedures",
      "Quality Assurance & Compliance",
    ],
    careerOptions: [
      "Hospital Administrator",
      "Healthcare Manager",
      "Medical Records Officer",
      "Quality Assurance Coordinator",
    ],
    syllabus: [
      "Healthcare Management",
      "Medical Records Systems",
      "Healthcare Finance",
      "Quality Management",
      "Healthcare Laws & Ethics",
      "Information Systems",
    ],
    icon: Briefcase,
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain Management",
    shortName: "Logistics",
    duration: "1 Year",
    fee: "₹45,000",
    feeType: "total",
    eligibility: "12th Any Stream",
    image: "/courses/logistics.jpg",
    category: "diploma",
    rating: 4.5,
    students: 60,
    placement: 100,
    description: "Specialized training in logistics operations, supply chain management, and inventory control.",
    highlights: [
      "Supply Chain Optimization",
      "Inventory Management Systems",
      "Transportation & Distribution",
      "Warehouse Management",
    ],
    careerOptions: ["Logistics Coordinator", "Supply Chain Analyst", "Warehouse Manager", "Transportation Specialist"],
    syllabus: [
      "Supply Chain Fundamentals",
      "Inventory Management",
      "Transportation Systems",
      "Warehouse Operations",
      "Logistics Technology",
      "Quality Control",
    ],
    icon: TrendingUp,
  },
  {
    id: "hospitality",
    name: "Hospitality Management",
    shortName: "Hospitality",
    duration: "1 Year",
    fee: "₹40,000",
    feeType: "total",
    eligibility: "12th Any Stream",
    image: "/courses/hospitality.avif",
    category: "diploma",
    rating: 4.4,
    students: 70,
    placement: 88,
    description: "Comprehensive training in hospitality operations, customer service, and hotel management.",
    highlights: [
      "Hotel Operations Management",
      "Customer Service Excellence",
      "Food & Beverage Service",
      "Event Management",
    ],
    careerOptions: ["Hotel Manager", "Guest Relations Officer", "Event Coordinator", "Restaurant Manager"],
    syllabus: [
      "Hospitality Operations",
      "Customer Service",
      "Food & Beverage Management",
      "Housekeeping Operations",
      "Front Office Management",
      "Event Planning",
    ],
    icon: Users,
  },
  {
    id: "hospital-admin-cert",
    name: "Hospital Administration",
    shortName: "Hospital Admin",
    duration: "1 Year",
    fee: "₹35,000",
    feeType: "total",
    eligibility: "12th Any Stream",
    image: "/courses/hospital-admin.avif",
    category: "certificate",
    rating: 4.3,
    students: 50,
    placement: 85,
    description: "Essential training in healthcare administration, medical records, and hospital operations.",
    highlights: [
      "Medical Records Management",
      "Healthcare Administration",
      "Insurance Processing",
      "Patient Care Coordination",
    ],
    careerOptions: ["Medical Records Clerk", "Patient Coordinator", "Insurance Specialist", "Administrative Assistant"],
    syllabus: [
      "Healthcare Systems",
      "Medical Terminology",
      "Records Management",
      "Insurance Procedures",
      "Patient Relations",
      "Office Management",
    ],
    icon: BookOpen,
  },
]

const categories = [
  { id: "all", name: "All Courses", count: courses.length },
  { id: "bachelor", name: "Bachelor Programs", count: courses.filter((c) => c.category === "bachelor").length },
  { id: "diploma", name: "Diploma Programs", count: courses.filter((c) => c.category === "diploma").length },
  {
    id: "certificate",
    name: "Certificate Programs",
    count: courses.filter((c) => c.category === "certificate").length,
  },
]

const stats = [
  { number: "15+", label: "Courses Available", icon: BookOpen },
  { number: "500+", label: "Students Graduated", icon: GraduationCap },
  { number: "95%", label: "Average Placement", icon: Award },
  { number: "50+", label: "Partner Hospitals", icon: Users },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.shortName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#001a4d] via-[#002366] to-[#003d82] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#002366]/95 to-[#003d82]/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              UGC Approved Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Our Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Choose from our comprehensive range of paramedical and healthcare management programs
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 rounded-full focus:bg-white/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-cyan-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-100 p-1 rounded-2xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="rounded-xl data-[state=active]:bg-[#002366] data-[state=active]:text-white transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2">
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {category.count}
                      </Badge>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses
                      .filter((course) => category.id === "all" || course.category === category.id)
                      .map((course) => (
                        <Card
                          key={course.id}
                          className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={course.image || "/placeholder.svg"}
                              alt={course.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-[#002366] text-white shadow-lg capitalize">{course.category}</Badge>
                            </div>
                            <div className="absolute top-4 right-4">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                <course.icon className="h-6 w-6 text-[#002366]" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                  <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                                </div>
                                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {course.placement}% Placement
                                </div>
                              </div>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{course.name}</h3>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {course.duration}
                                </span>
                                <span className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {course.students} students
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{course.description}</p>

                            <div className="space-y-2 mb-6">
                              {course.highlights.slice(0, 2).map((highlight, idx) => (
                                <div key={idx} className="flex items-center text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  {highlight}
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between mb-6">
                              <div>
                                <div className="text-2xl font-bold text-[#002366]">{course.fee}</div>
                                <div className="text-sm text-gray-600">{course.feeType}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-600">Eligibility</div>
                                <div className="font-medium text-gray-900">{course.eligibility}</div>
                              </div>
                            </div>

                            <div className="flex space-x-3">
                              <Button className="flex-1 bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                Learn More
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                              <Link href="/apply">
                                <Button
                                  variant="outline"
                                  className="border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white transition-all duration-300 bg-transparent"
                                >
                                  Apply
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Course Benefits</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our programs are designed to provide comprehensive training and ensure successful career outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "UGC Approved",
                  description: "All programs are recognized by UGC and relevant medical councils",
                },
                {
                  icon: Target,
                  title: "100% Placement Support",
                  description: "Dedicated placement cell with strong industry connections",
                },
                {
                  icon: Zap,
                  title: "Modern Infrastructure",
                  description: "State-of-the-art labs and equipment for hands-on training",
                },
                {
                  icon: Globe,
                  title: "Industry Exposure",
                  description: "Regular workshops and seminars by healthcare professionals",
                },
              ].map((feature, index) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful healthcare professionals. Apply now and secure your future in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#002366] hover:bg-blue-50 text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  Apply Now
                  <ChevronRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-transparent"
              >
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
