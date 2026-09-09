import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
export default function NotFound() {
  return (
    <>
      <main className="grid min-h-[70vh] place-items-center bg-[#f7f7f5] px-4 pt-24">
        <Navbar />
        <div className="container-shell max-w-3xl text-center">
          <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#c4141b]">
            404 / Content not published
          </p>
          <h1 className="display mt-4 text-6xl uppercase leading-none sm:text-8xl">
            That page is not ready.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/55">
            This CMS-managed page does not have a published document yet. Create
            the document in Sanity Studio and publish it.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex rounded-full bg-black px-6 py-4 text-xs font-black uppercase tracking-[.16em] text-white"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
