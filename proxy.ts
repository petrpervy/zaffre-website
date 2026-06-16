import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Kept in sync with HERO_AB in lib/heroAb.tsx (inlined to keep the edge bundle JSX-free).
const HERO_AB_IDS = ["A", "B", "C"] as const;
const COOKIE = "hero_variant";
const HEADER = "x-hero-variant";
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days

/**
 * Sticky hero A/B bucketing. Assigns a variant on first homepage visit and
 * forwards it both as a request header (so the server component can render it
 * on the very first paint — no hydration flash) and a cookie (so the visitor
 * keeps the same variant on return, keeping the measurement clean).
 */
export function proxy(request: NextRequest) {
  const existing = request.cookies.get(COOKIE)?.value;
  const isValid = existing != null && HERO_AB_IDS.includes(existing as never);
  const variant = isValid
    ? existing!
    : HERO_AB_IDS[Math.floor(Math.random() * HERO_AB_IDS.length)];

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(HEADER, variant);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  if (!isValid) {
    response.cookies.set(COOKIE, variant, {
      maxAge: MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: "/",
};
