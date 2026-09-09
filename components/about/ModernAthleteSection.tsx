import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

interface KeyPoint {
  text: string;
}

interface ModernAthleteSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  keyPoints?: KeyPoint[];
  image?: SanityImageSource;
}

export function ModernAthleteSection({
  eyebrow,
  title,
  description,
  keyPoints = [],
  image,
}: ModernAthleteSectionProps) {
  const imageUrl = image
    ? urlFor(image)
        .width(1800)
        .height(1400)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section className="relative overflow-hidden grid-lines bg-[#0D0D0D] py-20 sm:py-24 lg:py-32">
      {/* Red Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-14rem] top-1/4 h-[520px] w-[520px] rounded-full bg-[#D20A12]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 xl:gap-24">
          {/* Content */}
          <div className="order-1">
            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.97] tracking-[-0.035em] text-[#F5F5F5] sm:text-4xl md:text-4xl lg:text-4xl">
              {title}
            </h2>

            {/* Accent */}
            <div
              aria-hidden="true"
              className="mt-6 h-1 w-32 bg-[#D20A12] sm:w-20"
            />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>

          {/* Image / Statement */}
          <div className="order-2">
            <div className="relative">
              {/* Image */}
              {imageUrl ? (
                <div className="relative overflow-hidden border border-[#27272A] bg-[#141414]">
                  <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover object-center"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.05)_15%,rgba(5,5,5,.72)_100%)]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(210,10,18,.25),transparent_35%)]"
                    />
                  </div>

                  {/* Bottom Statement */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <div className="max-w-md border-l-2 border-[#D20A12] pl-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D20A12]">
                        The Goal
                      </p>

                      <p className="mt-2 text-lg font-black uppercase leading-tight text-[#F5F5F5] sm:text-xl">
                        Train with greater purpose.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/5] border border-[#27272A] bg-[#141414]" />
              )}

              {/* Decorative Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-20 w-20 border-b border-r border-[#D20A12]/50"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 -z-0 h-20 w-20 border-l border-t border-[#D20A12]/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModernAthleteSection;