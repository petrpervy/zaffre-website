"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Hero background: the silk texture as a gently-waving video loop (Higgsfield),
 * with the still image as poster + the reduced-motion fallback. White scrims
 * keep the headline crisp.
 */
export function HeroBg() {
  const [reduced, setReduced] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const v = vid.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    v.load();
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, [reduced]);

  return (
    <div aria-hidden className="absolute inset-0">
      {reduced ? (
        <Image src="/hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-right" />
      ) : (
        <video
          ref={vid}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover object-right"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* white scrim keeps the headline crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.78) 32%, rgba(255,255,255,0.15) 62%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to top, #fff, transparent)" }}
      />
    </div>
  );
}
