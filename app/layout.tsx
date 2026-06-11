import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";

const siteUrl = "https://zaffre.website";
const isVercelRuntime = process.env.VERCEL === "1";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zaffre — Proof-first websites",
  description:
    "A Rochester web studio turning real businesses into proof sheets: product, process, catalogue, stage, or story made visible online.",
  applicationName: "Zaffre",
  keywords: [
    "Zaffre",
    "Rochester web design",
    "proof-first websites",
    "small business websites",
    "manufacturer website design",
    "custom web design studio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Zaffre",
    title: "Zaffre — Proof-first websites",
    description:
      "A Rochester web studio turning real businesses into proof sheets: product, process, catalogue, stage, or story made visible online.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zaffre — proof-first websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaffre — Proof-first websites",
    description:
      "A Rochester web studio turning real businesses into proof sheets.",
    images: ["/opengraph-image"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Zaffre",
      legalName: "Sol Seven Studios LLC",
      url: siteUrl,
      email: "zaffrestudios@gmail.com",
      areaServed: ["Rochester NY", "United States"],
      slogan: "Proof-first websites for businesses with real work to show.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Zaffre",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Zaffre",
      url: siteUrl,
      email: "zaffrestudios@gmail.com",
      image: `${siteUrl}/opengraph-image`,
      priceRange: "$750-$3000+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rochester",
        addressRegion: "NY",
        addressCountry: "US",
      },
      serviceType: "Web design and development",
      areaServed: ["Rochester NY", "United States"],
      parentOrganization: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${fraunces.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        {isVercelRuntime ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
