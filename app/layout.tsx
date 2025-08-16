import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Spectral } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  title:
    "ClarityLabs™ | Methyl•15™ - Activated Folate That Works With Your Genes",
  description:
    "Clinically-dosed L-Methylfolate (5-MTHF) 15mg to support neurotransmitter synthesis and homocysteine balance. Designed for people with MTHFR variants.",
  keywords:
    "L-Methylfolate, 5-MTHF, MTHFR, folate supplement, neurotransmitter support, homocysteine",
  openGraph: {
    title: "Methyl•15™ - Activated Folate That Works With Your Genes",
    description:
      "Clinically-dosed L-Methylfolate (5-MTHF) 15mg to support neurotransmitter synthesis and homocysteine balance.",
    url: "https://getclaritylabs.com",
    siteName: "ClarityLabs™",
    type: "website",
  },
  robots: "index, follow",
  generator: "ClarityLabs™",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spectral.variable} antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/spectral-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Methyl•15™ - L-Methylfolate 15mg",
              description:
                "Clinically-dosed L-Methylfolate (5-MTHF) 15mg to support neurotransmitter synthesis and homocysteine balance. Designed for people with MTHFR variants.",
              brand: {
                "@type": "Brand",
                name: "ClarityLabs™",
              },
              offers: {
                "@type": "Offer",
                price: "49.00",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://getclaritylabs.com",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <script
          src="https://widget-deploy-hazel.vercel.app/widget.js"
          data-config='{"theme":"light","borderGradient":{"from":"#00352A","to":"#45A6A5","direction":"to bottom right","backgroundColor":"#FFFBEE","starGradient":{"from":"#00352A","to":"#45A6A5","direction":"to bottom right"}}}'
          defer
        ></script>
      </body>
    </html>
  );
}
