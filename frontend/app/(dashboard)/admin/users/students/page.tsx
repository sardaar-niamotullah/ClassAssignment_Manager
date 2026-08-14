import SectionHeading from "@/components/section-heading";
import RecordCard from "@/components/record-card";
import { mockUsers } from "@/lib/mock-data";

const students = mockUsers.filter((user) => user.role === "student");

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Students"
        description="Keep student accounts visible and ready for class assignment."
      />
      <div className="space-y-3">
        {students.map((student) => (
          <RecordCard key={student.id}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">
                  {student.name}
                </p>
                <p className="text-sm text-slate-500">{student.email}</p>
                <span className="mt-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  Student role
                </span>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Active
              </span>
            </div>
          </RecordCard>
        ))}
      </div>
    </div>
  );
}
