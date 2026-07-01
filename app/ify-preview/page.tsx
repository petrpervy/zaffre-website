import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Ify's Kitchen",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Ify's Kitchen",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/ify-preview",
    images: [{ url: "/previews/ify.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Ify's Kitchen",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/ify.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Ify's Kitchen"
      location="San Diego, CA"
      imageSrc="/previews/ify.png"
      imageAlt="Ify's Kitchen website mockup"
    />
  );
}
