import { Reveal } from "./Reveal";

type Tile = {
  title: string;
  body: string;
  span: string;
  isNew?: boolean;
  from?: "up" | "left" | "right" | "scale";
};

const tiles: Tile[] = [
  {
    title: "Web Design",
    body: "Type chosen by hand, layout argued over, one accent earning its keep. Studio-grade, never templated.",
    span: "md:col-span-4 md:row-span-2",
    from: "left",
  },
  {
    title: "Development",
    body: "Fast, accessible, yours. Next.js builds that pass Lighthouse and hand over clean.",
    span: "md:col-span-2",
    isNew: true,
    from: "up",
  },
  {
    title: "Brand & Identity",
    body: "A voice and a visual system that survives contact with a real website.",
    span: "md:col-span-2",
    from: "right",
  },
  {
    title: "Motion & 3D",
    body: "Scroll-linked reveals and WebGL where it earns the load.",
    span: "md:col-span-2",
    from: "up",
  },
  {
    title: "eCommerce",
    body: "Checkouts that read like the rest of the site — three fields, no friction.",
    span: "md:col-span-2",
    from: "up",
  },
  {
    title: "SEO & Content",
    body: "Structured, fast, and written to get cited — by Google and by AI.",
    span: "md:col-span-2",
    isNew: true,
    from: "scale",
  },
];

export function BentoServices() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal from="up">
          <p className="mono-label mb-6">What we do</p>
          <h2 className="impact-lg mb-12 max-w-[18ch] md:mb-16">
            When we say{" "}
            <span className="accent-serif" style={{ color: "var(--color-zaffre)" }}>
              full service
            </span>
            , we mean it.
          </h2>
        </Reveal>

        <div className="grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 md:grid-cols-6">
          {tiles.map((t, i) => (
            <Reveal
              key={t.title}
              from={t.from}
              delay={(i % 3) * 0.06}
              className={t.span}
            >
              <div className="bento-tile group flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="impact-md">{t.title}</h3>
                  {t.isNew && (
                    <span
                      className="tile-chip rounded-full px-2.5 py-1 text-[0.65rem] font-bold tracking-wide"
                      style={{ background: "var(--color-lime)", color: "var(--color-ink)" }}
                    >
                      NEW
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="tile-muted max-w-[36ch] text-sm leading-relaxed">
                    {t.body}
                  </p>
                  <span
                    className="tile-arrow grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg"
                    style={{ background: "var(--color-ink)", color: "var(--color-paper)" }}
                    aria-hidden
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
