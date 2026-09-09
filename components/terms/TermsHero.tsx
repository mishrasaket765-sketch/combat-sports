import Image from "next/image";

interface TermsHeroProps {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  logoSrc: string;
  bgImageSrc: string;
}

export function TermsHero({
  title,
  effectiveDate,
  lastUpdated,
  logoSrc,
  bgImageSrc,
}: TermsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageSrc}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-100"
        />
      </div>

      {/* Hero Content - Centered vertically, aligned to left */}
      <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-7xl items-center justify-start px-5 py-16 sm:px-8 lg:min-h-[500px] lg:px-10 lg:py-20">
        <div className="max-w-4xl text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D20A12]">
            Combat Sports Analysis
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}