import { HeroComposition } from "./HeroComposition";

// Hero headline locked to the "outcome" line ("Websites that make the work sell").
// The former A/B rotation (proxy.ts + heroAb.tsx) was retired so the headline is
// consistent everywhere — the proof-sheet variant already carries this copy.
export function Hero() {
  return <HeroComposition variant="proof-sheet" />;
}
