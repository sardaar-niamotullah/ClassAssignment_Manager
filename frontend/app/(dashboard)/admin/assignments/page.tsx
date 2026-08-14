import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import AssignmentCard from "@/features/assignments/components/AssignmentCard";
import { mockAdminAssignments } from "@/lib/mock-data";

export default function AssignmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          title="Assignments"
          description="See all published work, edit an assignment, or delete it when necessary."
        />
        <Link href="/teacher/assignments/new">
          <Button variant="outline">Create as teacher</Button>
        </Link>
      </div>
      <div className="space-y-3">
      {mockAdminAssignments.map((assignment) => (
        <AssignmentCard
          key={assignment.id}
          id={assignment.id}
          name={assignment.name}
          className={assignment.className}
          createdBy={assignment.createdBy}
          assignmentNumber={assignment.assignmentNumber}
          submissionDeadline={assignment.submissionDeadline}
        />
      ))}
      </div>
    </div>
  );
}
