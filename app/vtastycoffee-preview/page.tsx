import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Very Tasty Coffee",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Very Tasty Coffee",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/vtastycoffee-preview",
    images: [{ url: "/previews/vtastycoffee.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Very Tasty Coffee",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/vtastycoffee.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Very Tasty Coffee"
      location="National City, CA"
      imageSrc="/previews/vtastycoffee.png"
      imageAlt="Very Tasty Coffee website mockup"
    />
  );
}
