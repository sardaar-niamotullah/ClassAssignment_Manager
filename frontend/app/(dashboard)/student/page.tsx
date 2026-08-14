import SectionHeading from "@/components/section-heading";
import StatCard from "@/components/stat-card";
import { mockStats } from "@/lib/mock-data";

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <SectionHeading
        eyebrow="Overview"
        title="Student dashboard"
        description="Track your assignments, submit work, and monitor grading progress."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {mockStats.student.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">What you can do here</h3>
        <p className="mt-3 text-sm text-slate-600">
          Students can view published assignments, upload answers, edit submissions before the deadline, and check marks after grading.
        </p>
      </div>
    </div>
  );
}
