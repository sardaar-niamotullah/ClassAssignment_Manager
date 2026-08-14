"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type StudentSubmissionCardProps = {
  id: number;
  assignmentName: string;
  studentId: string;
  totalMarks: number;
  awardedMarks?: number;
  submissionDate: string;
  dueDate: string;
  questionPdf: string;
  answerPdf: string;
};

export default function StudentSubmissionCard({
  id,
  assignmentName,
  studentId,
  totalMarks,
  awardedMarks,
  submissionDate,
  dueDate,
  questionPdf,
  answerPdf,
}: StudentSubmissionCardProps) {
  const router = useRouter();

  const handleEditSubmission = () => {
    router.push(`/student/submissions/${id}`);
  };

  return (
    <div className="rounded-lg border p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">{assignmentName}</h3>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md p-2 hover:bg-accent">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleEditSubmission}>
              Edit Submission
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-3 space-y-1">
        <p>
          {studentId}
        </p>

        <p>Total Marks: {totalMarks}</p>

        <p>Awarded Marks: {awardedMarks ?? "Not Graded"}</p>

        <p>Submission Date: {submissionDate}</p>

        <p>Due Date: {dueDate}</p>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <Link href="#" className="text-sm underline">
          Question PDF ({questionPdf})
        </Link>

        <Link href="#" className="text-sm underline">
          Student Answer PDF ({answerPdf})
        </Link>
      </div>
    </div>
  );
}
