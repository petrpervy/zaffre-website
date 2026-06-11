import Image from "next/image";
import { Reveal } from "./Reveal";

// Dummy showcase imagery (Unsplash) — swap for real project screens before send.
const rowA = [
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=720&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=720&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=720&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=720&q=80",
  "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=720&q=80",
];

const rowB = [
  "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=720&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=720&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=720&q=80",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=720&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=720&q=80",
];

function Card({ src }: { src: string }) {
  return (
    <div className="group relative mr-5 h-44 w-72 shrink-0 overflow-hidden rounded-2xl border border-night-line sm:h-56 sm:w-96">
      <Image
        src={src}
        alt=""
        fill
        sizes="384px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  );
}

export function ShowcaseStrip() {
  return (
    <section
      className="overflow-hidden border-y border-night-line py-16 md:py-20"
      style={{ background: "var(--color-night)", color: "var(--color-cream)" }}
    >
      <div className="shell mb-10">
        <Reveal>
          <p className="mono-label mb-4 !text-cream/60">Recent screens</p>
          <h2 className="impact-md max-w-[20ch]">
            A look at what{" "}
            <span className="accent-serif" style={{ color: "var(--color-lime)" }}>
              leaves
            </span>{" "}
            the studio.
          </h2>
        </Reveal>
      </div>

      {/* row one — drifts left */}
      <div className="flex">
        <div className="marquee">
          {[...rowA, ...rowA].map((src, i) => (
            <Card key={`a-${i}`} src={src} />
          ))}
        </div>
      </div>

      {/* row two — drifts right (opposite direction) */}
      <div className="mt-5 flex">
        <div className="marquee marquee-slow" style={{ animationDirection: "reverse" }}>
          {[...rowB, ...rowB].map((src, i) => (
            <Card key={`b-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
