import Link from "next/link";
import { Reveal } from "./Reveal";

const stats = [
  { value: "6", label: "Case files shipped" },
  { value: "3–5", label: "Weeks, kickoff to launch" },
  { value: "100%", label: "Designed & built in-house" },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="scroll-mt-20 border-y border-night-line py-20 md:py-28"
      style={{ background: "var(--color-zaffre)", color: "var(--color-cream)" }}
    >
      <div className="shell grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <Reveal>
            <p className="mono-label mb-6 !text-cream/70">The studio</p>
            <h2 className="impact-lg max-w-[14ch]">
              Small on{" "}
              <span className="accent-serif" style={{ color: "var(--color-lime)" }}>
                purpose
              </span>
              .
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <Reveal delay={0.08}>
            <p className="body-lg !text-cream/85">
              The person who designs and builds your site is the person you&apos;re
              talking to — the same one who picks up when you call. We take a few
              projects at a time so each gets the typography chosen by hand and
              the layout argued over.
            </p>
            <Link
              href="/studio"
              className="link-grow mt-6 inline-block text-sm font-medium text-cream"
            >
              Meet the studio →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="shell mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/15 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div
              className="flex h-full flex-col gap-2 p-7"
              style={{ background: "var(--color-zaffre)" }}
            >
              <span className="display-xl" style={{ color: "var(--color-lime)" }}>
                {s.value}
              </span>
              <span className="text-sm text-cream/75">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
