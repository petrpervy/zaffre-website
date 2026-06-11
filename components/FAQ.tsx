"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { SilkField } from "./SilkField";

const faqs = [
  {
    q: "How much does a site cost?",
    a: "Projects start at $750 for a sharp one-page proof site, $1,500 for a multi-page build, and $3,000+ for the full studio treatment. We lock the final scope after a short brief review, then give you one fixed number before we start — no hourly surprises.",
  },
  {
    q: "How long does it take?",
    a: "Most sites go live in one to three weeks from kickoff. A one-page Essential build is usually about a week; the larger Premium builds with custom 3D run closer to three. We take a few projects at a time, so yours isn't waiting in a queue.",
  },
  {
    q: "Do you use templates?",
    a: "No. Every site starts from a brief and a composition — the layout is designed for your business, not pulled from a theme. You can see the whole arc in any case file.",
  },
  {
    q: "Who actually builds it?",
    a: "The person who designs and builds your site is the person you're talking to. We're small on purpose, so there's no handoff to an offshore team and no account manager between you and the work.",
  },
  {
    q: "What do I need to get started?",
    a: "A sentence about your business and the one thing you wish your site did better. We'll reply the same day with a straight take on whether we're the right studio for it.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* gpt-image-2 abstract wave/ridge texture (6-box family), dialed low so the
          accordion stays crisp; fades top/bottom into the white sections */}
      <SilkField
        image="/textures/faq-bg.jpg"
        objectPosition="center"
        baseGradient="#ffffff"
        opacity={0.5}
        mask="linear-gradient(to bottom, transparent 0%, #000 16%, #000 84%, transparent 100%)"
      />
      <div className="shell relative z-10 grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <Reveal>
            <p className="mono-label mb-6">Before you ask</p>
            <h2 className="impact-lg max-w-[10ch]">
              Common{" "}
              <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                questions
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <ul className="border-t border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="heading-md">{f.q}</span>
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-lg transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "none",
                        color: "var(--color-accent)",
                      }}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="body-lg !text-base pb-5 pr-10">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
