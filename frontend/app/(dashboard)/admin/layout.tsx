import AppShell from "@/components/app-shell";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      role="admin"
      title="Admin dashboard"
      subtitle="Manage users, classes, assignments, and submissions from one place."
    >
      {children}
    </AppShell>
  );
}
