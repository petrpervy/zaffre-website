import Link from "next/link";
import { Reveal } from "./Reveal";
import { SilkField } from "./SilkField";

const services = [
  { n: "01", title: "Positioning", body: "We find the proof your current site is hiding: product, place, process, catalogue, or story." },
  { n: "02", title: "Composition", body: "The site starts with a big idea and a page system, not a premade section stack." },
  { n: "03", title: "Design", body: "Type, texture, motion, and imagery chosen to make the business feel unmistakable." },
  { n: "04", title: "Development", body: "Fast, accessible websites built in clean modern code, not dragged together in a page builder." },
  { n: "05", title: "Search & conversion", body: "Technical SEO, clear paths to contact, and pages that answer what buyers actually need." },
  { n: "06", title: "Launch & care", body: "Domain cutover, handoff, and direct support from the person who built it." },
];

export function ServicesList({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden py-20 md:py-28"
    >
      {/* silk texture — Gleb's gpt-image-2 render, the hero's sibling, low and to the right */}
      <SilkField
        image="/textures/whatwedo.jpg"
        objectPosition="right center"
        opacity={0.55}
        baseGradient="transparent"
        mask="radial-gradient(125% 88% at 100% 50%, #000 0%, #000 24%, transparent 72%)"
      />

      <div className="shell relative">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* sticky intro column fills the old empty space with a real point of view */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              {showHeader && (
                <Reveal>
                  <p className="mono-label mb-4">What we do</p>
                  <h2 className="display-xl mb-5 max-w-[14ch]">
                    The work is the{" "}
                    <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                      argument
                    </span>
                    .
                  </h2>
                </Reveal>
              )}
              <Reveal delay={0.06}>
                <p className="body-lg !text-base max-w-[34ch]">
                  Your product has specs and history. Your show has atmosphere. Your
                  business has a reason people choose it. The site should make that
                  visible before it asks for the sale.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <Link
                  href="/services"
                  className="link-grow mt-7 inline-block text-sm font-medium"
                >
                  See how we work →
                </Link>
              </Reveal>
            </div>
          </div>

          {/* the disciplines */}
          <div className="md:col-span-7 md:col-start-6">
            <div role="list" className="border-t border-line">
              {services.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05} role="listitem">
                  <div className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-1 border-b border-line py-6 transition-colors md:grid-cols-[2.5rem_1fr] md:gap-x-6">
                    <span className="font-mono text-xs text-ink-faint md:row-span-2">{s.n}</span>
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="heading-md transition-colors duration-300 group-hover:text-accent">
                        {s.title}
                      </h3>
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-base transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:translate-x-1"
                        style={{ color: "var(--color-ink-muted)" }}
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                    <p className="col-span-2 mt-1 max-w-[44ch] text-sm leading-relaxed text-ink-muted md:col-span-1 md:col-start-2">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
