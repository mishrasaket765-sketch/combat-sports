import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

interface KeyPoint {
  text: string;
}

interface AboutHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  keyPoints?: KeyPoint[];
  image: any;
}

export function AboutHero({
  eyebrow,
  title,
  description,
  keyPoints = [],
  image,
}: AboutHeroProps) {
  const imageUrl = image
    ? urlFor(image)
        .width(1800)
        .height(1200)
        .fit("crop")
        .auto("format")
        .url()
    : "/assets/abouthero.png";

  return (
    <section className="relative isolate h-[70vh] overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={imageUrl}
          alt={title || "Combat Sports Analysis"}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(245,245,245,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,245,.4)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* Content */}
      <div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-10 bg-[#D20A12]" />

              <span className="text-xs font-semibold uppercase text-[#D20A12]">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.035em] text-[#F5F5F5] sm:text-4xl md:text-4xl lg:text-4xl">
            {title}
          </h1>

          {/* Accent Line */}
          <div className="mt-7 h-1 w-[30%] bg-[#D20A12]" />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;