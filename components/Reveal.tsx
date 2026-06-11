"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type From = "up" | "down" | "left" | "right" | "scale";

const offsets: Record<From, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: -48 },
  right: { x: 48 },
  scale: { scale: 0.92, y: 16 },
};

/**
 * Scroll-triggered reveal driven by our own IntersectionObserver — more
 * reliable than framer's whileInView, which intermittently failed to fire for
 * above-the-fold elements under Lenis. Honours reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  duration = 0.7,
  className,
  role,
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  duration?: number;
  className?: string;
  role?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
    // Scroll/rect based — reliable everywhere (IntersectionObserver can be
    // delayed or skipped in some renderers, leaving content stuck hidden).
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        requestAnimationFrame(() => setShown(true));
        cleanup();
        return true;
      }
      return false;
    };
    const onScroll = () => check();
    const cleanup = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    if (check()) return;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return cleanup;
  }, []);

  const base = offsets[from];
  const initial = { opacity: 0, ...base };
  const animate = shown ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial;

  return (
    <motion.div
      ref={ref}
      role={role}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
