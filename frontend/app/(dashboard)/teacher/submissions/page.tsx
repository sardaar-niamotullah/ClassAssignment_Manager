import TeacherSubmissionCard from "@/features/assignments/components/TeacherSubmissionCard";

const submissions = [
  {
    id: 1,

    assignmentName: "Math Homework",
    className: "Class Six",

    studentId: "2026001",
    studentName: "Riafet",

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
    className: "Class Seven",

    studentId: "2026002",
    studentName: "Miarer",

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
        <TeacherSubmissionCard key={submission.id} {...submission} />
      ))}
    </div>
  );
}
