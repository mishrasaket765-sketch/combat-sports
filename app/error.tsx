"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-black px-6 text-center text-white">
      <div>
        <p className="text-[11px] font-black uppercase tracking-[.2em] text-[#ff5a62]">
          System error
        </p>
        <h1 className="display mt-3 text-5xl uppercase sm:text-7xl">
          Something went wrong.
        </h1>
        <button
          onClick={reset}
          className="mt-8 rounded-full bg-[#e31b23] px-6 py-4 text-xs font-black uppercase tracking-[.15em]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
