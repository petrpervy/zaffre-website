import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ProcessStrip } from "@/components/ProcessStrip";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Studio — Zaffre",
  description:
    "A three-person web design studio in Rochester, NY. Small on purpose — the people who design your site are the ones who build it.",
  alternates: { canonical: "/studio" },
};

const people = [
  { name: "Gleb Romanov", role: "Design & build", tint: "#0e2c8b" },
  { name: "Agneya K.", role: "Engineering", tint: "#1f5d44" },
  { name: "Ethan S.", role: "Motion & 3D", tint: "#7b2d4f" },
];

export default function StudioPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="shell pt-14 pb-12 md:pt-20 md:pb-16">
          <Reveal>
            <p className="mono-label mb-6">The studio · Rochester, NY</p>
            <h1 className="impact max-w-[16ch]">
              Three people who&apos;d rather build it{" "}
              <span className="accent-serif" style={{ color: "var(--color-zaffre)" }}>
                right
              </span>
              .
            </h1>
          </Reveal>
        </header>

        <section className="shell border-t border-line py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <Reveal>
                <p className="display-lg max-w-[24ch] !font-normal">
                  I&apos;m Gleb. I read every project myself before it starts.
                </p>
                <p className="body-lg mt-6 max-w-[52ch]">
                  We&apos;re small on purpose — small enough that the person who
                  designs and builds your site is the person you&apos;re talking to,
                  and the one who picks up when you call. No account manager in
                  between, no offshore handoff, no template farm.
                </p>
                <p className="body-lg mt-5 max-w-[52ch]">
                  We take a few projects at a time. Each one gets the typography
                  chosen by hand, the layout argued over, and a process you can
                  see in every case file. If we&apos;re not the right studio for
                  what you need, we&apos;ll tell you that on the first call.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.1}>
                <p className="mono-label mb-4">Who you work with</p>
                <ul className="divide-y divide-line border-t border-line">
                  {people.map((p) => (
                    <li key={p.name} className="flex items-center gap-3 py-4">
                      <span
                        className="h-8 w-8 shrink-0 rounded-full"
                        style={{ background: p.tint }}
                      />
                      <div className="flex flex-1 items-center justify-between">
                        <span className="heading-md">{p.name}</span>
                        <span className="mono-label">{p.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <ProcessStrip />
      </main>
      <Footer />
    </>
  );
}
