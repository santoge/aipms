import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#002366] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info - Logo only */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo-aipms.png" alt="Adhithyan Institute" width={150} height={50} className="h-12 w-auto" />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering future healthcare professionals through excellence in paramedical education and training.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-blue-200 hover:text-white hover:bg-blue-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-blue-200 hover:text-white hover:bg-blue-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-blue-200 hover:text-white hover:bg-blue-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-blue-200 hover:text-white hover:bg-blue-800">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-blue-200 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/academics/faculty" className="text-blue-200 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-200 hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Campus Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/campus/hostels" className="text-blue-200 hover:text-white transition-colors">
                  Hostels
                </Link>
              </li>
              <li>
                <Link href="/campus/library" className="text-blue-200 hover:text-white transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/campus/language-lab" className="text-blue-200 hover:text-white transition-colors">
                  Language Lab
                </Link>
              </li>
              <li>
                <Link href="/campus/pastoral-care" className="text-blue-200 hover:text-white transition-colors">
                  Pastoral Care
                </Link>
              </li>
              <li>
                <Link href="/campus/counselling" className="text-blue-200 hover:text-white transition-colors">
                  Counselling
                </Link>
              </li>
              <li>
                <Link href="/campus/store" className="text-blue-200 hover:text-white transition-colors">
                  Campus Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-200 text-sm">
                    RPS Building, Kallikkadu
                    <br />
                    Trivandrum 695572
                    <br />
                    Kerala, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <p className="text-blue-200 text-sm">+91 9562934815</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <p className="text-blue-200 text-sm">hello@adhithyangroupofinstitutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Ready to Start Your Journey?</h4>
              <p className="text-blue-200 text-sm">
                Download our brochure or apply now to secure your future in healthcare.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#002366] bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
              <Link href="/apply">
                <Button className="bg-white text-[#002366] hover:bg-blue-50">
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Adhithyan Institute of Paramedical Science. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
