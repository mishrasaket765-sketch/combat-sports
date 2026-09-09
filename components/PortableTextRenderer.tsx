import { PortableText, type PortableTextComponents } from "@portabletext/react";
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="display mt-12 text-3xl uppercase leading-tight md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-black uppercase tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-[15px] leading-8 text-black/65">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#e31b23] pl-5 text-lg font-semibold leading-8 text-black/75">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 grid gap-3 pl-5 text-[15px] leading-7 text-black/65">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 grid gap-3 pl-5 text-[15px] leading-7 text-black/65">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="list-disc pl-1">{children}</li>,
    number: ({ children }) => <li className="list-decimal pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-semibold text-[#c4141b] underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
};
export function PortableTextRenderer({ value }: { value: unknown }) {
  return <PortableText value={value as never} components={components} />;
}
