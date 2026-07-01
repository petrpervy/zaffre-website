import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — ZayWay",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — ZayWay",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/zayway-preview",
    images: [{ url: "/previews/zayway.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — ZayWay",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/zayway.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="ZayWay"
      location="San Diego, CA"
      imageSrc="/previews/zayway.png"
      imageAlt="ZayWay website mockup"
    />
  );
}
