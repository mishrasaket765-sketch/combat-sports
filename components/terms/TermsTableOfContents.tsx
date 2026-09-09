"use client";

import { useEffect, useState } from "react";

interface TermsSectionItem {
  number: number;
  heading: string;
}

interface TermsTableOfContentsProps {
  sections: TermsSectionItem[];
}

export function TermsTableOfContents({
  sections,
}: TermsTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const elements = sections
      .map((section) =>
        document.getElementById(`section-${section.number}`)
      )
      .filter(
        (element): element is HTMLElement => element !== null
      );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        const firstVisible = visible[0];

        if (firstVisible?.target instanceof HTMLElement) {
          setActiveSection(firstVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <aside className="lg:sticky lg:top-28 grid-lines lg:self-start">
      <nav
        aria-label="Terms & Conditions sections"
        className="rounded-2xl border border-[#191919] grid-lines bg-[#0D0D0D] p-5"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A1A1AA]">
          Contents
        </p>

        <div className="space-y-1">
          {sections.map((section) => {
            const id = `section-${section.number}`;
            const isActive = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={[
                  "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive
                    ? "bg-[#D20A12]/10 text-[#F5F5F5]"
                    : "text-[#A1A1AA] hover:bg-[#141414] hover:text-[#F5F5F5]",
                ].join(" ")}
              >
                <span className="mr-2 text-[#D20A12]">
                  {String(section.number).padStart(2, "0")}
                </span>

                {section.heading}
              </a>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}