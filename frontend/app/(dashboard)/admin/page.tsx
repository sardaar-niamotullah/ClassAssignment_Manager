import Link from "next/link";

import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { Button } from "@/components/ui/button";
import { mockStats } from "@/lib/mock-data";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Overview"
        title="Control center"
        description="Keep the whole platform organized by managing roles, classes, assignments, and marks."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {mockStats.admin.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Quick actions</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/admin/users/new">
              <Button>Add user</Button>
            </Link>
            <Link href="/admin/classes/new">
              <Button variant="outline">Create class</Button>
            </Link>
            <Link href="/admin/assignments">
              <Button variant="secondary">Review assignments</Button>
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Permission model</h3>
          <p className="mt-3 text-sm text-slate-600">
            Admins can assign teacher or student roles, delete users, maintain classes, and manage published work and submission marks.
          </p>
        </div>
      </div>
    </div>
  );
}
