import { Reveal } from "./Reveal";
import { SilkField } from "./SilkField";
import { TrackedLink } from "./TrackedLink";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  best: string;
  features: string[];
  featured?: boolean;
  /** gpt-image-2 silk texture + CSS fallback base for the card backdrop */
  image: string;
  base: string;
  tint: string;
};

const tiers: Tier[] = [
  {
    name: "Essential",
    price: "from $750",
    cadence: "one-page proof site",
    blurb: "One page, built around the strongest proof your business already has.",
    best: "Best for a launch, a landing page, or a single strong pitch.",
    image: "/textures/tier-essential.jpg",
    base: "radial-gradient(120% 90% at 80% 0%, #eef3ff 0%, #ffffff 60%)",
    tint: "#2f6bff",
    features: [
      "Custom one-page design — no template",
      "Mobile-first, fast, accessible",
      "Contact form + basic SEO",
      "Live in about a week",
    ],
  },
  {
    name: "Professional",
    price: "from $1,500",
    cadence: "multi-page proof system",
    blurb: "A multi-page site that makes the product, process, and conversion path inspectable.",
    best: "Best for a growing business with real work to show and buyers to convince.",
    featured: true,
    image: "/textures/tier-professional.jpg",
    base: "radial-gradient(120% 100% at 50% 0%, #1f5bff 0%, #2f6bff 45%, #1b46c9 100%)",
    tint: "#ffffff",
    features: [
      "Everything in Essential",
      "Up to ~5 pages, designed to a system",
      "AI chatbot trained on your business",
      "Advanced on-page SEO",
      "Scroll-reveal motion",
    ],
  },
  {
    name: "Premium",
    price: "from $3,000",
    cadence: "the full studio build",
    blurb: "The whole studio — cinematic motion, deeper content systems, full SEO and analytics.",
    best: "Best for a brand that wants to look like the leader in its market.",
    image: "/textures/tier-premium.jpg",
    base: "radial-gradient(120% 100% at 80% 0%, #2a2440 0%, #1b1830 60%, #14111f 100%)",
    tint: "#e6c576",
    features: [
      "Everything in Professional",
      "Many pages / CMS",
      "Custom 3D & cinematic motion",
      "Full technical SEO + analytics",
      "Chatbots & integrations",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label mb-4">What it costs</p>
              <h2 className="display-xl max-w-[16ch]">
                Three ways to{" "}
                <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                  start
                </span>
                .
              </h2>
            </div>
            <p className="body-lg !text-base max-w-[34ch] md:text-right">
              Starting points, not bait. We lock the final scope after a short
              brief review, then give you one fixed number before we start.
            </p>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => {
            const dark = t.featured || t.name === "Premium";
            const ink = dark ? "#f3f4f7" : "var(--color-ink)";
            const inkMuted = dark ? "rgba(243,244,247,0.66)" : "var(--color-ink-muted)";
            const line = dark ? "rgba(255,255,255,0.14)" : "var(--color-line)";

            return (
              <Reveal key={t.name} delay={i * 0.08} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-8 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 ${
                    t.featured
                      ? "border-transparent shadow-[0_30px_70px_-30px_rgba(47,107,255,0.7)] lg:-my-3"
                      : "border-line"
                  }`}
                  style={{ background: dark ? undefined : "var(--color-card)" }}
                >
                  {/* the silk backdrop — Gleb's gpt-image-2 tier render over a CSS base */}
                  <SilkField
                    image={t.image}
                    objectPosition="center"
                    baseGradient={t.base}
                    opacity={dark ? 1 : 0.55}
                    mask={
                      dark
                        ? "linear-gradient(to bottom, #000 0%, #000 60%, rgba(0,0,0,0.55) 100%)"
                        : "linear-gradient(to bottom, #000 0%, #000 35%, transparent 82%)"
                    }
                  />
                  {/* legibility scrim so copy stays crisp over the texture */}
                  {!dark && (
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.9) 42%, #fff 100%)",
                      }}
                    />
                  )}

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="mono-label" style={{ color: dark ? "rgba(243,244,247,0.7)" : undefined }}>
                        {t.name}
                      </span>
                      {t.featured && (
                        <span
                          className="rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]"
                          style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
                        >
                          Most popular
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex items-end gap-2">
                      <span
                        className="font-semibold"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(2.4rem, 4vw, 3.1rem)",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          color: ink,
                        }}
                      >
                        {t.price}
                      </span>
                      <span className="mb-1.5 text-sm" style={{ color: inkMuted }}>
                        {t.cadence}
                      </span>
                    </div>

                    <p className="mt-4 max-w-[34ch] text-sm leading-relaxed" style={{ color: inkMuted }}>
                      {t.blurb}
                    </p>

                    <ul className="mt-7 flex flex-col gap-3 border-t pt-7" style={{ borderColor: line }}>
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm" style={{ color: ink }}>
                          <span
                            aria-hidden
                            className="mt-px text-[0.95rem] leading-tight"
                            style={{ color: t.featured ? "#fff" : t.tint }}
                          >
                            ↳
                          </span>
                          <span style={{ color: dark ? "rgba(243,244,247,0.9)" : "var(--color-ink-soft)" }}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-1 flex-col justify-end">
                      <p className="mb-5 text-xs leading-relaxed" style={{ color: inkMuted }}>
                        {t.best}
                      </p>
                      <TrackedLink
                        href="/contact"
                        eventName="pricing_cta_click"
                        eventProperties={{ tier: t.name.toLowerCase() }}
                        data-cursor="view"
                        className="pill w-full justify-center text-center"
                        style={
                          t.featured
                            ? { background: "#fff", color: "#1b46c9", fontWeight: 600 }
                            : dark
                              ? { background: t.tint, color: "#14111f", fontWeight: 600 }
                              : { background: "var(--color-ink)", color: "#fff" }
                        }
                      >
                        {t.featured ? "Start your project" : "Ask about this"} →
                      </TrackedLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-ink-muted">
            Not sure which fits?{" "}
            <TrackedLink
              href="/contact"
              eventName="pricing_help_click"
              className="link-grow font-medium text-ink"
            >
              Tell us about your project
            </TrackedLink>{" "}
            and we&apos;ll point you to the right one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
