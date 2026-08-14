import AppShell from "@/components/app-shell";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      role="teacher"
      title="Teacher dashboard"
      subtitle="Create assignments, publish them to a class, and review submissions."
    >
      {children}
    </AppShell>
  );
}
