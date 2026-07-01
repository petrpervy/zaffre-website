import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Zeze's Filipino Cuisine",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Zeze's Filipino Cuisine",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/zezes-preview",
    images: [{ url: "/previews/zezes.png", width: 1456, height: 1088 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Zeze's Filipino Cuisine",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/zezes.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Zeze's Filipino Cuisine"
      location="National City, San Diego"
      imageSrc="/previews/zezes.png"
      imageAlt="Zeze's Filipino Cuisine website mockup"
    />
  );
}
