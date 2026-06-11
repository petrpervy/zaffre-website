import Link from "next/link";
import { Reveal } from "./Reveal";
import { SilkField } from "./SilkField";
import { projects } from "@/lib/projects";

// Three real client builds carry the section: Greg's Manufacturing, Wombinary,
// Hayley Jane. Quotes live in lib/projects.ts.
const FEATURED = ["greg-manufacturing", "wombinary", "hayleyjane"];

export function Testimonials() {
  const picks = FEATURED.map((slug) => projects.find((p) => p.slug === slug)!).filter(
    (project) => project?.kind === "real" && project.testimonial,
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* faceted-geometry texture behind the cards, fading on every edge so it never
          fights the quotes; the frosted-glass cards let it read softly through them */}
      <SilkField
        image="/textures/facets-blue.jpg"
        objectPosition="center"
        baseGradient="transparent"
        opacity={0.42}
        mask="radial-gradient(115% 95% at 50% 50%, #000 0%, #000 30%, transparent 78%)"
      />
      <div className="shell relative z-10">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label mb-4">In their words</p>
              <h2 className="display-xl max-w-[20ch]">
                The kind of feedback you{" "}
                <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                  hope
                </span>{" "}
                for.
              </h2>
            </div>
            <p className="mono-label">{picks.length} real client builds</p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {picks.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="h-full">
              <Link
                href={`/work/${p.slug}`}
                data-cursor="view"
                className="group glass flex h-full flex-col justify-between rounded-[20px] p-8 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-30px_rgba(47,107,255,0.45)]"
              >
                <div>
                  {/* a stamped opening quote sets a tone the body type can't */}
                  <span
                    aria-hidden
                    className="accent-serif block text-5xl leading-none"
                    style={{ color: p.tint }}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 display-lg !text-[1.18rem] !leading-snug !font-medium">
                    {p.testimonial?.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-semibold"
                      style={{ background: p.tint, color: p.onTint }}
                    >
                      {p.name
                        .replace(/[^a-zA-Z ]/g, "")
                        .split(" ")
                        .filter(Boolean)
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <p className="text-sm font-semibold">{p.name}</p>
                  </div>
                  <span
                    className="text-base leading-none text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden
                  >
                    ↗
                  </span>
                </figcaption>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
