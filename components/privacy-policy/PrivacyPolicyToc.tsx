interface TocSection {
  number: string;
  title: string;
}

interface PrivacyPolicyTocProps {
  sections: TocSection[];
}

export function PrivacyPolicyToc({
  sections,
}: PrivacyPolicyTocProps) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-2xl border border-[#191919] bg-[#0D0D0D] p-5 md:p-6">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
          Contents
        </p>

        <nav>
          <ol className="space-y-1">
            {sections.map((section) => (
              <li key={`${section.number}-${section.title}`}>
                <a
                  href={`#privacy-section-${section.number}`}
                  className="group flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#141414]"
                >
                  <span className="shrink-0 text-xs font-bold text-[#D20A12]">
                    {section.number}
                  </span>

                  <span className="text-sm leading-5 text-[#A1A1AA] transition-colors group-hover:text-[#F5F5F5]">
                    {section.title}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}