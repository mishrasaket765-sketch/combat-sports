interface ImportantNoticeProps {
  children: React.ReactNode;
}

export function ImportantNotice({
  children,
}: ImportantNoticeProps) {
  return (
    <aside
      role="note"
      className="rounded-2xl border border-[#8F080E]/40 bg-[#8F080E]/10 p-6 sm:p-8"
    >
      <div className="flex gap-4">
        <div
          aria-hidden="true"
          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D20A12]"
        />

        <div className="text-sm leading-7 text-[#D4D4D8]">
          {children}
        </div>
      </div>
    </aside>
  );
}