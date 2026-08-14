import StudentSubmissionForm from "@/features/assignments/components/StudentSubmissionForm";
import SectionHeading from "@/components/section-heading";

type Props = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function EditSubmissionPage({ params }: Props) {
  const { submissionId } = await params;

  return (
    <div className="space-y-6">
      <SectionHeading
        title={`Edit submission #${submissionId}`}
        description="Replace your answer file before the deadline and keep your work up to date."
      />
      <StudentSubmissionForm
        isEdit
        assignmentName="Math Homework"
        totalMarks={100}
        deadline="20 Aug 2026"
        questionPdf="math-homework.pdf"
      />
    </div>
  );
}
