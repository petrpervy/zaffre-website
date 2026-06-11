/* eslint-disable @next/next/no-img-element */
import { Reveal } from "./Reveal";

/* ── Per-step visuals — replicated 1:1 from the approved gpt-image-2 mockup
   (mockups/services-walkthrough-revamp-high.png). The mockup's visuals are
   WIDE + SHORT (~2.4:1) and the whole page is compact — that keeps the
   composition tight instead of spreading into empty white. Soft-shadowed
   white panels + two frameless visuals (radar, globe). Image fills:
   services-design-silk.jpg (03) and services-launch-globe.jpg (06).        */

const STAGE = "aspect-[12/5]"; // wide + short, matches the mockup
const PANEL_SHADOW =
  "0 1px 3px rgba(16,24,40,.04), 0 22px 48px -24px rgba(16,24,40,.20)";
const CARD_SHADOW =
  "0 2px 8px rgba(16,24,40,.06), 0 24px 56px -20px rgba(16,24,40,.26)";

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ${className}`}
      style={{ background: "#fff", border: "1px solid var(--color-line)", boxShadow: PANEL_SHADOW }}
    >
      {children}
    </div>
  );
}

// 01 — Positioning: frameless radar, concentric rings + four positioning terms.
function VisualPositioning() {
  const labels = [
    { t: "AUDIENCE", x: 300, y: 24, anchor: "middle" as const },
    { t: "MARKET", x: 36, y: 129, anchor: "start" as const },
    { t: "POSITION", x: 564, y: 129, anchor: "end" as const },
    { t: "DIFFERENCE", x: 300, y: 236, anchor: "middle" as const },
  ];
  return (
    <div className={`relative ${STAGE} w-full overflow-hidden`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 150% at 96% 6%, rgba(47,107,255,.10) 0%, rgba(47,107,255,.04) 36%, transparent 66%)",
        }}
      />
      <svg viewBox="0 0 600 250" className="absolute inset-0 h-full w-full">
        {[32, 56, 80].map((r) => (
          <circle key={r} cx="300" cy="125" r={r} fill="none" stroke="var(--color-line-strong)" strokeWidth="1" opacity={r === 32 ? 0.9 : r === 56 ? 0.6 : 0.4} />
        ))}
        <circle cx="300" cy="125" r="12" fill="var(--color-accent)" opacity="0.12" />
        <circle cx="300" cy="125" r="6" fill="var(--color-accent)" />
        {labels.map((l) => (
          <text key={l.t} x={l.x} y={l.y} textAnchor={l.anchor} fontSize="11" letterSpacing="1.5" fontFamily="var(--font-mono)" fill="var(--color-ink-faint)">
            {l.t}
          </text>
        ))}
      </svg>
    </div>
  );
}

// 02 — Composition: a real page wireframe (avatar + nav, text + image-X, cards).
function VisualComposition() {
  return (
    <Panel className={STAGE}>
      <div className="absolute inset-0 flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="h-5 w-5 rounded-full" style={{ background: "var(--color-line-strong)" }} />
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-[3px] w-6 rounded-full" style={{ background: "var(--color-line-strong)" }} />
            ))}
          </div>
        </div>
        <div className="flex flex-1 gap-5">
          <div className="flex flex-1 flex-col justify-center gap-2.5">
            {["85%", "68%", "78%", "52%"].map((w, i) => (
              <span key={i} className="h-[5px] rounded-full" style={{ width: w, background: "var(--color-line-strong)" }} />
            ))}
          </div>
          <div className="relative flex-1 self-stretch rounded-md" style={{ border: "1px solid var(--color-line-strong)" }}>
            <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <line x1="0" y1="0" x2="100" y2="100" stroke="var(--color-line-strong)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="var(--color-line-strong)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-7 flex-1 rounded-md" style={{ background: "var(--color-bg-soft)" }} />
          ))}
        </div>
      </div>
    </Panel>
  );
}

// 03 — Design: type specimen + palette on the left, blue silk fill on the right.
function VisualDesign() {
  const swatches = [
    { c: "var(--color-accent)" },
    { c: "#aebef0" },
    { c: "#d6def6" },
    { c: "transparent", ring: true },
  ];
  return (
    <Panel className={STAGE}>
      <div className="absolute inset-0 grid grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col justify-between p-5">
          <span className="leading-[0.8]" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem,6vw,4rem)", color: "var(--color-ink)" }}>
            Ag
          </span>
          <div className="flex items-center gap-2.5">
            {swatches.map((s, i) => (
              <span key={i} className="h-[16px] w-[16px] rounded-full" style={{ background: s.c, border: s.ring ? "1.5px solid var(--color-line-strong)" : "none" }} />
            ))}
          </div>
        </div>
        <img src="/textures/services-design-silk.jpg" alt="" className="h-full w-full object-cover" />
      </div>
    </Panel>
  );
}

// 04 — Development: editor window — dots, address pill, cobalt dot, syntax code.
function VisualDevelopment() {
  const tag = { color: "#d97a2a" } as const;
  const val = { color: "var(--color-accent)" } as const;
  const txt = { color: "var(--color-ink-soft)" } as const;
  const lines: React.ReactNode[] = [
    <span key="1"><span style={tag}>{`<section `}</span><span style={txt}>class=</span><span style={val}>{`"hero"`}</span><span style={tag}>{`>`}</span></span>,
    <span key="2">{"  "}<span style={tag}>{`<h1>`}</span><span style={txt}>Built to perform.</span><span style={tag}>{`</h1>`}</span></span>,
    <span key="3">{"  "}<span style={tag}>{`<p>`}</span><span style={txt}>Clean code, fast by default.</span><span style={tag}>{`</p>`}</span></span>,
    <span key="4"><span style={tag}>{`</section>`}</span></span>,
  ];
  return (
    <Panel className={STAGE}>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-line-strong)" }} />
            ))}
          </span>
          <span className="ml-3 hidden h-4 flex-1 rounded-full sm:block" style={{ background: "var(--color-bg-soft)" }} />
          <span className="ml-2 h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-accent)" }} />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 px-6">
          {lines.map((l, i) => (
            <div key={i} className="font-mono text-[11px] leading-relaxed md:text-[12px]">
              <span className="whitespace-pre">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

// 05 — Search & conversion: grid-paper chart w/ smooth cobalt curve + node, and
// a floating stat card (sparkline) overlapping its left.
function VisualConversion() {
  const curve = "M14 150 C 64 150, 104 70, 158 72 S 250 138, 300 120 S 372 70, 416 84 S 462 100, 474 96";
  return (
    <div className="relative w-full">
      <Panel className={STAGE}>
        <div className="absolute right-4 top-3 flex gap-2.5 font-mono text-[12px]" style={{ color: "var(--color-ink-faint)" }} aria-hidden>
          <span>→</span>
          <span>⤢</span>
        </div>
        <svg viewBox="0 0 488 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {[50, 100, 150].map((y) => (
            <line key={"h" + y} x1="0" y1={y} x2="488" y2={y} stroke="var(--color-line)" strokeWidth="1" />
          ))}
          {[80, 160, 240, 320, 400].map((x) => (
            <line key={"v" + x} x1={x} y1="0" x2={x} y2="200" stroke="var(--color-line)" strokeWidth="1" />
          ))}
          <path d={curve} fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="300" cy="120" r="9" fill="var(--color-accent)" opacity="0.14" />
          <circle cx="300" cy="120" r="5" fill="var(--color-accent)" stroke="#fff" strokeWidth="2.5" />
        </svg>
      </Panel>
      <div className="absolute left-3 top-1/2 w-[42%] max-w-[200px] -translate-y-1/2 rounded-[13px] p-3.5" style={{ background: "#fff", boxShadow: CARD_SHADOW }}>
        <span className="font-mono text-[10px] tracking-wide" style={{ color: "var(--color-ink-muted)" }}>Organic traffic</span>
        <p className="mt-1 text-[1.7rem] font-semibold leading-none tracking-tight" style={{ color: "var(--color-ink)" }}>+47%</p>
        <svg viewBox="0 0 180 40" className="mt-2.5 h-7 w-full" preserveAspectRatio="none">
          <path d="M2 30 C 22 30, 30 18, 48 20 S 78 8, 96 16 S 128 26, 146 14 S 168 8, 178 12" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        </svg>
      </div>
    </div>
  );
}

// 06 — Launch & care: frameless globe (glow baked into texture) + floating card.
function VisualLaunch() {
  return (
    <div className={`relative ${STAGE} w-full overflow-hidden`}>
      <img src="/textures/services-launch-globe.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-left" />
      <div className="absolute right-4 top-1/2 w-[46%] min-w-[150px] max-w-[210px] -translate-y-1/2 rounded-[13px] p-3.5" style={{ background: "#fff", boxShadow: CARD_SHADOW }}>
        <p className="text-[0.9rem] font-semibold" style={{ color: "var(--color-ink)" }}>Site status</p>
        <p className="mt-2 flex items-center gap-2.5 text-[0.78rem]" style={{ color: "var(--color-ink-muted)" }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-accent)" }} />
          All systems go
        </p>
      </div>
    </div>
  );
}

type Step = { n: string; lead: string; accent: string; body: string; visual: React.ReactNode };

const steps: Step[] = [
  { n: "01", lead: "Positio", accent: "ning", body: "We define the product, the place, the audience, and the story that sets you apart.", visual: <VisualPositioning /> },
  { n: "02", lead: "Composi", accent: "tion", body: "We organise content and structure so the right things land in the right order.", visual: <VisualComposition /> },
  { n: "03", lead: "Desi", accent: "gn", body: "We shape the experience with type, texture, motion, and imagery that moves people to act.", visual: <VisualDesign /> },
  { n: "04", lead: "Develop", accent: "ment", body: "We build fast, accessible websites in clean code, built to scale.", visual: <VisualDevelopment /> },
  { n: "05", lead: "Search & ", accent: "conversion", body: "We make it easy to find you, and easy to say yes.", visual: <VisualConversion /> },
  { n: "06", lead: "Launch & ", accent: "care", body: "We launch with precision and stay close with ongoing support.", visual: <VisualLaunch /> },
];

export function ProcessWalkthrough() {
  return (
    <section id="process" className="scroll-mt-20 py-8 md:py-10">
      <div className="shell">
        <p className="mono-label hidden md:block" style={{ color: "var(--color-ink-faint)" }}>Start</p>
        <div className="relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04} from="up">
              <article className="grid grid-cols-1 items-center gap-6 border-t border-line py-8 first:border-t-0 md:grid-cols-[2.5rem_minmax(0,4.3fr)_minmax(0,6.7fr)] md:gap-10 md:py-9">
                {/* through-line rail + node */}
                <div className="relative hidden self-stretch border-l border-line md:block">
                  <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full" style={{ background: "var(--color-accent)", boxShadow: "0 0 0 4px var(--color-bg)" }} />
                </div>

                {/* numeral + copy */}
                <div>
                  <span className="block font-semibold leading-none" style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", color: "#c3c8d2", letterSpacing: "-0.03em" }}>
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-[clamp(1.6rem,2.9vw,2.15rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                    {s.lead}
                    <span className="accent-serif" style={{ color: "var(--color-accent)" }}>{s.accent}</span>
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[14.5px] leading-[1.6] text-ink-muted">{s.body}</p>
                </div>

                {/* visual */}
                <div>{s.visual}</div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mono-label hidden md:block" style={{ color: "var(--color-ink-faint)" }}>Launch</p>
      </div>
    </section>
  );
}
