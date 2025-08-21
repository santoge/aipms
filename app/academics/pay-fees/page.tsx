"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Shield,
  Clock,
  Receipt,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Mail,
  AlertCircle,
  Star,
  Zap,
  Lock,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const feeStructure = [
  {
    course: "Medical Lab Technology",
    duration: "3 Years",
    totalFee: "₹2,50,000",
    yearlyFee: "₹83,333",
    semesterFee: "₹41,667",
  },
  {
    course: "Dialysis Technology",
    duration: "2 Years",
    totalFee: "₹1,80,000",
    yearlyFee: "₹90,000",
    semesterFee: "₹45,000",
  },
  {
    course: "Radiology & Imaging",
    duration: "2 Years",
    totalFee: "₹2,00,000",
    yearlyFee: "₹1,00,000",
    semesterFee: "₹50,000",
  },
  {
    course: "Cardiac Care Technology",
    duration: "2 Years",
    totalFee: "₹1,90,000",
    yearlyFee: "₹95,000",
    semesterFee: "₹47,500",
  },
  {
    course: "Operation Theatre Technology",
    duration: "2 Years",
    totalFee: "₹1,75,000",
    yearlyFee: "₹87,500",
    semesterFee: "₹43,750",
  },
  {
    course: "Hospital Administration",
    duration: "1 Year",
    totalFee: "₹75,000",
    yearlyFee: "₹75,000",
    semesterFee: "₹37,500",
  },
]

const paymentMethods = [
  {
    id: "upi",
    name: "UPI Payment",
    icon: Smartphone,
    description: "Pay instantly using UPI apps like GPay, PhonePe, Paytm",
    processingTime: "Instant",
    popular: true,
  },
  {
    id: "netbanking",
    name: "Net Banking",
    icon: Building2,
    description: "Secure payment through your bank's online portal",
    processingTime: "2-5 minutes",
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Pay using Visa, Mastercard, RuPay cards",
    processingTime: "Instant",
  },
  {
    id: "wallet",
    name: "Digital Wallet",
    icon: Wallet,
    description: "Use Paytm, Amazon Pay, or other digital wallets",
    processingTime: "Instant",
  },
]

const features = [
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Payments processed immediately with instant confirmation",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description: "Bank-grade security with SSL encryption",
  },
  {
    icon: Receipt,
    title: "Digital Receipt",
    description: "Instant digital receipt and fee confirmation",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Pay anytime, anywhere with our online portal",
  },
]

export default function PayFeesPage() {
  const [selectedCourse, setSelectedCourse] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("")
  const [paymentType, setPaymentType] = useState("")
  const [amount, setAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowSuccess(true)
    }, 3000)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8">
              Your fee payment has been processed successfully. You will receive a confirmation email shortly.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-mono text-sm">TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-bold text-green-600">{amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Method:</span>
                <span className="capitalize">{selectedMethod}</span>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-[#002366] hover:bg-[#003d82]">
                <Download className="mr-2 h-4 w-4" />
                Download Receipt
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowSuccess(false)}>
                Make Another Payment
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#002366] via-[#003d82] to-[#0056b3] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              💳 Secure Online Payment Portal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pay Your Fees
              <span className="block text-blue-200">Online Securely</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Quick, secure, and convenient fee payment system. Pay your course fees online with multiple payment
              options and get instant confirmation.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <feature.icon className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Fee Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and affordable fee structure for all our UGC approved courses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feeStructure.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#002366]">{course.course}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {course.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Fee:</span>
                      <span className="font-bold text-[#002366]">{course.totalFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Yearly Fee:</span>
                      <span className="font-semibold">{course.yearlyFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Semester Fee:</span>
                      <span className="font-semibold">{course.semesterFee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Make Payment</h2>
              <p className="text-xl text-gray-600">Fill in your details and choose your preferred payment method.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Student Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input id="studentId" placeholder="Enter your student ID" />
                      </div>
                      <div>
                        <Label htmlFor="studentName">Full Name</Label>
                        <Input id="studentName" placeholder="Enter your full name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    {/* Course and Payment Details */}
                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="course">Select Course</Label>
                        <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your course" />
                          </SelectTrigger>
                          <SelectContent>
                            {feeStructure.map((course, index) => (
                              <SelectItem key={index} value={course.course}>
                                {course.course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="paymentType">Payment Type</Label>
                        <Select value={paymentType} onValueChange={setPaymentType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="semester">Semester Fee</SelectItem>
                            <SelectItem value="yearly">Yearly Fee</SelectItem>
                            <SelectItem value="total">Total Fee</SelectItem>
                            <SelectItem value="custom">Custom Amount</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    {/* Payment Method Selection */}
                    <Separator />

                    <div>
                      <Label className="text-base font-semibold mb-4 block">Choose Payment Method</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedMethod === method.id
                                ? "border-[#002366] bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedMethod(method.id)}
                          >
                            {method.popular && (
                              <Badge className="absolute -top-2 -right-2 bg-orange-500">Popular</Badge>
                            )}
                            <div className="flex items-start space-x-3">
                              <method.icon className="h-6 w-6 text-[#002366] mt-1" />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">{method.name}</h4>
                                <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                                <div className="flex items-center text-xs text-gray-500">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {method.processingTime}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-gray-700">
                          <p className="font-semibold mb-1">Important Notes:</p>
                          <ul className="space-y-1 text-xs">
                            <li>Payment confirmation will be sent to your registered email</li>
                            <li>Keep your transaction ID for future reference</li>
                            <li>Refunds will be processed as per institute policy</li>
                            <li>For payment issues, contact our support team</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Payment Button */}
                    <Button
                      className="w-full bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white py-3 text-lg font-semibold"
                      onClick={handlePayment}
                      disabled={!selectedCourse || !selectedMethod || !amount || isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <Shield className="mr-2 h-5 w-5" />
                          Pay Securely
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Summary */}
              <div className="lg:col-span-1">
                <Card className="shadow-lg sticky top-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Receipt className="mr-2 h-5 w-5" />
                      Payment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Course:</span>
                        <span className="font-medium">{selectedCourse || "Not selected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Type:</span>
                        <span className="font-medium capitalize">{paymentType || "Not selected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-bold text-[#002366]">{amount || "₹0"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span className="font-medium">₹0</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-[#002366]">{amount || "₹0"}</span>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">Secure Payment Guaranteed</span>
                      </div>
                    </div>

                    {/* Security Features */}
                    <div className="space-y-2 pt-4">
                      <h4 className="font-semibold text-gray-900">Security Features:</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-green-500" />
                          SSL Encrypted
                        </div>
                        <div className="flex items-center">
                          <Lock className="h-4 w-4 mr-2 text-green-500" />
                          Bank Grade Security
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-green-500" />
                          PCI DSS Compliant
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support Card */}
                <Card className="shadow-lg mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#002366]" />
                      <div>
                        <p className="font-medium">Call Support</p>
                        <p className="text-sm text-gray-600">+91 471 XXX XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#002366]" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-gray-600">fees@adhithyaninstitute.edu</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
