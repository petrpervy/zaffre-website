"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/** Fires one `hero_impression` event per view — the denominator for the A/B. */
export function HeroImpression({ variant }: { variant: string }) {
  useEffect(() => {
    track("hero_impression", { variant });
  }, [variant]);
  return null;
}
