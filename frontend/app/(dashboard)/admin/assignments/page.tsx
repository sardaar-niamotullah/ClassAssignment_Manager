import AssignmentCard from "@/features/assignments/components/AssignmentCard";

const assignments = [
  {
    id: 1,
    name: "Math Homework",
    className: "Class Six",
    createdBy: "Ratul",
    assignmentNumber: 1,
    submissionDeadline: "20 Aug 2026",
  },
  {
    id: 2,
    name: "English Essay",
    className: "Class Seven",
    createdBy: "Tim",
    assignmentNumber: 2,
    submissionDeadline: "25 Aug 2026",
  },
  {
    id: 3,
    name: "Science Project",
    className: "Class Six",
    createdBy: "Bokul",
    assignmentNumber: 3,
    submissionDeadline: "30 Aug 2026",
  },
];

export default function AssignmentsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Assignments</h1>

      {assignments.map((assignment) => (
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
  );
}
