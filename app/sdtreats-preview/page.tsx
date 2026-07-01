import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — SD Treats by Bella",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — SD Treats by Bella",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/sdtreats-preview",
    images: [{ url: "/previews/sdtreats.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — SD Treats by Bella",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/sdtreats.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="SD Treats by Bella"
      location="San Diego, CA"
      imageSrc="/previews/sdtreats.png"
      imageAlt="SD Treats by Bella website mockup"
    />
  );
}
