import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Bake With Me SD",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Bake With Me SD",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/bakewithme-preview",
    images: [{ url: "/previews/bakewithme.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Bake With Me SD",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/bakewithme.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Bake With Me SD"
      location="San Diego, CA"
      imageSrc="/previews/bakewithme.png"
      imageAlt="Bake With Me SD website mockup"
    />
  );
}
