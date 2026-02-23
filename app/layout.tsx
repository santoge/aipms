import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Best Paramedical College in Trivandrum | Top Healthcare Education in Kerala | AIPMS",
    template: "%s | Adhithyan Institute of Paramedical Sciences",
  },
  description:
    "Best paramedical college in Trivandrum, Kerala offering top-ranked healthcare education. AIPMS provides accredited B.VOC programs and LBS diploma courses with 100% placement guarantee. UGC & NAAC approved institute.",
  keywords: [
    "best paramedical college in trivandrum",
    "top paramedical college in kerala",
    "paramedical science college trivandrum",
    "best medical lab technology college kerala",
    "top healthcare education trivandrum",
    "paramedical institute kerala",
    "medical laboratory technology course",
    "dialysis technology college",
    "radiology technology course",
    "cardiac care technology",
    "hospital administration course",
    "AIPMS Adhithyan",
    "paramedical education kerala",
    "best health sciences college trivandrum",
    "medical training kerala",
    "accredited paramedical college",
  ],
  authors: [{ name: "Adhithyan Institute of Paramedical Sciences" }],
  creator: "Adhithyan Institute of Paramedical Sciences",
  publisher: "Adhithyan Institute of Paramedical Sciences",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.adhithyangroupofinstitutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adhithyangroupofinstitutions.com",
    title: "Adhithyan Group of Institutions | Leading Healthcare Education",
    description:
      "Premier paramedical science institute in Kerala offering quality healthcare education and training programs.",
    siteName: "Adhithyan Institute of Paramedical Sciences",
    images: [
      {
        url: "/logo-new.png",
        width: 1200,
        height: 630,
        alt: "Adhithyan Institute of Paramedical Sciences Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhithyan Institute of Paramedical Sciences",
    description:
      "Leading paramedical science institute in Kerala offering comprehensive healthcare education programs.",
    images: ["/logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "387f38ad2e78973f",
  },
  category: "education",
    generator: 'v0.app'
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Adhithyan Institute of Paramedical Sciences",
    alternateName: ["AIPMS", "Adhithyan Group of Institutions"],
    url: "https://www.adhithyangroupofinstitutions.com",
    logo: "https://www.adhithyangroupofinstitutions.com/logo-aipms.png",
    description: "Best paramedical college in Trivandrum, Kerala offering top-ranked healthcare education programs with 100% placement guarantee.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Kerala",
      addressLocality: "Trivandrum",
      streetAddress: "Adhithyan Institute Campus",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
        telephone: "+919562934815",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+919562934815",
      },
    ],
    sameAs: ["https://www.adhithyangroupofinstitutions.com"],
    award: [
      "UGC Approved",
      "NAAC Accredited",
      "Best Paramedical College Award",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Adhithyan Institute of Paramedical Sciences",
    description: "Best paramedical college in Trivandrum offering accredited healthcare education",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Kerala",
      addressLocality: "Trivandrum",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "8.5241",
      longitude: "76.9366",
    },
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="google-site-verification" content="387f38ad2e78973f" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
