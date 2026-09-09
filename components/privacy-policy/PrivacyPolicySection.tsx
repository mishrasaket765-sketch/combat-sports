import {PortableText} from "@portabletext/react";

interface PrivacyPolicySectionProps {
  number: string;
  title: string;
  content: any[];
}

export function PrivacyPolicySection({
  number,
  title,
  content,
}: PrivacyPolicySectionProps) {
  return (
    <section
      id={`privacy-section-${number}`}
      className="scroll-mt-28 border-b border-[#191919] py-10 first:pt-0 last:border-b-0 md:py-14"
    >
      <div className="mb-6 flex items-start gap-4">
        <span className="mt-1 flex h-8 min-w-8 items-center justify-center rounded-md bg-[#D20A12]/10 px-2 text-xs font-bold text-[#D20A12]">
          {number}
        </span>

        <h2 className="text-2xl font-bold tracking-[-0.025em] text-[#F5F5F5] md:text-3xl">
          {title}
        </h2>
      </div>

      <div className="privacy-policy-prose pl-0 md:pl-12">
        <PortableText
          value={content}
          components={{
            block: {
              normal: ({children}) => (
                <p className="mb-5 text-[15px] leading-8 text-[#A1A1AA] md:text-base">
                  {children}
                </p>
              ),
            },

            list: {
              bullet: ({children}) => (
                <ul className="mb-6 space-y-3 pl-5 text-[15px] leading-7 text-[#A1A1AA] md:text-base">
                  {children}
                </ul>
              ),
            },

            listItem: {
              bullet: ({children}) => (
                <li className="pl-2 marker:text-[#D20A12]">
                  {children}
                </li>
              ),
            },

            marks: {
              strong: ({children}) => (
                <strong className="font-semibold text-[#F5F5F5]">
                  {children}
                </strong>
              ),
            },
          }}
        />
      </div>
    </section>
  );
}