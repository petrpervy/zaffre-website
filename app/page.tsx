import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { Statement } from "@/components/Statement";
import { ServicesList } from "@/components/ServicesList";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkGrid limit={6} />
        <Statement />
        <ServicesList />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
