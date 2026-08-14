"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ClipboardList,
  LayoutDashboard,
  LogOut,
  NotebookPen,
  School,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/lib/mock-data";

type AppShellProps = {
  role: Exclude<UserRole, "pending">;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

type NavIcon = React.ComponentType<{ className?: string }>;

const navigation: Record<
  Exclude<UserRole, "pending">,
  { href: string; label: string; icon: NavIcon }[]
> = {
  admin: [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/users", label: "Users", icon: Users },
    { href: "/admin/classes", label: "Classes", icon: School },
    { href: "/admin/assignments", label: "Assignments", icon: NotebookPen },
    { href: "/admin/submissions", label: "Submissions", icon: ClipboardList },
  ],
  teacher: [
    { href: "/teacher", label: "Overview", icon: LayoutDashboard },
    { href: "/teacher/assignments", label: "Assignments", icon: NotebookPen },
    { href: "/teacher/submissions", label: "Submissions", icon: ClipboardList },
  ],
  student: [
    { href: "/student", label: "Overview", icon: LayoutDashboard },
    { href: "/student/assignments", label: "Assignments", icon: NotebookPen },
    { href: "/student/submissions", label: "Submissions", icon: ClipboardList },
  ],
};

export default function AppShell({ role, title, subtitle, children }: AppShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_35%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#ffffff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 p-4 md:p-6">
        <header className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Class Assignment Manager
              </p>
              <h1 className="mt-1 text-2xl font-semibold">{title}</h1>
              <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
            </div>
            <Button
              variant="outline"
              className="justify-center md:justify-start"
              onClick={() => router.push("/login")}
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          </div>
          <nav className="mt-5 flex flex-wrap gap-2">
            {navigation[role].map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition",
                    active
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

