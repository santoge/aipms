"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  GraduationCap,
  Users,
  Award,
  Building,
  Send,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Target,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const courses = [
  { id: "mlt", name: "B.VOC Medical Lab Technology", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "dialysis", name: "B.VOC Dialysis Technology", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "radiology", name: "B.VOC Radiology & Medical Imaging", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "cardiac", name: "B.VOC Cardiac Care Technology", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "ot", name: "B.VOC Operation Theatre Technology", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "hospital-admin-bvoc", name: "B.VOC Hospital Administration", duration: "3 Years", fee: "₹45,000/semester" },
  { id: "logistics", name: "Logistics & Supply Chain Management", duration: "1 Year", fee: "₹45,000 total" },
  { id: "hospitality", name: "Hospitality Management", duration: "1 Year", fee: "₹40,000 total" },
  { id: "hospital-admin", name: "Hospital Administration (Certificate)", duration: "1 Year", fee: "₹35,000 total" },
]

const features = [
  {
    icon: Award,
    title: "UGC Approved",
    description: "Recognized programs with industry standards",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professionals",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "100% Placement",
    description: "Guaranteed career support",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building,
    title: "Modern Campus",
    description: "State-of-the-art facilities",
    color: "from-purple-500 to-pink-500",
  },
]

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    city: "",
    message: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="max-w-2xl w-full shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Application Submitted Successfully!</h2>
              <p className="text-xl text-slate-600 mb-8">
                Thank you for your interest in Adhithyan Institute. Our admissions team will contact you within 24
                hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      course: "",
                      qualification: "",
                      city: "",
                      message: "",
                      agreeTerms: false,
                    })
                  }}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800"
                >
                  Submit Another Application
                </Button>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent">
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-blue-800/90"></div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-blue-100 border border-white/20 mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              Quick & Easy Application Process
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                Start Your
              </span>
              <br />
              <span className="text-white">Healthcare Journey</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join Kerala's premier paramedical institute. One simple form, endless possibilities.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-200 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-600/10 text-slate-700 border-slate-300">Simple Application Form</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Apply in Minutes</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fill out this quick form and our admissions team will contact you with next steps
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-to-r from-slate-600 to-blue-600 p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">Student Application</h3>
                <p className="text-blue-100 text-center">Your journey to healthcare excellence starts here</p>
              </div>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                        className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  {/* Course and Academic Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Course of Interest *</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50">
                          <SelectValue placeholder="Select your preferred course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.name} - {course.duration}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Highest Qualification *</Label>
                      <Select
                        value={formData.qualification}
                        onValueChange={(value) => handleInputChange("qualification", value)}
                      >
                        <SelectTrigger className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50">
                          <SelectValue placeholder="Select your qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12th-any-stream">12th Any Stream</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="post-graduation">Post Graduation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-slate-700 font-medium">
                      City *
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                      className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                      placeholder="Enter your city"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Why do you want to join this course? (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-slate-200 focus:border-slate-400 focus:ring-slate-400 bg-white/50"
                      rows={4}
                      placeholder="Tell us about your motivation and career goals..."
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                        required
                        className="border-slate-300 data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600"
                      />
                      <Label htmlFor="agreeTerms" className="text-sm text-slate-700 leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-slate-600 hover:text-slate-800 underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-slate-600 hover:text-slate-800 underline">
                          Privacy Policy
                        </a>
                        . I consent to being contacted by Adhithyan Institute regarding my application and course
                        information.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !formData.agreeTerms}
                      className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-slate-500 mt-4">Our admissions team will contact you within 24 hours</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-600/10 text-slate-700 border-slate-300">
                Why Choose Adhithyan Institute
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Your Success is Our Priority</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join thousands of successful healthcare professionals who started their journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "UGC Approved Programs",
                  description: "All courses are recognized and approved by UGC and relevant medical councils",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from experienced healthcare professionals and industry experts",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Target,
                  title: "100% Placement Support",
                  description: "Dedicated placement cell with strong connections to leading hospitals",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Building,
                  title: "Modern Infrastructure",
                  description: "State-of-the-art laboratories and equipment for hands-on training",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-600/10 text-slate-700 border-slate-300">Need Help?</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Contact Our Admissions Team</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our friendly admissions counselors are here to help you with any questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600 mb-4">Call us for immediate assistance</p>
                  <a
                    href="tel:+919562934815"
                    className="block text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    +91 9562934815
                  </a>
                  <p className="text-sm text-slate-500 mt-2">Click to call</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600 mb-4">Send us your queries</p>
                  <p className="text-lg font-semibold text-slate-700">admissions@adhithyan.edu</p>
                  <p className="text-lg font-semibold text-slate-700">info@adhithyan.edu</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Office Hours</h3>
                  <p className="text-slate-600 mb-4">Visit us during these hours</p>
                  <p className="text-lg font-semibold text-slate-700">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  <p className="text-lg font-semibold text-slate-700">Sat: 9:00 AM - 2:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
