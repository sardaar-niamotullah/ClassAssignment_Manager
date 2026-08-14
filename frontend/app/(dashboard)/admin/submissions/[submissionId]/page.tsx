import SubmissionMarkForm from "@/features/assignments/components/SubmissionMarkForm";

type Props = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function SubmissionPage({ params }: Props) {
  const { submissionId } = await params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Grade Submission #{submissionId}</h1>

      <p>Assignment: Math Homework</p>
      <p>Student: 2026001 - Riafet</p>

      <SubmissionMarkForm totalMarks={100} initialMarks={85} />
    </div>
  );
}
