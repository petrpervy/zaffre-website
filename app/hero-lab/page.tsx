import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HeroComposition } from "@/components/HeroComposition";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Hero Lab | Zaffre",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeroLabPage() {
  return (
    <>
      <Nav />
      <main>
        <HeroComposition variant="proof-sheet" lab />
        <HeroComposition variant="glass-signal" lab />
        <HeroComposition variant="live-stack" lab />
      </main>
      <Footer />
    </>
  );
}
