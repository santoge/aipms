"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, GraduationCap, Star } from "lucide-react"
import Link from "next/link"

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="relative max-w-md w-full mx-auto shadow-2xl border-0 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 w-6 h-6 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="h-3 w-3 text-gray-600" />
        </button>

        <CardContent className="p-0">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#002366] to-[#003d82] text-white p-4 text-center relative">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-2">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>

            <h2 className="text-xl font-bold mb-1">Admissions Open 2025</h2>
            <p className="text-sm text-blue-100 mb-2">Adhithyan Institute</p>

            <div className="inline-flex items-center px-2 py-1 bg-white/20 rounded-full text-xs">
              <Star className="h-3 w-3 mr-1" />
              UGC • NAAC Approved
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 bg-white">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-[#002366] mb-2">Secure Your Healthcare Future</h3>
              <p className="text-gray-600 text-sm mb-3">
                Kerala's premier institute with <strong>100% placement support</strong>. Limited seats for 2025!
              </p>
            </div>

            {/* Programs */}
            <div className="mb-4">
              <h4 className="font-semibold text-[#002366] mb-2 text-sm text-center">Available Programs:</h4>
              <div className="text-xs text-center space-y-1">
                <div className="text-[#002366] font-medium">B.VOC Programs & LBS Diploma Courses</div>
                <div className="text-gray-600">Medical Lab • Dialysis • Radiology • Cardiac Care</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2">
              <Link href="/apply" onClick={handleClose} className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white rounded-full font-semibold text-xs"
                >
                  Apply Now
                </Button>
              </Link>

              <Button
                size="sm"
                variant="outline"
                onClick={handleCallInfo}
                className="flex-1 border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white rounded-full font-semibold text-xs bg-transparent"
              >
                Call Info
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
