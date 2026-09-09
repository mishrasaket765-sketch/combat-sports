import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";

import { urlFor } from "@/sanity/lib/image";

interface AboutFeature {
  title: string;
  description: string;
  icon?: string;
  image?: SanityImageSource;
}

interface AboutFeatureGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: AboutFeature[];
}

export function AboutFeatureGrid({
  eyebrow,
  title,
  description,
  items = [],
}: AboutFeatureGridProps) {
  return (
    <section className="relative overflow-hidden grid-lines bg-[#050505] py-20 sm:py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl font-black uppercase leading-[0.98] text-[#D20A12] sm:text-4xl md:text-4xl lg:text-4xl">
            {title}
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-26 bg-[#D20A12] sm:w-20"
          />

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {description}
            </p>
          )}
        </div>


        {items.length > 0 && (
          <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {items.map((feature, index) => {
              const imageUrl = feature.image
                ? urlFor(feature.image)
                    .width(1000)
                    .height(700)
                    .fit("crop")
                    .auto("format")
                    .url()
                : null;

              /*
               * Make the first feature span two columns on larger
               * screens to avoid a repetitive card wall.
               */
              const isFeatured =
                index === 0 && items.length >= 3;

              return (
                <article
                  key={`${feature.title}-${index}`}
                  className={[
                    "group relative overflow-hidden border border-[#27272A] bg-[#141414]",
                    "transition-all duration-300",
                    "hover:-translate-y-1 hover:border-[#D20A12]/40",
                    isFeatured
                      ? "lg:col-span-2"
                      : "",
                  ].join(" ")}
                >

                  {imageUrl ? (
                    <div
                      className={[
                        "relative overflow-hidden",
                        isFeatured
                          ? "aspect-[16/8]"
                          : "aspect-[16/10]",
                      ].join(" ")}
                    >
                      <Image
                        src={imageUrl}
                        alt={feature.title}
                        fill
                        sizes={
                          isFeatured
                            ? "(max-width: 1024px) 100vw, 66vw"
                            : "(max-width: 1024px) 50vw, 33vw"
                        }
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,.05)_10%,rgba(5,5,5,.9)_100%)]"
                      />

                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(210,10,18,.16),transparent_35%)]"
                      />

                      {/* Image Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-white/10 bg-[#050505]/75 backdrop-blur-sm">
                        <span className="text-[10px] font-black text-[#D20A12]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-24 border-b border-[#27272A] bg-[#0D0D0D]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_50%,rgba(210,10,18,.14),transparent_30%)]"
                      />

                      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center border border-[#D20A12]/30 bg-[#D20A12]/10">
                        <span className="text-[10px] font-black text-[#D20A12]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="relative p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-black uppercase leading-tight tracking-[-0.015em] text-[#F5F5F5] sm:text-xl">
                          {feature.title}
                        </h3>

                        <div
                          aria-hidden="true"
                          className="mt-3 h-0.5 w-8 bg-[#D20A12] transition-all duration-300 group-hover:w-14"
                        />
                      </div>

                      {/* Icon Identifier */}
                      {feature.icon && (
                        <span className="shrink-0 border border-[#27272A] bg-[#191919] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#71717A]">
                          {feature.icon}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#A1A1AA]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Edge */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D20A12] transition-all duration-500 group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>
        )}


        {items.length === 0 && (
          <div className="mt-14 border border-dashed border-[#27272A] bg-[#0D0D0D] px-6 py-16 text-center">
            <p className="text-sm font-semibold text-[#71717A]">
              Feature content is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutFeatureGrid;