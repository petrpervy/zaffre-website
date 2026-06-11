import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Poppins, Questrial, Roboto, Roboto_Condensed } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MiniSite } from "@/components/MiniSite";
import { Reveal } from "@/components/Reveal";
import { projects, getProject } from "@/lib/projects";

// Real typefaces used on the actual builds, loaded so the case-page
// specimen renders in the true font — not the site's own Geist.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--spec-poppins", display: "swap" });
const questrial = Questrial({ subsets: ["latin"], weight: "400", variable: "--spec-questrial", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--spec-roboto", display: "swap" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "700"], variable: "--spec-roboto-condensed", display: "swap" });

const specFontVars = `${poppins.variable} ${questrial.variable} ${roboto.variable} ${robotoCondensed.variable}`;

// slug → the real {display, body} font-family stacks. Google faces resolve
// via the scoped CSS vars above; Fontshare faces (loaded in globals.css) and
// the site's own faces resolve by family name / shared var.
const SPEC_FONTS: Record<string, { display: string; body: string }> = {
  "cameron-roofing": { display: "'Clash Display', sans-serif", body: "'Satoshi', sans-serif" },
  "ironwood-construction": { display: "'Clash Display', sans-serif", body: "'Satoshi', sans-serif" },
  "wren-salon": { display: "'Sentient', serif", body: "'General Sans', sans-serif" },
  "hayleyjane": { display: "var(--spec-roboto-condensed), sans-serif", body: "var(--spec-roboto), sans-serif" },
  "greg-manufacturing": { display: "var(--spec-poppins), sans-serif", body: "var(--spec-questrial), sans-serif" },
  "wombinary": { display: "var(--font-fraunces), serif", body: "var(--font-geist), sans-serif" },
  "brickstone-dashboard": { display: "var(--font-geist), sans-serif", body: "var(--font-geist), sans-serif" },
  "nexora-fintech": { display: "var(--font-geist), sans-serif", body: "var(--font-geist), sans-serif" },
  "aurelia-identity": { display: "var(--font-fraunces), serif", body: "var(--font-geist), sans-serif" },
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Case file — Zaffre" };
  return {
    title: `${project.name} — Zaffre case file`,
    description: project.outcome,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.name} — Zaffre case file`,
      description: project.outcome,
      images: [
        {
          url: project.image || project.beforeAfter || "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.name} case file`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Zaffre case file`,
      description: project.outcome,
      images: [project.image || project.beforeAfter || "/opengraph-image"],
    },
  };
}

const arcVariants = ["wireframe", "mockup", "live"] as const;

function kindLabel(project: (typeof projects)[number]) {
  if (project.kind === "real") return "Real build";
  if (project.niche === "Studio concept") return "Studio concept";
  return "Concept redesign";
}

export default async function CaseFile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const specFonts = SPEC_FONTS[slug] ?? { display: "var(--font-display)", body: "var(--font-body)" };

  return (
    <div className={specFontVars}>
      {/* Fontshare faces for the concept builds' specimens (Clash Display,
          Satoshi, Sentient, General Sans) — Next hoists + dedupes this link. */}
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600&f[]=satoshi@400,500,700&f[]=sentient@400,500&f[]=general-sans@400,500&display=swap"
      />
      <Nav />
      <main>
        {/* breadcrumb */}
        <div className="shell pt-10">
          <Link href="/#work" className="mono-label link-grow !text-ink-muted">
            ← All work
          </Link>
        </div>

        {/* cover */}
        <header className="shell pt-10 pb-16 md:pt-14 md:pb-24">
          <Reveal>
            <div className="mb-7 flex items-center gap-4">
              <span className="mono-label">{project.niche}</span>
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: project.tint }}
              />
              <span className="mono-label">
                {kindLabel(project)}
              </span>
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: project.tint }}
              />
              <span className="mono-label tabular-nums">{project.year}</span>
            </div>
            <h1 className="display-hero max-w-[15ch]">{project.name}</h1>
            <p className="display-lg mt-6 max-w-[24ch] !font-normal text-ink-muted">
              {project.outcome}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: `${project.tint}40`,
                    color: project.tint,
                    background: `${project.tint}10`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {project.beforeAfter ? (
              <figure className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src={project.beforeAfter}
                  alt={`${project.name} — before and after redesign`}
                  width={1536}
                  height={1024}
                  priority
                  unoptimized
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="h-auto w-full"
                />
              </figure>
            ) : project.image ? (
              <figure className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src={project.image}
                  alt={`${project.name} — homepage`}
                  width={1920}
                  height={1200}
                  priority
                  unoptimized
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="h-auto w-full"
                />
              </figure>
            ) : (
              <div
                className="mt-12 overflow-hidden rounded-2xl p-4 sm:p-8"
                style={{ background: project.tint }}
              >
                <MiniSite variant="live" tint={project.tint} />
              </div>
            )}
          </Reveal>
        </header>

        {/* about the client */}
        <Section label="00 — About the client">
          <p className="display-lg max-w-[34ch] !font-normal">{project.about}</p>
        </Section>

        {/* the brief */}
        <Section label="01 — The brief">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mono-label mb-3">What they needed</p>
              <p className="body-lg !text-ink">{project.brief.need}</p>
            </div>
            <div>
              <p className="mono-label mb-3">The constraint that shaped it</p>
              <p className="body-lg !text-ink">{project.brief.constraint}</p>
            </div>
          </div>
        </Section>

        {/* typography */}
        <Section label="02 — Typography">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <div className="rounded-2xl border border-line p-8 md:p-12" style={{ background: "var(--color-paper-raised)" }}>
                <p className="mono-label mb-6">Display — {project.type.display}</p>
                <p
                  className="leading-[0.95]"
                  style={{
                    fontFamily: specFonts.display,
                    fontSize: "clamp(2.5rem,6vw,4.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Aa Gg
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: specFonts.display,
                    fontSize: "clamp(1.25rem,2vw,1.75rem)",
                  }}
                >
                  The quick brown fox.
                </p>
                <div className="my-8 h-px bg-line" />
                <p className="mono-label mb-3">Body — {project.type.body}</p>
                <p className="text-base leading-relaxed text-ink-muted" style={{ fontFamily: specFonts.body }}>
                  The quick brown fox jumps over the lazy dog. 0123456789 —
                  legibility holds from caption to paragraph.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="mono-label mb-3">Why this pairing</p>
              <p className="body-lg !text-ink">{project.type.note}</p>
            </div>
          </div>
        </Section>

        {/* color */}
        <Section label="03 — Color">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.palette.map((sw) => (
              <Reveal key={sw.hex}>
                <figure>
                  <div
                    className="aspect-[4/5] w-full rounded-xl border border-line"
                    style={{ background: sw.hex }}
                  />
                  <figcaption className="mt-3">
                    <p className="text-sm font-medium">{sw.name}</p>
                    <p className="mono-label mt-0.5">{sw.hex}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* the work — real design mockups when we have them, else the process arc */}
        {project.gallery ? (
          <Section label="04 — The work">
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal
                  key={g.src}
                  delay={(i % 2) * 0.06}
                  className={i === 0 ? "md:col-span-2" : ""}
                >
                  <figure className="overflow-hidden rounded-2xl border border-line bg-white">
                    <Image
                      src={g.src}
                      alt={`${project.name} — ${g.caption}`}
                      width={2048}
                      height={1152}
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="h-auto w-full"
                    />
                    <figcaption className="mono-label border-t border-line px-5 py-4">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Section>
        ) : (
          <Section
            label={
              project.kind === "real"
                ? "04 — Wireframe → Mockup → Live"
                : "04 — Wireframe → Mockup → Prototype"
            }
          >
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
              {arcVariants.map((variant, i) => (
                <Reveal key={variant} delay={i * 0.08}>
                  <div>
                    <MiniSite variant={variant} tint={project.tint} />
                    <div className="mt-5">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--color-zaffre)" }}
                        >
                          0{i + 1}
                        </span>
                        <p className="heading-md capitalize">{project.arc[i].stage}</p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {project.arc[i].caption}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        )}

        {project.metric && (
          <section className="border-t border-line py-20 md:py-28">
            <div className="shell">
              <Reveal>
                <p className="mono-label mb-8">05 — Outcome</p>
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
                  <span
                    className="display-hero"
                    style={{ color: project.tint }}
                  >
                    {project.metric.value}
                  </span>
                  <p className="body-lg max-w-[24ch] !text-ink md:mb-3">
                    {project.metric.label}
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {!project.metric && (
          <Section label="05 — What this explores">
            <p className="display-lg max-w-[30ch] !font-normal">
              A concept study, not a client result: the point is to show the
              strategic move, the interface direction, and the kind of
              conversion path we would build if this were commissioned.
            </p>
          </Section>
        )}

        {project.testimonial && (
          <section
            className="border-t border-night-line py-20 md:py-28"
            style={{ background: "var(--color-night)", color: "var(--color-cream)" }}
          >
            <div className="shell">
              <Reveal>
                <p className="mono-label mb-8 !text-cream-muted">06 — In their words</p>
                <blockquote className="display-lg max-w-[24ch] text-cream">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <span
                    className="h-10 w-10 shrink-0 rounded-full"
                    style={{ background: project.tint }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-cream">
                      {project.testimonial.author}
                    </p>
                    <p className="mono-label !text-cream-muted">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* next project */}
        <section className="border-t border-line py-16">
          <div className="shell">
            <Link href={`/work/${next.slug}`} className="group block">
              <p className="mono-label mb-4">Next case file</p>
              <div className="flex items-center justify-between gap-4">
                <h2 className="display-xl">{next.name}</h2>
                <span
                  className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
                  style={{ color: next.tint }}
                >
                  →
                </span>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="shell">
        <Reveal>
          <p className="mono-label mb-10">{label}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
