const items = [
  "Web Design",
  "Development",
  "Brand Systems",
  "eCommerce",
  "Motion",
  "Art Direction",
  "SEO",
  "Booking & RFQ",
  "Docs Platforms",
  "Accessibility",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-night-line py-4"
      style={{ background: "var(--color-night)" }}
    >
      <div className="marquee">
        {row.map((label, i) => (
          <div key={i} className="flex items-center gap-6 px-6 whitespace-nowrap">
            <span
              className="impact-md"
              style={{
                color: i % 3 === 1 ? "var(--color-lime)" : "var(--color-cream)",
              }}
            >
              {label}
            </span>
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: "var(--color-zaffre-bright)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
