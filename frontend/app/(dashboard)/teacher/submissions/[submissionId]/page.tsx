import SubmissionMarkForm from "@/features/assignments/components/SubmissionMarkForm";
import SectionHeading from "@/components/section-heading";

type Props = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function SubmissionPage({ params }: Props) {
  const { submissionId } = await params;

  return (
    <div className="space-y-6">
      <SectionHeading
        title={`Grade submission #${submissionId}`}
        description="Review the submission details, assign marks, and leave feedback."
      />
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">Submission overview</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>
              <span className="font-medium text-slate-900">Assignment:</span> Math Homework
            </p>
            <p>
              <span className="font-medium text-slate-900">Student:</span> 2026001 - Riafet
            </p>
            <p>
              <span className="font-medium text-slate-900">Deadline:</span> 20 Aug 2026
            </p>
          </div>
        </div>

        <SubmissionMarkForm totalMarks={100} initialMarks={85} />
      </div>
    </div>
  );
}
