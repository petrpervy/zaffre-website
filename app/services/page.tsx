import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProcessWalkthrough } from "@/components/ProcessWalkthrough";
import { SilkField } from "@/components/SilkField";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Zaffre",
  description:
    "How a Zaffre site gets made — positioning, composition, design, development, search, and launch care, walked through step by step.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="relative isolate">
        {/* full-page silk environment — CSS base + the generated backdrop on top.
            Fixed + cover so it threads behind every section instead of stark white. */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(90% 55% at 100% 0%, rgba(47,107,255,.07), transparent 58%), radial-gradient(60% 45% at 8% 42%, rgba(47,107,255,.04), transparent 62%), radial-gradient(70% 50% at 100% 96%, rgba(47,107,255,.05), transparent 60%), linear-gradient(180deg, #ffffff 0%, #fbfcff 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center opacity-[0.35]"
          style={{ backgroundImage: "url(/textures/services-page-bg.jpg)" }}
        />
        <header className="relative overflow-hidden">
          <SilkField
            image="/textures/services-hero-silk.jpg"
            objectPosition="right center"
            opacity={1}
            baseGradient="transparent"
            mask="radial-gradient(130% 160% at 100% 30%, #000 0%, #000 52%, transparent 86%)"
          />
          <div className="shell relative pt-12 pb-10 md:pt-20 md:pb-14">
            <Reveal>
              <p className="mono-label mb-6">How a Zaffre site gets made</p>
              <h1 className="impact max-w-[15ch]">
                Every project walks the same path.{" "}
                <span className="accent-serif block" style={{ color: "var(--color-accent)" }}>
                  For a reason.
                </span>
              </h1>
              <p className="body-lg mt-7 max-w-[40ch]">
                A clear process. A calm experience.
                <br />A site built to perform.
              </p>
            </Reveal>
          </div>
        </header>

        <ProcessWalkthrough />
      </main>
      <Footer />
    </>
  );
}
