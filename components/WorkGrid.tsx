import Link from "next/link";
import { projects } from "@/lib/projects";
import { CaseTile } from "./CaseTile";
import { Reveal } from "./Reveal";

export function WorkGrid({ limit }: { limit?: number }) {
  const priority = ["greg-manufacturing", "hayleyjane", "wombinary"];
  const byPriority = (a: (typeof projects)[number], b: (typeof projects)[number]) => {
    const ai = priority.indexOf(a.slug);
    const bi = priority.indexOf(b.slug);
    if (ai !== -1 || bi !== -1) {
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    }
    return 0;
  };
  const ordered = [
    ...projects.filter((project) => project.kind === "real").sort(byPriority),
    ...projects.filter((project) => project.kind === "concept"),
  ];
  const shown = limit ? ordered.slice(0, limit) : ordered;
  const realCount = shown.filter((project) => project.kind === "real").length;
  const conceptCount = shown.filter((project) => project.kind === "concept").length;

  return (
    <section id="work" className="relative -mt-28 scroll-mt-20 pb-20 pt-28 md:-mt-40 md:pb-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.82) 42%, #fff 82%)",
        }}
      />
      <div className="shell">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono-label mb-4">Selected work</p>
              <h2 className="display-xl max-w-[16ch]">
                Proof we&apos;re proud to{" "}
                <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                  sign
                </span>
                .
              </h2>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-ink-muted">
                Real client builds first. Concept redesigns are labeled clearly
                when they&apos;re used to show how we think.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <p className="mono-label">
                {realCount} real builds · {conceptCount} concept studies
              </p>
              <Link href="/work" className="link-grow text-sm font-medium">
                View all projects →
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.07} className="h-full">
              <CaseTile project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
