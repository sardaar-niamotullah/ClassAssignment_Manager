import Link from "next/link";

import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { mockStats } from "@/lib/mock-data";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Overview"
        title="Teaching workspace"
        description="Create assignments, publish them to a class, and grade submissions quickly."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {mockStats.teacher.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Shortcuts</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/teacher/assignments/new">
            <Button>Create assignment</Button>
          </Link>
          <Link href="/teacher/assignments">
            <Button variant="outline">Manage drafts</Button>
          </Link>
          <Link href="/teacher/submissions">
            <Button variant="secondary">Review submissions</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
