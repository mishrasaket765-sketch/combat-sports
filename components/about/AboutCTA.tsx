import Link from "next/link";

interface AboutCTAProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonUrl?: string;
}

export function AboutCTA({
  eyebrow = "KEEP IMPROVING",
  title,
  description,
  buttonText = "Get Started",
  buttonUrl = "/",
}: AboutCTAProps) {
  return (
    <section className="relative overflow-hidden grid-lines bg-[#050505] py-20 sm:py-24 lg:py-28">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(245,245,245,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,245,.6)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D20A12]/10 blur-[140px]" />

        {/* Red Side Accents */}
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#8F080E]/10 blur-[100px]" />

        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#D20A12]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
       
        <div className="relative overflow-hidden border border-[#27272A] bg-[#0D0D0D]">
         

          {/* Decorative Lines */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-24 w-24 border-l border-t border-[#D20A12]/25"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-24 w-24 border-b border-r border-[#D20A12]/25"
          />

          {/* Content */}
          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 md:px-16 lg:px-20 lg:py-20">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-6 flex items-center justify-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#D20A12] sm:w-12"
                />

                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D20A12] sm:text-xs">
                  {eyebrow}
                </span>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[#D20A12] sm:w-12"
                />
              </div>
            )}

            <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#D20A12] sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
              {title}
            </h2>

            {/* Accent */}
            <div
              aria-hidden="true"
              className="mx-auto mt-7 h-1 w-16 bg-[#D20A12] sm:w-20"
            />

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {description}
            </p>

            {/* CTA */}
            {buttonText && buttonUrl && (
              <div className="mt-9 flex justify-center">
                <Link
                  href={buttonUrl}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 bg-[#D20A12] px-7 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-[#F5F5F5] transition-all duration-300 hover:bg-[#F01820] hover:shadow-[0_0_35px_rgba(210,10,18,.2)] focus:outline-none focus:ring-2 focus:ring-[#D20A12] focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
                >
                  <span>{buttonText}</span>
                </Link>
              </div>
            )}

            {/* Closing Statement */}
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-4 border-t border-[#27272A] pt-7 sm:mt-14 sm:flex-row sm:justify-center">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 bg-[#D20A12]"
              />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71717A]">
                Train Smarter
              </p>

              <span
                aria-hidden="true"
                className="hidden h-px w-5 bg-[#3F3F46] sm:block"
              />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71717A]">
                Track Better
              </p>

              <span
                aria-hidden="true"
                className="hidden h-px w-5 bg-[#3F3F46] sm:block"
              />

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#71717A]">
                Perform Stronger
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;