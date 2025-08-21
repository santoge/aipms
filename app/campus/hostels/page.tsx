"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Building,
  ArrowRight,
  CheckCircle,
  Download,
  BookOpen,
  Wifi,
  Utensils,
  Shield,
  Bath,
  Home,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ChatBot from "@/components/chatbot"

const hostelFeatures = [
  {
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance and secure entry systems",
    icon: Shield,
  },
  {
    title: "Wi-Fi Connectivity",
    description: "High-speed internet access throughout the hostel premises",
    icon: Wifi,
  },
  {
    title: "Nutritious Meals",
    description: "Hygienic and nutritious meals prepared by experienced cooks",
    icon: Utensils,
  },
  {
    title: "Study Areas",
    description: "Dedicated study rooms and common areas for group discussions",
    icon: BookOpen,
  },
  {
    title: "Laundry Service",
    description: "On-site laundry facilities with washing machines and drying areas",
    icon: Bath,
  },
  {
    title: "Recreation Room",
    description: "Common recreation area with TV, games, and entertainment facilities",
    icon: Users,
  },
]

const accommodationTypes = [
  {
    id: 1,
    title: "Boys Hostel",
    type: "Male Students",
    image: "/hostel/boys-room.avif",
    description:
      "Comfortable and secure accommodation for male students with modern amenities and a supportive environment.",
    features: [
      "2-3 students per room",
      "Attached bathroom",
      "Study table and chair",
      "Wardrobe and storage",
      "Common recreation area",
      "24/7 security",
    ],
    capacity: "120 Students",
    price: "₹5,500/month",
  },
  {
    id: 2,
    title: "Girls Hostel",
    type: "Female Students",
    image: "/hostel/girls-room.jpg",
    description:
      "Safe and comfortable accommodation for female students with all necessary facilities and a homely atmosphere.",
    features: [
      "2-3 students per room",
      "Attached bathroom",
      "Study table and chair",
      "Wardrobe and storage",
      "Common recreation area",
      "24/7 security with female warden",
    ],
    capacity: "100 Students",
    price: "₹5,500/month",
  },
]

const rules = [
  "Students must maintain discipline and follow hostel timings",
  "No smoking, drinking, or substance abuse allowed",
  "Visitors allowed only during specified hours with prior permission",
  "Students must keep their rooms clean and tidy",
  "Damage to hostel property will be charged separately",
  "Mobile phones should be used responsibly, especially during study hours",
  "Students must inform the warden before leaving the hostel premises",
  "Ragging is strictly prohibited and will result in immediate expulsion",
]

const stats = [
  { number: "220", label: "Total Capacity", icon: Building },
  { number: "24/7", label: "Security", icon: Shield },
  { number: "100%", label: "Wi-Fi Coverage", icon: Wifi },
  { number: "3", label: "Meals Per Day", icon: Utensils },
]

export default function HostelsPage() {
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
                Campus Accommodation
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Hostel Facilities
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comfortable, secure, and well-equipped accommodation facilities for students pursuing their healthcare
              education dreams.
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

      {/* Accommodation Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Accommodation</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Hostel Accommodation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide separate, secure, and comfortable accommodation facilities for both male and female students
                with all modern amenities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {accommodationTypes.map((accommodation) => (
                <Card
                  key={accommodation.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-white hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={accommodation.image || "/placeholder.svg"}
                      alt={accommodation.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#002366] text-white shadow-lg">{accommodation.type}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <Home className="h-6 w-6 text-[#002366]" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[#002366]">{accommodation.title}</h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-[#002366]">{accommodation.price}</div>
                        <div className="text-sm text-gray-600">{accommodation.capacity}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{accommodation.description}</p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-[#002366] mb-3">Room Features:</h4>
                      {accommodation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      Apply for Accommodation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Facilities</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Hostel Amenities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our hostels are equipped with modern amenities and facilities to ensure a comfortable and conducive
                living environment for students.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostelFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-8">
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

      {/* Rules & Regulations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Guidelines</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Hostel Rules & Regulations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To maintain a peaceful and conducive environment for all students, we have established the following
                guidelines that all hostel residents must follow.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {rules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-[#002366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#002366]/10 to-[#003d82]/10 rounded-3xl blur-xl"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                      src="/hostel/hostel-common-area.jpg"
                      alt="Hostel Common Area"
                      width={600}
                      height={500}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/20 to-transparent"></div>

                    {/* Overlay Card */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <h3 className="text-lg font-bold text-[#002366] mb-1">Safe & Secure Environment</h3>
                        <p className="text-sm text-gray-600">24/7 security and CCTV surveillance for student safety</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-[#002366]/10 text-[#002366] border-[#002366]/20">Get in Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#002366] mb-6">Hostel Admission Enquiry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For hostel admission, room booking, or any queries related to accommodation, please contact our hostel
                administration.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                  <p className="text-gray-600 mb-2">Hostel Office</p>
                  <p className="text-[#002366] font-semibold">+91 9562934815</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                  <p className="text-gray-600 mb-2">Hostel Enquiries</p>
                  <p className="text-[#002366] font-semibold">hello@adhithyangroupofinstitutions</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#002366] to-[#003d82] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                  <p className="text-gray-600 mb-2">Hostel Address</p>
                  <p className="text-[#002366] font-semibold">Adhithyan Institute Campus</p>
                  <p className="text-[#002366] font-semibold">Thiruvananthapuram, Kerala</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002366] to-[#003d82] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Accommodation?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Book your hostel accommodation today and ensure a comfortable stay during your studies at Adhithyan
              Institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#002366] hover:bg-blue-50 text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <Home className="mr-3 h-6 w-6" />
                  Apply for Hostel
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#002366] text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-transparent"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Hostel Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  )
}
