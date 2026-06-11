"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * An image that drifts vertically as it scrolls through the viewport
 * (parallax) and zooms slightly on hover. Give the wrapper a height via
 * `className` (e.g. "h-[420px]" or "aspect-[4/5]"). Vary `speed` between
 * neighbouring images so they travel at different rates — that's the
 * "images coming from different directions" feel, in motion.
 */
export function ParallaxImage({
  src,
  alt,
  speed = 50,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  /** px of vertical drift across the scroll range; negative reverses it */
  speed?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </motion.div>
    </div>
  );
}
