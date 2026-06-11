import Image from "next/image";
import type { ReactNode } from "react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";

export type HeroVariant = "proof-sheet" | "glass-signal" | "live-stack";

const briefMailto =
  "mailto:zaffrestudios@gmail.com?subject=Website%20brief%20for%20Zaffre";

const variants = {
  "proof-sheet": {
    label: "Option A",
    image: "/hero-options/proof-sheet.png",
    headline: (
      <>
        Websites that make the{" "}
        <span className="accent-serif text-[var(--color-accent)]">work sell</span>
      </>
    ),
    body:
      "We turn real businesses into proof sheets: the product, process, catalogue, stage, or story made visible online.",
  },
  "glass-signal": {
    label: "Option B",
    image: "/hero-options/glass-signal.png",
    headline: (
      <>
        Make the first three seconds feel{" "}
        <span className="accent-serif text-[var(--color-accent)]">expensive</span>
      </>
    ),
    body:
      "A quieter, more abstract hero for prospects who buy taste first and inspect the work second.",
  },
  "live-stack": {
    label: "Option C",
    image: "/hero.jpg",
    headline: (
      <>
        Your business already has the{" "}
        <span className="accent-serif text-[var(--color-accent)]">world</span>
      </>
    ),
    body:
      "We do not invent a story for you. We find the work, edit it, and build the page it deserves.",
  },
} satisfies Record<
  HeroVariant,
  {
    label: string;
    image: string;
    headline: ReactNode;
    body: string;
  }
>;

export function HeroComposition({
  variant = "proof-sheet",
  lab = false,
}: {
  variant?: HeroVariant;
  lab?: boolean;
}) {
  const v = variants[variant];
  const isLiveStack = variant === "live-stack";

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-white" />
      <Image
        src={v.image}
        alt=""
        fill
        priority={!lab}
        sizes="100vw"
        className={`-z-10 object-cover ${
          isLiveStack ? "object-right opacity-55" : "object-center opacity-90"
        }`}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 36%, rgba(255,255,255,0.62) 58%, rgba(255,255,255,0.18) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-56 md:h-72"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.72) 54%, #fff 100%)",
        }}
      />

      <div className="shell min-h-[min(720px,82vh)] pt-28 pb-36 md:pt-36 md:pb-44">
        <div className="max-w-4xl">
          <Reveal from="up">
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              {lab ? <span className="mono-label text-[var(--color-accent)]">{v.label}</span> : null}
              <span className="mono-label">Proof-first websites</span>
              <span className="h-1 w-1 rounded-full bg-ink-faint" />
              <span className="mono-label">Rochester, NY</span>
            </div>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <h1 className="display-hero max-w-[11.5ch]">{v.headline}</h1>
          </Reveal>

          <Reveal from="up" delay={0.12}>
            <p className="body-lg mt-7 max-w-[42ch]">{v.body}</p>
          </Reveal>

          <Reveal from="up" delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <MagneticButton
                href="/work"
                className="btn btn-primary inline-block"
                eventName="proof_cta_click"
                eventProperties={{ location: lab ? `hero_lab_${variant}` : "hero" }}
              >
                See the proof
              </MagneticButton>
              <TrackedLink
                href={briefMailto}
                eventName="email_brief_click"
                eventProperties={{ location: lab ? `hero_lab_${variant}` : "hero" }}
                className="link-grow text-sm font-medium text-ink"
              >
                Email a brief
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
