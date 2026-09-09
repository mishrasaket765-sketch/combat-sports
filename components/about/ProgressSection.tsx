import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

interface ProgressSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: SanityImageSource;
}

export function ProgressSection({
  eyebrow,
  title,
  description,
  image,
}: ProgressSectionProps) {
  const imageUrl = image
    ? urlFor(image)
        .width(1600)
        .height(1200)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section className="relative grid-lines overflow-hidden bg-[#0D0D0D] py-20 sm:py-24 lg:py-32">
     
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            {imageUrl ? (
              <div className="relative overflow-hidden border border-[#27272A] bg-[#0D0D0D]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(210,10,18,.2),transparent_42%)]"
                  />
                </div>
              </div>
            ) : (
              <div className="aspect-[4/3] border border-[#27272A] bg-[#0D0D0D]" />
            )}

            {/* Analytics Overlay */}
            <div className="relative mx-4 -mt-16 border border-[#27272A] bg-[#141414] p-5 shadow-2xl shadow-black/30 sm:mx-8 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#71717A]">
                    Performance Overview
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#F5F5F5]">
                    Training Progress
                  </p>
                </div>

                <div className="flex h-8 items-center gap-2 border border-[#D20A12]/30 bg-[#D20A12]/10 px-3">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#D20A12]"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D20A12]">
                    Improving
                  </span>
                </div>
              </div>

              {/* Fake analytics graph — visual only */}
              <div className="mt-6">
                <div className="relative h-28 overflow-hidden border-b border-l border-[#27272A]">
                  {/* Horizontal grid */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_bottom,transparent_24%,#27272A_25%,transparent_26%,transparent_49%,#27272A_50%,transparent_51%,transparent_74%,#27272A_75%,transparent_76%)]"
                  />

                  {/* Progress line */}
                  <svg
                    viewBox="0 0 500 112"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="progressLine"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8F080E"
                        />
                        <stop
                          offset="100%"
                          stopColor="#D20A12"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0,91 C45,88 55,79 92,82 C130,85 136,68 176,70 C213,72 224,55 257,59 C296,63 314,42 345,46 C378,50 391,28 424,33 C451,37 470,18 500,13"
                      fill="none"
                      stroke="url(#progressLine)"
                      strokeWidth="4"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>

                  {/* Data Points */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-[11%] left-[18%] h-2 w-2 rounded-full bg-[#D20A12] ring-4 ring-[#D20A12]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute bottom-[41%] left-[51%] h-2 w-2 rounded-full bg-[#D20A12] ring-4 ring-[#D20A12]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute bottom-[75%] right-0 h-2 w-2 rounded-full bg-[#F5F5F5] ring-4 ring-[#F5F5F5]/10"
                  />
                </div>

                <div className="mt-2 flex justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-[#52525B]">
                  <span>Start</span>
                  <span>Progress</span>
                  <span>Current</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-10 bg-[#D20A12]"
                />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D20A12]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#F5F5F5] sm:text-4xl md:text-4xl lg:text-3xl">
              {title}
            </h2>

            <div
              aria-hidden="true"
              className="mt-6 h-1 w-[40%] bg-[#D20A12] sm:w-20"
            />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressSection;