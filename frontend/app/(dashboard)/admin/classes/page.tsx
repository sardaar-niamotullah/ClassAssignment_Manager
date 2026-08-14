import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import ClassCard from "@/features/classes/components/ClassCard";
import { mockClasses } from "@/lib/mock-data";

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          title="Classes"
          description="Create, update, delete, and assign teachers or students to each class."
        />
        <Link href="/admin/classes/new">
          <Button>Create New Class</Button>
        </Link>
      </div>

      <div className="space-y-3">
      {mockClasses.map((classItem) => (
        <ClassCard
          key={classItem.id}
          id={classItem.id}
          name={classItem.name}
          teachers={classItem.teachers}
          studentCount={classItem.studentCount}
          assignmentCount={classItem.assignmentCount}
        />
      ))}
      </div>
    </div>
  );
}
