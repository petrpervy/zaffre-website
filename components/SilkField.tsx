"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Warp } from "@paper-design/shaders-react";

/**
 * A silk-gradient texture field carrying the hero's vibe into other sections.
 * Two modes:
 *   - `image` set → renders that still (Gleb's gpt-image-2 silk renders) as the
 *     texture. Zero WebGL — cheap, and what we use in production.
 *   - no `image` → a live @paper-design/shaders Warp field (kept for future use).
 * A CSS `baseGradient` always sits underneath as the fallback colour. The shader
 * path mounts on view and freezes (speed 0) under reduced-motion.
 */
export function SilkField({
  image,
  objectPosition = "center",
  colors = ["#dbe6ff", "#a9c4ff", "#eef3ff", "#cdd9ff"],
  baseGradient = "radial-gradient(120% 90% at 80% 10%, #eaf0ff 0%, #f5f6f8 55%, #f5f6f8 100%)",
  speed = 0.34,
  scale = 1.25,
  rotation = 0,
  opacity = 0.6,
  mask = "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%)",
  className = "",
}: {
  image?: string;
  objectPosition?: string;
  colors?: string[];
  baseGradient?: string;
  speed?: number;
  scale?: number;
  rotation?: number;
  opacity?: number;
  mask?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Always melt the texture at the top + bottom edges (intersected with the caller's
  // positioning mask) so every textured section blends seamlessly into its white
  // neighbours — no hard seam at any section boundary.
  const edgeFade =
    "linear-gradient(to bottom, transparent 0%, #000 7%, #000 93%, transparent 100%)";
  const composed = `${mask}, ${edgeFade}`;
  const maskStyle = {
    WebkitMaskImage: composed,
    WebkitMaskComposite: "source-in",
    maskImage: composed,
    maskComposite: "intersect",
  } as const;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ background: baseGradient }}
    >
      {image && (
        <div
          className="absolute inset-0"
          style={{ opacity, ...maskStyle }}
        >
          <Image
            src={image}
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
      )}
      {!image && inView && (
        <div
          className="absolute inset-0"
          style={{ opacity, ...maskStyle }}
        >
          <Warp
            style={{ width: "100%", height: "100%" }}
            colors={colors}
            proportion={0.5}
            softness={1}
            distortion={0.2}
            swirl={0.55}
            swirlIterations={8}
            speed={reduced ? 0 : speed}
            scale={scale}
            rotation={rotation}
            shape="stripes"
            maxPixelCount={1920 * 1080}
          />
        </div>
      )}
    </div>
  );
}
