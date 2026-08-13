import AssignmentForm from "@/features/assignments/components/AssignmentForm";

type Props = {
  params: Promise<{
    assignmentId: string;
  }>;
};

export default async function EditAssignmentPage({ params }: Props) {
  const { assignmentId } = await params;

  const assignment = {
    name: "Math Homework",
    classId: "1",
    totalMarks: 100,
    deadline: "2026-08-20",
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Edit Assignment #{assignmentId}</h1>

      <AssignmentForm isEdit initialValues={assignment} />
    </div>
  );
}
