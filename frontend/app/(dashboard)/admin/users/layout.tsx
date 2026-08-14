import Link from "next/link";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
        <Link className="rounded-full border px-3 py-1.5 text-sm" href="/admin/users/new">All Users</Link>
        <Link className="rounded-full border px-3 py-1.5 text-sm" href="/admin/users/teachers">Teachers</Link>
        <Link className="rounded-full border px-3 py-1.5 text-sm" href="/admin/users/students">Students</Link>
      </div>

      {children}
    </div>
  );
}
