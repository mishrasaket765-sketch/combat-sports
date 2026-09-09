import { PortableText } from "@portabletext/react";

interface TermsSectionProps {
  number: number;
  heading: string;
  content: any[];
}

export function TermsSection({
  number,
  heading,
  content,
}: TermsSectionProps) {
  return (
    <section
      id={`section-${number}`}
      aria-labelledby={`section-heading-${number}`}
      className="scroll-mt-28 border-b border-[#191919] pb-12 pt-12 first:pt-0 last:border-b-0"
    >
      <div className="mb-6 flex items-start gap-4">
        <span className="mt-1 text-sm font-semibold text-[#D20A12]">
          {String(number).padStart(2, "0")}
        </span>

        <h2
          id={`section-heading-${number}`}
          className="text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl"
        >
          {heading}
        </h2>
      </div>

      <div className="prose prose-invert max-w-none text-[#A1A1AA]">
        <PortableText value={content} />
      </div>
    </section>
  );
}