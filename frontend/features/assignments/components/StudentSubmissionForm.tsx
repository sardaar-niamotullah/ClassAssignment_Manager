"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type StudentSubmissionFormProps = {
  isEdit?: boolean;

  assignmentName: string;

  totalMarks: number;

  deadline: string;

  questionPdf: string;
};

export default function StudentSubmissionForm({
  isEdit = false,
  assignmentName,
  totalMarks,
  deadline,
  questionPdf,
}: StudentSubmissionFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(isEdit ? "Submission Updated" : "Assignment Submitted");

    router.push("/student/submissions");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border p-4">
      <div>
        <h2 className="font-semibold">{assignmentName}</h2>

        <p className="text-sm text-muted-foreground">
          Total Marks: {totalMarks}
        </p>

        <p className="text-sm text-muted-foreground">Deadline: {deadline}</p>
      </div>

      <div>
        <p className="text-sm font-medium">Question PDF</p>

        <a href="#" className="text-sm underline">
          {questionPdf}
        </a>
      </div>

      <div>
        <Input type="file" accept=".pdf" />

        <p className="text-xs text-muted-foreground mt-1">
          Upload your answer PDF
        </p>
      </div>

      <Button type="submit">
        {isEdit ? "Update Submission" : "Submit Assignment"}
      </Button>
    </form>
  );
}
