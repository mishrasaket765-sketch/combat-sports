import { TermsSection } from "./TermsSection";

interface TermsSectionData {
  number: number;
  heading: string;
  content: any[];
}

interface TermsContentProps {
  sections: TermsSectionData[];
}

export function TermsContent({ sections }: TermsContentProps) {
  const sortedSections = [...sections].sort(
    (a, b) => a.number - b.number,
  );

  return (
    <div className="min-w-0 grid-lines">
      {sortedSections.map((section) => (
        <TermsSection
          key={`${section.number}-${section.heading}`}
          number={section.number}
          heading={section.heading}
          content={section.content}
        />
      ))}
    </div>
  );
}