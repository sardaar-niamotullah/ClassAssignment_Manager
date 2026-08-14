"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">
          {isEdit ? "Edit submission" : "Submit assignment"}
        </CardTitle>
        <CardDescription className="text-sm">
          Review the task details and upload your answer PDF.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-lg font-semibold text-slate-950">{assignmentName}</h2>
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-white px-2.5 py-1">
                Total marks: {totalMarks}
              </span>
              <span className="rounded-full bg-white px-2.5 py-1">
                Deadline: {deadline}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-900">Question PDF</p>
            <a href="#" className="text-sm font-medium text-slate-900 underline underline-offset-4">
              {questionPdf}
            </a>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <Input type="file" accept=".pdf" />
            <p className="mt-2 text-xs text-slate-500">
              Upload your answer PDF
            </p>
          </div>

          <div className="flex justify-end">
            <Button type="submit">
              {isEdit ? "Update Submission" : "Submit Assignment"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
