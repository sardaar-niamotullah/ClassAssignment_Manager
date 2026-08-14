import { cn } from "@/lib/utils";

export default function RecordCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

