import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Adhithyan Group of Institutions | Adhithyan Institute of Paramedical Sciences | AIPMS",
    template: "%s | Adhithyan Institute of Paramedical Sciences",
  },
  description:
    "Leading paramedical science institute in Kerala offering comprehensive healthcare education programs. Join AIPMS for quality medical training and career opportunities in healthcare.",
  keywords: [
    "paramedical science",
    "healthcare education",
    "medical training",
    "Kerala medical institute",
    "AIPMS",
    "Adhithyan Institute",
    "medical laboratory technology",
    "radiology technology",
    "operation theatre technology",
    "dialysis technology",
    "cardiac care technology",
    "hospital administration",
    "medical courses Kerala",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Adhithyan Institute of Paramedical Sciences",
  alternateName: "AIPMS",
  url: "https://www.adhithyangroupofinstitutions.com",
  logo: "https://www.adhithyangroupofinstitutions.com/logo-new.png",
  description: "Leading paramedical science institute in Kerala offering comprehensive healthcare education programs.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Kerala",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "admissions",
  },
  sameAs: ["https://www.adhithyangroupofinstitutions.com"],
}

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
