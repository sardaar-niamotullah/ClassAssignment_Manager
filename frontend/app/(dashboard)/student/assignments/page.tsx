import StudentAssignmentCard from "@/features/assignments/components/StudentAssignmentCard";

const assignments = [
  {
    id: 1,
    name: "Math Homework",
    totalMarks: 100,
    deadline: "20 Aug 2026",
    questionPdf: "math-homework.pdf",
  },
  {
    id: 2,
    name: "English Essay",
    totalMarks: 100,
    deadline: "25 Aug 2026",
    questionPdf: "english-essay.pdf",
  },
];

export default function AssignmentsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Assignments</h1>
      </div>

      {assignments.map((assignment) => (
        <StudentAssignmentCard key={assignment.id} {...assignment} />
      ))}
    </div>
  );
}
