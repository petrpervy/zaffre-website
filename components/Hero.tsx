import { headers } from "next/headers";
import { HeroComposition } from "./HeroComposition";
import { pickHeroAb } from "@/lib/heroAb";

export async function Hero() {
  const variant = pickHeroAb((await headers()).get("x-hero-variant"));
  return (
    <HeroComposition
      variant="proof-sheet"
      headline={variant.headline}
      body={variant.body}
      abVariant={variant.id}
    />
  );
}
