"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A small dark dot with a soft sky-blue glow that lags the pointer on a
 * spring. Grows into a ring over anything interactive. Hidden on touch /
 * reduced-motion. This is the page's "host" — the magnetic feel comes from
 * MagneticButton; the cursor is the visible counterpart.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"idle" | "hover" | "view">("idle");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;
    const enableRaf = requestAnimationFrame(() => setEnabled(true));

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor]",
      ) as HTMLElement | null;
      if (!el) setMode("idle");
      else if (el.dataset.cursor === "view") setMode("view");
      else setMode("hover");
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(enableRaf);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  const view = mode === "view";
  const hover = mode === "hover";
  const size = view ? 72 : hover ? 38 : 10;

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] grid place-items-center rounded-full transition-[width,height,background-color,opacity] duration-300 ease-out"
      style={{
        width: size,
        height: size,
        background: view
          ? "var(--color-accent)"
          : hover
            ? "rgba(47,107,255,0.14)"
            : "#0a0a0f",
        border: hover ? "1px solid rgba(47,107,255,0.6)" : "none",
        boxShadow: view
          ? "0 10px 30px -8px rgba(47,107,255,0.6)"
          : hover
            ? "none"
            : "0 0 16px 3px rgba(47,107,255,0.55)",
      }}
    >
      {view && (
        <span className="text-[0.7rem] font-medium tracking-tight text-white">
          View
        </span>
      )}
    </div>
  );
}
