import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Ferment & Flour",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Ferment & Flour",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/fermentflour-preview",
    images: [{ url: "/previews/fermentflour.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Ferment & Flour",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/fermentflour.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Ferment & Flour"
      location="San Diego, CA"
      imageSrc="/previews/fermentflour.png"
      imageAlt="Ferment & Flour website mockup"
    />
  );
}
