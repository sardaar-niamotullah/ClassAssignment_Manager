import Link from "next/link";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <nav className="border-b">
        <div className="flex gap-4 p-4">
          <Link href="/student/assignments">Assignments</Link>
          <Link href="/student/submissions">Submissions</Link>
        </div>
      </nav>

      <div className="p-4">{children}</div>
    </main>
  );
}
