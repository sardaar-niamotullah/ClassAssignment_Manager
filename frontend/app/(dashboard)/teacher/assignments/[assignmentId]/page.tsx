import AssignmentForm from "@/features/assignments/components/AssignmentForm";
import SectionHeading from "@/components/section-heading";

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
    <div className="space-y-6">
      <SectionHeading
        title={`Edit assignment #${assignmentId}`}
        description="Update the details of this assignment before publishing or resaving."
      />
      <AssignmentForm isEdit initialValues={assignment} />
    </div>
  );
}
