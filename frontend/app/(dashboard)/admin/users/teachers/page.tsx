import SectionHeading from "@/components/section-heading";
import RecordCard from "@/components/record-card";
import { mockUsers } from "@/lib/mock-data";

const teachers = mockUsers.filter((user) => user.role === "teacher");

export default function TeachersPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Teachers"
        description="Review every teacher account and keep access tidy."
      />
      <div className="space-y-3">
        {teachers.map((teacher) => (
          <RecordCard key={teacher.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">
                  {teacher.name}
                </p>
                <p className="text-sm text-slate-500">{teacher.email}</p>
                <span className="mt-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  Teacher role
                </span>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                Active
              </span>
            </div>
          </RecordCard>
        ))}
      </div>
    </div>
  );
}
