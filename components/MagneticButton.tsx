"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { track } from "@vercel/analytics";

/**
 * A link that eases toward the cursor when the pointer is near — the
 * "magnetic" pull from the mockup. Strength is gentle so it reaches, not
 * jumps. Disabled feel under reduced-motion (transform just stays at 0).
 */
export function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.4,
  eventName,
  eventProperties,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  eventName?: string;
  eventProperties?: Record<string, string | number | boolean>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onClick={() => {
        if (eventName) track(eventName, eventProperties);
      }}
      className={className}
      style={{ transition: "transform 0.35s var(--ease-out)" }}
    >
      {children}
    </Link>
  );
}
