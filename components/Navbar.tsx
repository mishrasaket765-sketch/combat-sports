"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-[#262626] bg-[#050505]/95 backdrop-blur-md">
      <div className="container-shell w-full">
        <div className="mx-auto flex min-h-[86px] w-full items-center justify-between px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={site.name}
            className="flex w-fit items-center gap-3"
          >
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#262626] bg-[#0D0D0D] shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
              <Image
                src="/logo.jpg"
                alt="Combat Sports Analysis logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>

            <span className="hidden text-sm font-black uppercase tracking-[.16em] text-[#F5F5F5] sm:inline">
              Combat Sports Analysis
            </span>
          </Link>

          <nav
            className="hidden items-center justify-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {site.nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-[11px] font-bold uppercase tracking-[.15em] text-[#ffffff] transition-colors hover:text-[#ffffff]"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden items-center gap-3 rounded-full border border-[#262626] bg-[#0D0D0D] px-4 py-2.5 sm:flex">
              <Link
                href="/contact"
                className="text-[10px] font-bold uppercase tracking-[.14em] !text-[#F5F5F5] transition-colors hover:!text-[#F01820]"
              >
                {site.supportText}
              </Link>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#262626] bg-[#141414] text-[#F5F5F5] transition-colors transition-transform hover:scale-105 hover:border-[#D20A12] hover:bg-[#D20A12] lg:hidden"
            >
              <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="w-full border-t border-[#262626] bg-[#0D0D0D] px-4 py-3 md:px-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            {site.nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-4 text-xs font-black uppercase tracking-[.14em] text-[#F5F5F5] transition-colors hover:bg-[#141414] hover:text-[#F01820]"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
