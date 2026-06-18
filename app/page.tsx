import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
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
