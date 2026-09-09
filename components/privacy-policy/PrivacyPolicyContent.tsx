import { PortableText } from "@portabletext/react";

interface PrivacyPolicyContentProps {
  effectiveDate?: string;
  lastUpdated?: string;
  introduction?: any[];
  sections?: {
    number: string;
    title: string;
    content: any[];
  }[];
}

export function PrivacyPolicyContent({
  effectiveDate,
  lastUpdated,
  introduction = [],
  sections = [],
}: PrivacyPolicyContentProps) {
  return (
    <section className="bg-[#050505] grid-lines">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid overflow-hidden rounded-2xl border border-[#191919] bg-[#191919] sm:grid-cols-2">
            <div className="bg-[#0D0D0D] p-6 md:p-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                Effective Date
              </p>

              <p className="text-sm font-medium text-[#F5F5F5] md:text-base">
                {effectiveDate}
              </p>
            </div>

            <div className="bg-[#0D0D0D] p-6 md:p-7">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#A1A1AA]">
                Last Updated
              </p>

              <p className="text-sm font-medium text-[#F5F5F5] md:text-base">
                {lastUpdated}
              </p>
            </div>
          </div>

          {/* Introduction */}
          {introduction.length > 0 && (
            <div className="border-b border-[#191919] py-12 md:py-16">
              <div className="privacy-policy-prose max-w-4xl">
                <PortableText
                  value={introduction}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-5 text-base leading-8 text-[#A1A1AA] md:text-lg md:leading-9">
                          {children}
                        </p>
                      ),
                    },

                    list: {
                      bullet: ({ children }) => (
                        <ul className="mb-6 space-y-3 pl-6 text-base leading-8 text-[#A1A1AA]">
                          {children}
                        </ul>
                      ),
                    },

                    listItem: {
                      bullet: ({ children }) => (
                        <li className="pl-2 marker:text-[#D20A12]">
                          {children}
                        </li>
                      ),
                    },
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Main Policy */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          {/* Table of Contents */}
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
                        <span className="shrink-0 text-sm font-bold text-[#D20A12]">
                          {section.number}
                        </span>

                        <span className="text-xs leading-5 text-[#ffffff] transition-colors group-hover:text-[#F5F5F5]">
                          {section.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="min-w-0">
            {sections.map((section) => (
              <article
                key={`${section.number}-${section.title}`}
                id={`privacy-section-${section.number}`}
                className="scroll-mt-28 border-b border-[#191919] py-10 first:pt-0 last:border-b-0 md:py-14"
              >
                <div className="mb-6 flex items-start gap-4">
                  <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-md bg-[#D20A12]/10 px-2 text-sm font-bold text-[#D20A12]">
                    {section.number}
                  </span>

                  <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#F5F5F5] md:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-0 md:pl-12">
                  <PortableText
                    value={section.content}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="mb-5 text-[15px] leading-8 text-[#A1A1AA] md:text-base md:leading-8">
                            {children}
                          </p>
                        ),
                      },

                      list: {
                        bullet: ({ children }) => (
                          <ul className="mb-6 space-y-3 pl-6 text-[15px] leading-8 text-[#A1A1AA] md:text-base">
                            {children}
                          </ul>
                        ),
                      },

                      listItem: {
                        bullet: ({ children }) => (
                          <li className="pl-2 marker:text-[#D20A12]">
                            {children}
                          </li>
                        ),
                      },

                      marks: {
                        strong: ({ children }) => (
                          <strong className="font-semibold text-[#F5F5F5]">
                            {children}
                          </strong>
                        ),
                      },
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}