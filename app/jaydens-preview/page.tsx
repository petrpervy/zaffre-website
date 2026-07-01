import type { Metadata } from "next";
import { ClientPreview } from "@/components/ClientPreview";

export const metadata: Metadata = {
  title: "Your new website — Jayden's Soul Food",
  description: "A mockup Zaffre put together for you. Take a look.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Your new website — Jayden's Soul Food",
    description: "A mockup Zaffre put together for you. Take a look.",
    url: "/jaydens-preview",
    images: [{ url: "/previews/jaydens.png", width: 1456, height: 1088 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your new website — Jayden's Soul Food",
    description: "A mockup Zaffre put together for you. Take a look.",
    images: ["/previews/jaydens.png"],
  },
};

export default function Page() {
  return (
    <ClientPreview
      businessName="Jayden's Soul Food"
      location="San Diego, CA"
      imageSrc="/previews/jaydens.png"
      imageAlt="Jayden's Soul Food website mockup"
    />
  );
}
