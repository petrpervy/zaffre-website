import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Jesca Kitchen",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Jesca Kitchen",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/jesca-preview",
    images: [{ url: "/previews/jesca.png", width: 1456, height: 1088 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Jesca Kitchen",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/jesca.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Jesca Kitchen"
      location="San Diego, CA"
      imageSrc="/previews/jesca.png"
      imageAlt="Jesca Kitchen website mockup"
    />
  );
}
