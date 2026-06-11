"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ParticleScene = dynamic(() => import("./ParticleScene"), { ssr: false });

const HOLD = 1500; // brief studio intro without blocking first-read pages
const FADE = 500;

/**
 * Homepage intro: ~9,000 particles assemble the ZAFFRE wordmark on black, then
 * the overlay fades to reveal the light site. Shows once per session; skipped
 * entirely on reduced-motion. Mounts client-only (WebGL), so first-time it pops
 * in within a frame rather than flashing the page.
 */
export function Preloader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (pathname === "/" || pathname === "/hero-lab") return;
    if (sessionStorage.getItem("zaffre-intro")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("zaffre-intro", "1");
      return;
    }
    const showRaf = requestAnimationFrame(() => setShow(true));
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setLeaving(true), HOLD);
    const t2 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("zaffre-intro", "1");
    }, HOLD + FADE);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(showRaf);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#08080c] transition-opacity duration-700 ease-out"
      style={{ opacity: leaving ? 0 : 1 }}
    >
      <ParticleScene />

      {/* faint grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center px-8 pb-12 text-center">
        <p
          className="accent-serif text-[1.25rem] text-white/85"
          style={{ animation: "introrise 0.8s 0.6s both" }}
        >
          A studio, assembled.
        </p>
        <p
          className="mt-2 text-[0.8rem] text-white/45"
          style={{ animation: "introrise 0.8s 0.75s both" }}
        >
          Drag your cursor through the name — it scatters, then heals.
        </p>
      </div>

      <style>{`
        @keyframes introrise {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
