import SectionHeading from "@/components/section-heading";
import { mockStudentAssignments } from "@/lib/mock-data";
import StudentAssignmentCard from "@/features/assignments/components/StudentAssignmentCard";

export default function AssignmentsPage() {
  return (
    <div className="space-y-6">
      <SectionHeading
        title="Assignments"
        description="Open the published tasks, review the brief, and submit your answer PDF."
      />
      <div className="space-y-3">
      {mockStudentAssignments.map((assignment) => (
        <StudentAssignmentCard key={assignment.id} {...assignment} />
      ))}
      </div>
    </div>
  );
}
