import Link from "next/link";
type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "dark" | "light";
  className?: string;
};
export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const s =
    variant === "dark"
      ? "bg-black text-white hover:bg-[#202020]"
      : variant === "light"
        ? "bg-white text-black hover:bg-white/85"
        : "bg-[#e31b23] text-white hover:bg-[#bd1017]";
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-bold uppercase tracking-[.12em] transition ${s} ${className}`}
    >
      {children}
      <span aria-hidden>↗</span>
    </Link>
  );
}
