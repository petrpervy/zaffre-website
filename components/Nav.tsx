import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav className="shell flex h-[68px] items-center justify-between gap-6">
        <Link
          href="/"
          className="text-[1.15rem] font-semibold tracking-tight"
          aria-label="Zaffre, home"
        >
          zaffre<span style={{ color: "var(--color-accent)" }}>.</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-grow text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              {i === 0 && (
                <span
                  className="ml-1 inline-block h-1 w-1 translate-y-[-3px] rounded-full align-middle"
                  style={{ background: "var(--color-accent)" }}
                />
              )}
            </Link>
          ))}
        </div>

        <TrackedLink
          href="/contact"
          eventName="start_cta_click"
          eventProperties={{ location: "nav" }}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
        >
          Start
        </TrackedLink>
      </nav>
    </header>
  );
}
