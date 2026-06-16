import type { ReactNode } from "react";

/**
 * Hero headline A/B test. Three distinct angles, same proof-sheet visual.
 * Bucketing is sticky per-visitor via the `hero_variant` cookie set in proxy.ts.
 * Conversion = `proof_cta_click` / `email_brief_click` (tagged with variant)
 * over `hero_impression` (fired once per view), read in Vercel Analytics.
 */
export type HeroAbId = "A" | "B" | "C";

export const HERO_AB_IDS: HeroAbId[] = ["A", "B", "C"];

type HeroAbCopy = {
  id: HeroAbId;
  angle: string;
  headline: ReactNode;
  body: string;
};

const accent = (text: string) => (
  <span className="accent-serif text-[var(--color-accent)]">{text}</span>
);

export const HERO_AB: Record<HeroAbId, HeroAbCopy> = {
  A: {
    id: "A",
    angle: "outcome",
    headline: <>Websites that make the {accent("work sell")}</>,
    body:
      "We turn real businesses into proof sheets: the product, process, catalogue, stage, or story made visible online.",
  },
  B: {
    id: "B",
    angle: "credibility",
    headline: <>We make your business look as {accent("good")} as it is</>,
    body:
      "Most small businesses look better in person than online. We close that gap — the real work, made visible.",
  },
  C: {
    id: "C",
    angle: "personal",
    headline: (
      <>
        A {accent("real")} website, built by the person who answers the phone
      </>
    ),
    body:
      "No account managers, no handoffs. The person who designs and builds your site is the one who picks up when you call.",
  },
};

export function pickHeroAb(id: string | null | undefined): HeroAbCopy {
  if (id === "A" || id === "B" || id === "C") return HERO_AB[id];
  return HERO_AB.A;
}
