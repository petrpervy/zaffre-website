import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export function CaseTile({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const textureIndex = index % 6;
  const isStudioConcept = project.niche === "Studio concept";
  const kindLabel =
    project.kind === "real"
      ? "Real build"
      : project.niche === "Studio concept"
        ? "Studio concept"
        : "Concept redesign";

  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="view"
      className="group relative block h-full overflow-hidden rounded-[20px] border border-line bg-white transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-accent hover:ring-2 hover:ring-accent/60 hover:shadow-[0_30px_70px_-26px_rgba(47,107,255,0.6)]"
      aria-label={`${project.name} — ${project.niche} case study`}
    >
      <div className="relative h-full min-h-[250px]">
        {/* the soft object texture (default tile state) */}
        <Image
          src={isStudioConcept && project.image ? project.image : `/work/${textureIndex}.jpg`}
          alt=""
          fill
          unoptimized={isStudioConcept}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04] ${
            isStudioConcept ? "opacity-95" : ""
          }`}
        />

        {/* legibility scrims — keep the left/bottom readable over any texture */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: isStudioConcept
              ? "linear-gradient(102deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.62) 34%, rgba(255,255,255,0.08) 72%)"
              : "linear-gradient(102deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.6) 38%, rgba(255,255,255,0) 66%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 42%)",
          }}
        />

        {/* preview image — pops up only on hover. before/after = letterboxed on dark;
            a real homepage screenshot fills the tile. */}
        {!isStudioConcept && (project.beforeAfter || project.image) && (
          <div
            aria-hidden
            className="absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            style={{ background: project.beforeAfter ? "#0b0b10" : "transparent" }}
          >
            <Image
              src={(project.beforeAfter ?? project.image)!}
              alt={`${project.name} preview`}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-transform duration-500 ease-out ${
                project.beforeAfter
                  ? "scale-[1.07] group-hover:scale-[1.11]"
                  : "group-hover:scale-[1.02]"
              }`}
            />
          </div>
        )}

        {/* content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <span className="mono-label">{project.niche}</span>
              <span
                className="w-fit rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em]"
                style={{
                  borderColor:
                    project.kind === "real" ? `${project.tint}45` : "rgba(10,10,15,0.14)",
                  background:
                    project.kind === "real" ? `${project.tint}14` : "rgba(255,255,255,0.74)",
                  color:
                    project.kind === "real" ? project.tint : "var(--color-ink-muted)",
                }}
              >
                {kindLabel}
              </span>
            </div>
            <span className="mono-label tabular-nums">{project.year}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={featured ? "display-lg" : "heading-md"}>{project.name}</h3>
              <span
                className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--color-ink-muted)" }}
                aria-hidden
              >
                ↗
              </span>
            </div>
            <p className="mt-1.5 max-w-[26ch] text-sm leading-snug text-ink-muted">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
