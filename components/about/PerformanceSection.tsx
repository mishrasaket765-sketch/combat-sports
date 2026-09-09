import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { Target } from "lucide-react";
import { Dumbbell } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

interface PerformanceMetric {
  name: string;
  description?: string;
}

interface PerformanceSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  scaleLabel?: string;
  scaleDescription?: string;
  metrics?: PerformanceMetric[];
  image?: SanityImageSource;
}

export function PerformanceSection({
  eyebrow,
  title,
  description,
  scaleLabel = "Performance Rating",
  scaleDescription = "Rate your ability from 1–10.",
  metrics = [],
  image,
}: PerformanceSectionProps) {
  const imageUrl = image
    ? urlFor(image)
        .width(1400)
        .height(1100)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section className="relative grid-lines overflow-hidden bg-[#050505] py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
      >
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(245,245,245,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,245,.6)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Red Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D20A12]/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 xl:gap-24">
          {/* Content */}
          <div className="min-w-0">
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
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#D20A12] sm:text-4xl md:text-4xl lg:text-4xl">
              {title}
            </h2>
            <div
              aria-hidden="true"
              className="mt-6 h-1 w-16 bg-[#D20A12] sm:w-20"
            />

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-6 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {description}
            </p>

            {/* Performance Scale */}
            <div className="mt-10 border border-[#27272A] bg-[#141414] p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D20A12]">
                    {scaleLabel}
                  </p>

                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    {scaleDescription}
                  </p>
                </div>

                <div className="text-3xl font-black tracking-tight text-[#F5F5F5]">
                  <span className="text-[#D20A12]">1</span>
                  <span className="mx-1.5 text-[#52525B]">—</span>
                  <span>10</span>
                </div>
              </div>

              {/* Scale */}
              <div className="mt-6">
                <div
                  aria-hidden="true"
                  className="grid grid-cols-10 gap-1.5"
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <span
                      key={index}
                      className={[
                        "h-2",
                        index < 3
                          ? "bg-[#8F080E]"
                          : index < 7
                            ? "bg-[#5E1115]"
                            : "bg-[#D20A12]",
                      ].join(" ")}
                    />
                  ))}
                </div>

                <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#52525B]">
                  <span>Developing</span>
                  <span>Strong</span>
                  <span>Elite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual / Metrics */}
          <div className="relative">
            {/* Image */}
            {imageUrl && (
              <div className="relative overflow-hidden border border-[#27272A] bg-[#141414]">
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
                    className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(210,10,18,.2),transparent_35%)]"
                  />
                </div>
              </div>
            )}

            {/* Metrics Card */}
            {metrics.length > 0 && (
              <div
                className={[
                  "border border-[#27272A] bg-[#141414]",
                  imageUrl
                    ? "relative mx-4 -mt-8 sm:mx-8"
                    : "relative",
                ].join(" ")}
              >
                <div className="flex items-center justify-between border-b border-[#27272A] px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F5F5F5]">
                      Key Performance Metrics
                    </p>
                    <p className="mt-1 text-xs text-[#71717A]">
                      Track what matters to your development.
                    </p>
                  </div>

                  <span className="flex h-8 min-w-8 items-center justify-center border border-[#D20A12]/40 bg-[#D20A12]/10 px-2 text-xs font-black text-[#D20A12]">
                    {metrics.length}
                  </span>
                </div>

                <div className="divide-y divide-[#27272A]">
                  {metrics.map((metric, index) => (
                    <div
                      key={`${metric.name}-${index}`}
                      className="group flex gap-4 px-5 py-4 transition-colors duration-200 hover:bg-[#191919] sm:px-6"
                    >
                      {/* Number */}
                      <div className="flex shrink-0 items-start pt-0.5">
                        <span className="text-xs font-black tabular-nums text-[#D20A12]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Metric Content */}
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-[#F5F5F5] transition-colors duration-200 group-hover:text-[#D20A12] sm:text-base">
                          {metric.name}
                        </h3>

                        {metric.description && (
                          <p className="mt-1 text-xs leading-5 text-[#71717A] sm:text-sm">
                            {metric.description}
                          </p>
                        )}
                      </div>

                      {/* Indicator */}
                      <div
                        aria-hidden="true"
                        className="ml-auto mt-1 hidden h-1.5 w-1.5 shrink-0 bg-[#D20A12] sm:block"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerformanceSection;