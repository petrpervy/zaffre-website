import Link from "next/link";

type ClientPreviewProps = {
  businessName: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
};

export function ClientPreview({
  businessName,
  location,
  imageSrc,
  imageAlt,
}: ClientPreviewProps) {
  return (
    <main className="min-h-screen bg-[#faf6f2] text-[#1a1a1a]">
      <div className="mx-auto max-w-4xl px-5 pb-20 pt-8">
        <header className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.04em]"
            aria-label="Zaffre, home"
          >
            ZAFFRE
          </Link>
          <span className="text-[13px] text-[#888]">{location}</span>
        </header>

        <h1 className="mb-1 text-[28px] font-semibold">{businessName}</h1>
        <p className="mb-7 text-[16px] text-[#555]">
          Here&apos;s a mockup of what your site could look like.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="block w-full rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        />

        <div className="mt-10 grid gap-3">
          <div className="rounded-[10px] border border-[#e6ddd3] bg-white px-[18px] py-4">
            <b className="mb-0.5 block text-[15px]">$149</b>
            <span className="text-[14px] text-[#666]">
              Landing page with your own photos and branding
            </span>
          </div>
          <div className="rounded-[10px] border border-[#e6ddd3] bg-white px-[18px] py-4">
            <b className="mb-0.5 block text-[15px]">$259</b>
            <span className="text-[14px] text-[#666]">
              Landing page + a real ordering system, no more digging through
              DMs
            </span>
          </div>
          <div className="rounded-[10px] border border-[#e6ddd3] bg-white px-[18px] py-4">
            <b className="mb-0.5 block text-[15px]">$499</b>
            <span className="text-[14px] text-[#666]">
              All of that, plus booking and showing up on Google Search
            </span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://zaffre.website"
            className="inline-block rounded-lg bg-[#1a1a1a] px-7 py-3.5 text-[15px] font-semibold text-white"
          >
            See more of our work at zaffre.website
          </a>
        </div>

        <footer className="mt-10 text-center text-[13px] text-[#999]">
          No monthly fees. Flat price, yours to keep. Live in under 3 days.
        </footer>
      </div>
    </main>
  );
}
