import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Christina Cooks SD",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Christina Cooks SD",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/christinacooks-preview",
    images: [{ url: "/previews/christinacooks.png", width: 1456, height: 1088 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Christina Cooks SD",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/christinacooks.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Christina Cooks SD"
      location="San Diego, CA"
      imageSrc="/previews/christinacooks.png"
      imageAlt="Christina Cooks SD website mockup"
    />
  );
}
