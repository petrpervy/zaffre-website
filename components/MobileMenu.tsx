"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 flex h-10 w-10 items-center justify-center"
      >
        <span className="relative block h-3.5 w-6" aria-hidden>
          <span
            className="absolute left-0 block h-[2px] w-6 rounded-full bg-ink transition-all duration-300"
            style={{ top: open ? "6px" : "0px", transform: open ? "rotate(45deg)" : "none" }}
          />
          <span
            className="absolute left-0 top-[6px] block h-[2px] w-6 rounded-full bg-ink transition-opacity duration-200"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute left-0 block h-[2px] w-6 rounded-full bg-ink transition-all duration-300"
            style={{ top: open ? "6px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
          />
        </span>
      </button>

      {/* sheet */}
      <div
        className="fixed inset-x-0 top-[68px] z-40 origin-top border-b border-line bg-bg/95 backdrop-blur-md transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav className="shell flex flex-col gap-1 py-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-2xl font-semibold tracking-tight text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <TrackedLink
            href="/contact"
            eventName="start_cta_click"
            eventProperties={{ location: "mobile_nav" }}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 justify-center text-base"
          >
            Start a project
          </TrackedLink>
        </nav>
      </div>
    </div>
  );
}
