import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="shell py-24 md:py-32">
        <p className="mono-label mb-6">404</p>
        <h1 className="display-hero max-w-[12ch]">
          This file isn&apos;t on the table.
        </h1>
        <p className="body-lg mt-7 max-w-[40ch]">
          The page you asked for moved, never shipped, or was a concept we cut.
          The work that matters is still here.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/work" className="btn btn-primary">
            See the work
          </Link>
          <Link href="/" className="pill border border-line text-ink-soft hover:text-ink">
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
