import StudentSubmissionCard from "@/features/assignments/components/StudentSubmissionCard";

const submissions = [
  {
    id: 1,
    assignmentName: "Math Homework",
    studentId: "2026001",
    totalMarks: 100,
    awardedMarks: 85,
    submissionDate: "18 Aug 2026",
    dueDate: "20 Aug 2026",
    questionPdf: "math-homework.pdf",
    answerPdf: "riafet-answer.pdf",
  },

  {
    id: 2,
    assignmentName: "English Essay",
    studentId: "2026002",
    totalMarks: 50,
    awardedMarks: 42,
    submissionDate: "23 Aug 2026",
    dueDate: "25 Aug 2026",

    questionPdf: "english-essay.pdf",
    answerPdf: "miarer-answer.pdf",
  },
];

export default function SubmissionsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Submissions</h1>

      {submissions.map((submission) => (
        <StudentSubmissionCard key={submission.id} {...submission} />
      ))}
    </div>
  );
}
