"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Upload,
  CreditCard,
  CheckCircle,
  AlertTriangle,
  Download,
  ExternalLink,
  User,
  Shield,
  Award,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const applicationSteps = [
  {
    step: 1,
    title: "Choose Your Course",
    description: "Select from B.VOC University Courses or LBS Diploma/Certificate Courses",
    icon: Award,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    title: "Single Application",
    description: "Submit only one application - multiple applications lead to rejection",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: 3,
    title: "Pay Application Fee",
    description: "Pay Rs. 500/- through our secure online portal",
    icon: CreditCard,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: 4,
    title: "Upload Documents",
    description: "Upload required documents in specified formats",
    icon: Upload,
    color: "from-orange-500 to-red-500",
  },
  {
    step: 5,
    title: "Submit Application",
    description: "Review and submit your complete application",
    icon: CheckCircle,
    color: "from-indigo-500 to-blue-500",
  },
]

const uploadRequirements = [
  {
    document: "Passport Size Photo",
    format: "JPG format",
    specifications: "Recent photograph with clear visibility",
    icon: User,
  },
  {
    document: "Signature",
    format: "JPG format",
    specifications: "Scanned with white background",
    icon: FileText,
  },
  {
    document: "Plus Two Certificate",
    format: "PDF format",
    specifications: "Clear copy of original certificate",
    icon: Award,
  },
  {
    document: "Aadhar Card",
    format: "PDF format",
    specifications: "Both sides clearly visible",
    icon: Shield,
  },
]

const submissionDocuments = [
  {
    document: "SSLC or Equivalent Certificate",
    purpose: "To prove date of birth",
    copies: "Original + 2 copies",
    mandatory: true,
  },
  {
    document: "Plus Two Mark List(s)",
    purpose: "Qualifying examination (HSC/equivalent)",
    copies: "Original + 2 copies",
    mandatory: true,
  },
  {
    document: "Conduct Certificate",
    purpose: "Character verification",
    copies: "Original + 2 copies",
    mandatory: true,
  },
  {
    document: "Transfer Certificate",
    purpose: "Previous institution clearance",
    copies: "Original + 2 copies",
    mandatory: true,
  },
  {
    document: "Aadhar Card",
    purpose: "Identity verification",
    copies: "Original + 2 copies",
    mandatory: true,
  },
  {
    document: "Physical Fitness Certificate",
    purpose: "Medical fitness for course suitability",
    copies: "Prescribed format from office",
    mandatory: true,
  },
]

const importantNotes = [
  "Application for admission to professional Diploma Courses can be applied only through a single application",
  "More than one application by a candidate will lead to rejection of the candidature",
  "Application fee is non-refundable under any circumstances",
  "All documents must be submitted in original along with 2 copies",
  "Failure to submit required documents will lead to rejection of application",
  "Physical fitness certificate must be in prescribed format collected from office",
]

export default function ApplyPage() {
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
                <FileText className="h-4 w-4 mr-2" />
                Admission Application Process
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                How to
              </span>
              <br />
              <span className="text-white">Apply</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Simple and{" "}
              <span className="text-cyan-300 font-semibold bg-cyan-300/10 px-2 py-1 rounded-lg border border-cyan-300/20">
                Streamlined Process
              </span>{" "}
              for B.VOC University Courses & LBS Diploma Programs
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { label: "Application Fee", value: "₹500" },
                { label: "Single Application", value: "Only" },
                { label: "Online Portal", value: "Available" },
              ].map((info, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">{info.value}</div>
                    <div className="text-blue-200 text-sm font-medium">{info.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Application Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow these simple steps to complete your application successfully
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#002366] to-[#003d82] transform -translate-y-1/2 z-0"></div>

              <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                {applicationSteps.map((step, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-4"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <div
                          className={`bg-gradient-to-r ${step.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-[#002366] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#002366] mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Fee & Portal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#002366]/10 rounded-full mb-6">
                  <CreditCard className="h-5 w-5 text-[#002366] mr-2" />
                  <span className="text-sm font-medium text-[#002366]">Application Fee & Portal</span>
                </div>

                <h2 className="text-4xl font-bold text-[#002366] mb-6">Secure Online Application</h2>

                <div className="space-y-6">
                  <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                    <div className="flex items-center mb-4">
                      <CreditCard className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-green-800">Application Fee</h3>
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">₹500/-</div>
                    <p className="text-green-700 text-sm">One-time non-refundable application fee</p>
                  </Card>

                  <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <div className="flex items-center mb-4">
                      <Globe className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-blue-800">Online Portal</h3>
                    </div>
                    <p className="text-blue-700 mb-4">Apply through our secure online portal:</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Portal: adhithyanparamedicals.org
                    </Button>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-3xl opacity-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=700"
                  alt="Online Application Portal"
                  width={700}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#002366] mb-1">Secure</div>
                    <div className="text-sm text-gray-600">& Fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Requirements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Upload Requirements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Documents to be uploaded during online application
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {uploadRequirements.map((req, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <req.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#002366] mb-2">{req.document}</h3>
                    <Badge className="bg-green-100 text-green-800 mb-3">{req.format}</Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">{req.specifications}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submission Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#002366] to-[#003d82] rounded-full mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Documents for Admission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Original and 2 copies of following certificates must be submitted with application form
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {submissionDocuments.map((doc, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#002366] flex-1">{doc.document}</h3>
                      {doc.mandatory && <Badge className="bg-red-100 text-red-800 text-xs ml-2">Required</Badge>}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{doc.purpose}</p>
                    <div className="flex items-center text-sm text-blue-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {doc.copies}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Important Guidelines</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these important notes carefully before applying
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200">
              <div className="space-y-4">
                {importantNotes.map((note, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your application today and take the first step towards a successful healthcare career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#002366] hover:bg-blue-50">
                <ExternalLink className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
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
