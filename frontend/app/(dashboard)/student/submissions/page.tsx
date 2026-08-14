import SectionHeading from "@/components/section-heading";
import { mockStudentSubmissions } from "@/lib/mock-data";
import StudentSubmissionCard from "@/features/assignments/components/StudentSubmissionCard";

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Submissions"
        description="Edit a submission before the deadline or check your graded work."
      />
      <div className="space-y-3">
        {mockStudentSubmissions.map((submission) => (
          <StudentSubmissionCard key={submission.id} {...submission} />
        ))}
      </div>
    </div>
  );
}
