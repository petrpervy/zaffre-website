import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Composition",
    body: "Before a pixel, a brief and a big idea. The metaphor decides the layout — not the other way around.",
  },
  {
    n: "02",
    title: "Wireframe",
    body: "Structure in grayscale. We get the hierarchy honest before color can hide a weak layout.",
  },
  {
    n: "03",
    title: "Mockup",
    body: "Type chosen by hand, palette set, one accent earning its keep. The site starts to look like itself.",
  },
  {
    n: "04",
    title: "Build & ship",
    body: "Fast, accessible, yours. We hand over the keys — and you can see the whole arc in any case file.",
  },
];

export function ProcessStrip() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="mono-label mb-6">How a Zaffre site gets made</p>
          <h2 className="display-xl mb-14 max-w-[18ch]">
            Every project walks the same four steps. We just don&apos;t hide them.
          </h2>
        </Reveal>

        <div
          role="list"
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} role="listitem">
              <div
                className="flex h-full flex-col gap-4 p-7"
                style={{ background: "var(--color-paper-raised)" }}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: "var(--color-zaffre)" }}
                >
                  {s.n}
                </span>
                <span className="heading-md">{s.title}</span>
                <p className="text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
