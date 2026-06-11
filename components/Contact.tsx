import { Reveal } from "./Reveal";
import { TrackedLink } from "./TrackedLink";

const briefPrompts = [
  "Your current website URL",
  "What the business sells",
  "What the site should prove or do better",
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="shell">
        <Reveal>
          <p className="mono-label mb-6">Start a project</p>
          <h1 className="display-hero max-w-[15ch]">
            Tell me what your site should do.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="body-lg mt-8 max-w-[42ch]">
            Send your current site and the thing it fails to show. I&apos;ll reply
            with a straight read on whether we&apos;re the right studio for it.
          </p>
        </Reveal>

        <Reveal delay={0.13}>
          <ul className="mt-8 grid max-w-[46rem] gap-3 sm:grid-cols-3">
            {briefPrompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-2xl border border-line bg-white/70 px-5 py-4 text-sm leading-snug text-ink-soft"
              >
                {prompt}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <TrackedLink
              href="mailto:zaffrestudios@gmail.com?subject=Website%20brief%20for%20Zaffre"
              eventName="email_brief_click"
              eventProperties={{ location: "contact_page" }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{ background: "var(--color-zaffre)" }}
            >
              Email the brief →
            </TrackedLink>
            <TrackedLink
              href="mailto:zaffrestudios@gmail.com"
              eventName="email_address_click"
              eventProperties={{ location: "contact_page" }}
              className="link-grow text-base"
            >
              zaffrestudios@gmail.com
            </TrackedLink>
          </div>
          <p className="mono-label mt-8">Replies within one business day.</p>
        </Reveal>
      </div>
    </section>
  );
}
