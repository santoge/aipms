"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Home, User, GraduationCap, Camera, BookOpen, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const aboutUsLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Management", href: "/management" },
]

const academicsLinks = [
  { name: "Faculty", href: "/academics/faculty" },
  { name: "Industry Experts", href: "/academics/guest-faculty" },
  { name: "Committee", href: "/academics/committee" },
  { name: "How to Apply", href: "/academics/apply" },
  { name: "Pay Fees Online", href: "/academics/pay-fees" },
]

const campusServicesLinks = [
  { name: "Hostels", href: "/campus/hostels" },
  { name: "Library", href: "/campus/library" },
  { name: "Language Lab", href: "/campus/language-lab" },
  { name: "Pastoral Care", href: "/campus/pastoral-care" },
  { name: "Counselling", href: "/campus/counselling" },
  { name: "Store", href: "/campus/store" },
]

const mobileMenuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "#", icon: User, submenu: aboutUsLinks },
  { name: "Courses", href: "/courses", icon: GraduationCap },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Academics", href: "#", icon: GraduationCap, submenu: academicsLinks },
  { name: "Campus Services", href: "#", icon: Building, submenu: campusServicesLinks },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // Small delay to allow moving to dropdown
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-2xl border-b border-gray-200/50 shadow-xl">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/40 to-cyan-50/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo only - no text */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo-new.png"
                alt="Adhithyan Institute of Paramedical Science"
                width={200}
                height={60}
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002366] rounded-xl transition-all duration-300 group whitespace-nowrap"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#002366] to-[#003d82] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* About Us Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002366] rounded-xl transition-all duration-300 group">
                <span className="relative z-10">About Us</span>
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 animate-in fade-in-0 zoom-in-95 duration-300"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-gray-200/50"></div>
                  {aboutUsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-3 text-sm text-gray-700 hover:text-[#002366] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 rounded-lg mx-2"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("academics")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002366] rounded-xl transition-all duration-300 group">
                <span className="relative z-10">Academics</span>
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {activeDropdown === "academics" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 animate-in fade-in-0 zoom-in-95 duration-300"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-gray-200/50"></div>
                  {academicsLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-3 text-sm text-gray-700 hover:text-[#002366] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 rounded-lg mx-2"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Campus Services Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("campus")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002366] rounded-xl transition-all duration-300 group whitespace-nowrap">
                <span className="relative z-10">Campus Services</span>
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {activeDropdown === "campus" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/50 py-3 animate-in fade-in-0 zoom-in-95 duration-300"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-l border-t border-gray-200/50"></div>
                  {campusServicesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-6 py-3 text-sm text-gray-700 hover:text-[#002366] hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 rounded-lg mx-2"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {["Gallery", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002366] rounded-xl transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#002366] to-[#003d82] group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/apply">
              <Button className="relative bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group overflow-hidden">
                <span className="relative z-10 font-semibold">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative hover:bg-blue-50/50 rounded-xl">
                <Menu className="h-6 w-6 text-[#002366]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Full Screen Mobile Mega Menu */}
            <SheetContent
              side="right"
              className="w-full h-full bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 backdrop-blur-2xl p-0 border-0 overflow-y-auto"
            >
              <div className="min-h-full flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo-new.png"
                      alt="Adhithyan Institute"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>

                {/* Mobile Menu Grid */}
                <div className="flex-1 p-6 pb-32">
                  <div className="grid grid-cols-2 gap-4 min-h-full">
                    {mobileMenuItems.map((item, index) => (
                      <div key={item.name} className="relative min-h-[140px]">
                        {item.submenu ? (
                          <div className="h-full">
                            <button
                              onClick={() => setExpandedMobile(expandedMobile === item.name ? null : item.name)}
                              className="w-full h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-4 flex flex-col items-center justify-center text-center hover:bg-gradient-to-br hover:from-[#002366] hover:to-[#003d82] hover:text-white transition-all duration-500 transform hover:scale-105 group min-h-[140px]"
                            >
                              <div className="bg-gradient-to-br from-[#002366] to-[#003d82] rounded-full p-3 mb-3 group-hover:bg-white/20 transition-all duration-300">
                                <item.icon className="h-6 w-6 text-white" />
                              </div>
                              <span className="font-semibold text-sm text-[#002366] group-hover:text-white transition-colors duration-300">
                                {item.name}
                              </span>
                            </button>

                            {expandedMobile === item.name && (
                              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 p-4 animate-in fade-in-0 slide-in-from-top-2 duration-300 z-50 max-h-60 overflow-y-auto">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-3 text-sm text-gray-700 hover:text-[#002366] hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block w-full h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 p-4 flex flex-col items-center justify-center text-center hover:bg-gradient-to-br hover:from-[#002366] hover:to-[#003d82] hover:text-white transition-all duration-500 transform hover:scale-105 group min-h-[140px]"
                          >
                            <div className="bg-gradient-to-br from-[#002366] to-[#003d82] rounded-full p-3 mb-3 group-hover:bg-white/20 transition-all duration-300">
                              <item.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-semibold text-sm text-[#002366] group-hover:text-white transition-colors duration-300">
                              {item.name}
                            </span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-gray-200/50 sticky bottom-0 bg-white/80 backdrop-blur-sm">
                  <Link href="/apply">
                    <Button
                      className="w-full bg-gradient-to-r from-[#002366] to-[#003d82] hover:from-[#003d82] hover:to-[#0056b3] text-white py-4 rounded-2xl shadow-xl font-semibold text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
