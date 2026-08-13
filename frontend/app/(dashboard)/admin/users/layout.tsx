import Link from "next/link";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex gap-4 border-b pb-3">
        <Link href="/admin/users/new">New</Link>
        <Link href="/admin/users/teachers">Teachers</Link>
        <Link href="/admin/users/students">Students</Link>
      </div>

      {children}
    </div>
  );
}
