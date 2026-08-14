import StudentSubmissionForm from "@/features/assignments/components/StudentSubmissionForm";

type Props = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function EditSubmissionPage({ params }: Props) {
  const { submissionId } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Edit Submission #{submissionId}</h1>

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
