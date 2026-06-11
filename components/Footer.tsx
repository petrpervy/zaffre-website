import Link from "next/link";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { SilkField } from "./SilkField";
import { TrackedLink } from "./TrackedLink";

const briefMailto = "mailto:zaffrestudios@gmail.com?subject=Website%20brief%20for%20Zaffre";

const linkCols = [
  {
    head: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/studio", label: "About" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    head: "Connect",
    links: [
      { href: briefMailto, label: "Email" },
      { href: "/contact", label: "Start a project" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="relative overflow-hidden">
        {/* silk texture behind the closing CTA — the hero's sibling (gpt-image-2 silk-drape) */}
        <SilkField
          image="/textures/silk-drape.jpg"
          objectPosition="center"
          opacity={0.6}
          baseGradient="#ffffff"
          mask="linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)"
        />
        {/* white scrim keeps the centered headline crisp over the silk */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(closest-side at 50% 50%, rgba(255,255,255,0.9), rgba(255,255,255,0.4) 78%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(47,107,255,0.14), rgba(47,107,255,0) 70%)",
          }}
        />
        <div className="shell relative py-24 text-center md:py-32">
          <Reveal>
            <p className="mono-label mb-5">Start a conversation</p>
            <h2 className="display-hero mx-auto max-w-[16ch]">
              Let&apos;s build the{" "}
              <span className="accent-serif" style={{ color: "var(--color-accent)" }}>
                next
              </span>{" "}
              one.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              <MagneticButton
                href={briefMailto}
                className="btn btn-primary inline-block"
                eventName="email_brief_click"
                eventProperties={{ location: "footer" }}
              >
                Email the brief
              </MagneticButton>
              <TrackedLink
                href={briefMailto}
                eventName="email_address_click"
                eventProperties={{ location: "footer" }}
                className="link-grow text-sm font-medium"
              >
                zaffrestudios@gmail.com
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* link rows */}
      <div className="shell grid gap-10 border-t border-line py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-[1.15rem] font-semibold tracking-tight">
            zaffre<span style={{ color: "var(--color-accent)" }}>.</span>
          </span>
          <p className="body-lg mt-4 max-w-[32ch] !text-base">
            Proof-first websites for businesses with real work to show.
          </p>
        </div>
        {linkCols.map((col) => (
          <div key={col.head}>
            <p className="mono-label mb-4">{col.head}</p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="link-grow text-sm text-ink-soft hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell flex flex-col items-start justify-between gap-2 border-t border-line py-6 sm:flex-row sm:items-center">
        <p className="mono-label">© {new Date().getFullYear()} Sol Seven Studios LLC</p>
        <p className="mono-label">Built in Rochester, NY</p>
      </div>
    </footer>
  );
}
