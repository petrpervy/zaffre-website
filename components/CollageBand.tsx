import { Reveal } from "./Reveal";
import { ParallaxImage } from "./ParallaxImage";

export function CollageBand() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-8">
          {/* copy — kept narrow so it breathes */}
          <div className="md:col-span-4">
            <Reveal from="up">
              <p className="mono-label mb-6">Why a studio, not a freelancer</p>
              <h2 className="impact-lg max-w-[12ch]">
                Big-agency{" "}
                <span className="accent-serif" style={{ color: "var(--color-zaffre)" }}>
                  results
                </span>
                , small-studio care.
              </h2>
              <p className="body-lg mt-6 max-w-[34ch]">
                You get the polish of a large team and the directness of talking
                to the person who actually builds your site.
              </p>
            </Reveal>
          </div>

          {/* collage — real images fly in from different directions, then
              drift at different parallax speeds as you scroll */}
          <div className="relative md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Reveal from="left" className="col-span-2">
                <div
                  className="overflow-hidden rounded-2xl p-3 shadow-sm sm:p-4"
                  style={{ background: "#d4572a", rotate: "-1.5deg" }}
                >
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1100&q=80"
                    alt="Studio workspace"
                    speed={60}
                    className="aspect-[16/10] rounded-xl"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
              </Reveal>

              <Reveal from="up" delay={0.1} className="-mt-4 sm:-mt-8">
                <div
                  className="flex h-full flex-col justify-between rounded-2xl p-5"
                  style={{ background: "var(--color-zaffre)", color: "var(--color-cream)", rotate: "1.5deg" }}
                >
                  <span className="mono-label !text-cream/70">Outcome</span>
                  <span className="impact-md" style={{ color: "var(--color-lime)" }}>
                    3.1×
                  </span>
                  <span className="text-xs text-cream/80">
                    RFQ completions vs. the old flow
                  </span>
                </div>
              </Reveal>

              <Reveal from="right" delay={0.18} className="-mt-4 sm:-mt-8">
                <div
                  className="overflow-hidden rounded-2xl p-2 shadow-sm"
                  style={{ background: "#2a6f8e", rotate: "2deg" }}
                >
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                    alt="Design detail"
                    speed={-40}
                    className="aspect-[4/5] rounded-xl"
                    sizes="(max-width: 768px) 45vw, 22vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
