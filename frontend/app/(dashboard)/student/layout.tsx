import AppShell from "@/components/app-shell";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      role="student"
      title="Student dashboard"
      subtitle="See assignments, submit work, and keep track of your progress."
    >
      {children}
    </AppShell>
  );
}
