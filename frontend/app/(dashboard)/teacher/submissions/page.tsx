import SectionHeading from "@/components/section-heading";
import { mockTeacherSubmissions } from "@/lib/mock-data";
import TeacherSubmissionCard from "@/features/assignments/components/TeacherSubmissionCard";

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Submissions"
        description="Grade student work and update marks when required."
      />
      <div className="space-y-3">
      {mockTeacherSubmissions.map((submission) => (
        <TeacherSubmissionCard key={submission.id} {...submission} />
      ))}
      </div>
    </div>
  );
}
