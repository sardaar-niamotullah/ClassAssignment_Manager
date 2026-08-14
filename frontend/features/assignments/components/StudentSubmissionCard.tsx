"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { CalendarDays, MoreVertical, Trophy } from "lucide-react";

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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">
              {assignmentName}
            </h3>
            <p className="text-sm text-slate-500">Your submission record</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <Trophy className="size-3.5" />
              Student {studentId}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <CalendarDays className="size-3.5" />
              Submitted {submissionDate}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <CalendarDays className="size-3.5" />
              Due {dueDate}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <Trophy className="size-3.5" />
              {awardedMarks ?? "Not graded"} / {totalMarks}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <Link href="#" className="font-medium text-slate-900 underline underline-offset-4">
              Question PDF ({questionPdf})
            </Link>
            <Link href="#" className="font-medium text-slate-900 underline underline-offset-4">
              Student Answer PDF ({answerPdf})
            </Link>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleEditSubmission}>
              Edit Submission
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
