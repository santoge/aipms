"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, GraduationCap, Star, Sparkles, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCallInfo = () => {
    window.open("tel:+919562934815", "_self")
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in">
      <Card className="relative max-w-md w-full mx-auto shadow-2xl border-0 overflow-hidden bg-white rounded-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 border border-gray-200"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <CardContent className="p-0">
          {/* Premium Header with Gradient */}
          <div className="relative bg-gradient-to-br from-[#002366] via-[#003d82] to-[#004ba3] text-white p-8 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>

              <h2 className="text-3xl font-bold mb-1 tracking-tight">Admissions Open 2026</h2>
              <p className="text-blue-100 mb-3 font-medium">Adhithyan Institute of Paramedical Science</p>

              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold gap-2">
                <Star className="h-3 w-3" />
                <span>UGC • NAAC Approved • Best in Kerala</span>
              </div>
            </div>
          </div>

          {/* Premium Content Section */}
          <div className="p-6 bg-white">
            {/* Main Message */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#002366] mb-2">Build Your Healthcare Career</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Join Kerala's top paramedical institute with <span className="font-bold text-[#004ba3]">100% placement guarantee</span> and industry-leading faculty.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 gap-2 mb-6">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#004ba3] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-700"><strong>Accredited Programs:</strong> B.VOC & LBS Diploma</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#004ba3] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-700"><strong>Expert Faculty:</strong> Industry professionals</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#004ba3] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-700"><strong>Modern Infrastructure:</strong> State-of-the-art labs</span>
              </div>
            </div>

            {/* Programs Highlight */}
            <div className="mb-6 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
              <p className="font-semibold text-[#002366] text-xs mb-2 text-center">Available Specializations</p>
              <div className="text-xs text-gray-700 text-center leading-relaxed">
                Medical Lab Technology • Dialysis Technology • Radiology Technology • Cardiac Care Technology • Operation Theatre Technology • Hospital Administration
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <Link href="/apply" onClick={handleClose} className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#002366] to-[#004ba3] hover:from-[#003d82] hover:to-[#0056b3] text-white rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
              </Link>

              <Button
                size="sm"
                onClick={handleCallInfo}
                className="flex-1 border-2 border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white rounded-lg font-bold text-sm transition-all bg-white"
              >
                Get Info
              </Button>
            </div>

            {/* Limited Seats Notice */}
            <p className="text-center text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
              ⚠️ Limited seats available. Register immediately!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
