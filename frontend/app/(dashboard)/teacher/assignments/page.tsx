import Link from "next/link";

import { Button } from "@/components/ui/button";

import TeacherAssignmentCard from "@/features/assignments/components/TeacherAssignmentCard";

const assignments = [
  {
    id: 1,
    name: "Math Homework",
    totalMarks: 100,
    deadline: "20 Aug 2026",
    className: "Class Six",
    isPublished: true,
    questionPdf: "math-homework.pdf",
  },
  {
    id: 2,
    name: "English Essay",
    totalMarks: 100,
    deadline: "25 Aug 2026",
    className: "Class Seven",
    isPublished: false,
    questionPdf: "english-essay.pdf",
  },
];

export default function AssignmentsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Assignments</h1>

        <Link href="/teacher/assignments/new">
          <Button>Create New Assignment</Button>
        </Link>
      </div>

      {assignments.map((assignment) => (
        <TeacherAssignmentCard key={assignment.id} {...assignment} />
      ))}
    </div>
  );
}
