import Link from "next/link";

import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";

import TeacherAssignmentCard from "@/features/assignments/components/TeacherAssignmentCard";
import { mockTeacherAssignments } from "@/lib/mock-data";

export default function AssignmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          title="Assignments"
          description="Create drafts, publish them to a class, or edit and delete them later."
        />
        <Link href="/teacher/assignments/new">
          <Button>Create New Assignment</Button>
        </Link>
      </div>

      <div className="space-y-3">
      {mockTeacherAssignments.map((assignment) => (
        <TeacherAssignmentCard key={assignment.id} {...assignment} />
      ))}
      </div>
    </div>
  );
}
