import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#262626] bg-[#050505] text-[#F5F5F5]">
      <div className="container-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.7fr_.7fr]">
          
          <div>
            <div className="flex items-center gap-4">
              {/* Brand Logo */}
              <span className="relative h-20 w-20 overflow-hidden rounded-full border border-[#262626] bg-[#0D0D0D] shadow-[0_8px_28px_rgba(0,0,0,0.45)]">
                <Image
                  src="/logo.jpg"
                  alt={`${site.name} Logo`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>

              <span className="text-lg font-black uppercase tracking-[.16em] text-[#F5F5F5]">
                {site.name}
              </span>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#A1A1AA]">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#D20A12]">
              Explore
            </p>

            <div className="mt-5 grid gap-3 text-sm text-[#A1A1AA]">
              <Link
                href="/"
                className="transition-colors hover:text-[#F01820]"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition-colors hover:text-[#F01820]"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#D20A12]">
              Legal
            </p>

            <div className="mt-5 grid gap-3 text-sm text-[#A1A1AA]">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#F01820]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#F01820]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#262626] pt-6 text-[11px] uppercase tracking-[.13em] text-[#71717A] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </span>

          <span>
            Performance intelligence · built for combat sports
          </span>
        </div>
      </div>
    </footer>
  );
}