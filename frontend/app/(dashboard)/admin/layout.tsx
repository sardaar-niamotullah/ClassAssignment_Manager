import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <nav className="border-b">
        <div className="flex gap-4 p-4">
          <Link href="/admin/users">Users</Link>
          <Link href="/admin/classes">Classes</Link>
          <Link href="/admin/assignments">Assignments</Link>
          <Link href="/admin/submissions">Submissions</Link>
        </div>
      </nav>

      <div className="p-4">{children}</div>
    </main>
  );
}
