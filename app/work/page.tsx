import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseTile } from "@/components/CaseTile";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Zaffre",
  description:
    "Real builds and clearly labeled concept redesigns from Zaffre: the brief, design system, and proof behind the work.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
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

  return (
    <>
      <Nav />
      <main>
        <header className="shell pt-14 pb-12 md:pt-20 md:pb-16">
          <Reveal>
            <p className="mono-label mb-6">Selected work · {projects.length} case files</p>
            <h1 className="impact max-w-[15ch]">
              The{" "}
              <span className="accent-serif" style={{ color: "var(--color-zaffre)" }}>
                file
              </span>{" "}
              left open.
            </h1>
            <p className="body-lg mt-7 max-w-[48ch]">
              Each project opens into a case file: real builds with real proof
              first, then concept redesigns labeled as concept work.
            </p>
          </Reveal>
        </header>

        <section className="shell border-t border-line pb-24 pt-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {ordered.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                <CaseTile project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
