import { Reveal } from "./Reveal";
import { SilkField } from "./SilkField";

const steps = [
  {
    n: "01",
    title: "Composition",
    body: "A brief and a big idea before a single pixel. The concept decides the layout — never a template.",
  },
  {
    n: "02",
    title: "Design",
    body: "Type chosen by hand, one accent earning its keep. We argue over the layout so you never have to.",
  },
  {
    n: "03",
    title: "Build",
    body: "Fast, accessible and yours — written in clean modern code, not dragged together in a page builder.",
  },
  {
    n: "04",
    title: "Launch & care",
    body: "We hand over the keys and stay on. The person who built it is the one who picks up when you call.",
  },
];

/**
 * "How we work" — light editorial redesign (2026-06-06, gpt-image-2 mock B):
 * mono kicker + a short heading with one Fraunces-italic accent word, then the
 * four-step process as full-width stacked rows (oversized outline index numeral,
 * title + one line, a cobalt arrow), hairline-ruled. A pale silk drifts on the
 * right. Replaces the earlier dark indigo room.
 */
export function Statement() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* full-scene fluted-ridge texture (blue glow) behind the room — the ribs sit on
          the right, open white on the left for the text; faded left + top/bottom so it
          melts into the white sections and never crowds the heading */}
      <SilkField
        image="/textures/hww-bg.jpg"
        objectPosition="right center"
        baseGradient="#ffffff"
        opacity={0.85}
        mask="radial-gradient(118% 100% at 100% 50%, #000 0%, #000 40%, transparent 84%)"
      />

      <div className="shell relative">
        {/* header */}
        <div className="max-w-[34rem]">
          <Reveal>
            <p className="mono-label mb-6" style={{ color: "rgba(10,10,15,0.45)" }}>
              How we work
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              className="font-semibold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              How we{" "}
              <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                work
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mt-6 max-w-[42ch] text-base leading-relaxed"
              style={{ color: "rgba(10,10,15,0.6)" }}
            >
              The person who designs and builds your site is the person you&apos;re
              talking to — the same one who picks up when you call. No handoffs,
              no template farm.
            </p>
          </Reveal>
        </div>

        {/* the four steps as stacked full-width rows */}
        <div role="list" className="mt-16 md:mt-20">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} from="up" role="listitem">
              <div
                className="group grid grid-cols-[auto_1fr] items-center gap-x-6 py-7 md:grid-cols-[7rem_1fr_auto] md:gap-x-10 md:py-9"
                style={{ borderTop: "1px solid rgba(10,10,15,0.1)" }}
              >
                {/* oversized outline index numeral */}
                <span
                  aria-hidden
                  className="font-semibold leading-none transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.6rem, 5vw, 4.25rem)",
                    letterSpacing: "-0.04em",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(10,10,15,0.22)",
                  }}
                >
                  {s.n}
                </span>

                {/* title + one line */}
                <div className="col-start-2 md:col-start-2">
                  <h3 className="heading-md" style={{ color: "#0a0a0f" }}>
                    {s.title}
                  </h3>
                  <p
                    className="mt-1.5 max-w-[52ch] text-sm leading-relaxed md:text-[0.95rem]"
                    style={{ color: "rgba(10,10,15,0.58)" }}
                  >
                    {s.body}
                  </p>
                </div>

                {/* cobalt arrow */}
                <span
                  aria-hidden
                  className="col-span-2 mt-3 text-xl transition-transform duration-300 group-hover:translate-x-1.5 md:col-span-1 md:col-start-3 md:mt-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
          <div
            aria-hidden
            style={{ borderTop: "1px solid rgba(10,10,15,0.1)" }}
          />
        </div>
      </div>
    </section>
  );
}
