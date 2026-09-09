import Image from "next/image";

interface ContactHeroProps {
  title?: string;
}

export function ContactHero({
  title = "Contact Us",
}: ContactHeroProps) {
  return (
    <section className="relative h-[400px] overflow-hidden bg-[#050505] lg:h-[450px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/contacthero.png"
          alt="Combat Sports Analysis contact"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/10 via-[#050505]/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#D20A12]">
            Combat Sports Analysis
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}