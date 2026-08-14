"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, FileText, MoreVertical, School } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type TeacherAssignmentCardProps = {
  id: number;
  name: string;
  totalMarks: number;
  deadline: string;
  className: string;
  isPublished: boolean;
  questionPdf: string;
};

export default function TeacherAssignmentCard({
  id,
  name,
  totalMarks,
  deadline,
  className,
  isPublished,
  questionPdf,
}: TeacherAssignmentCardProps) {
  const router = useRouter();

  const handlePublish = () => {
    console.log("Publish", id);
  };

  const handleEdit = () => {
    router.push(`/teacher/assignments/${id}`);
  };

  const handleDelete = () => {
    console.log("Delete", id);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-500">Teacher assignment</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <School className="size-3.5" />
              {className}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <CalendarDays className="size-3.5" />
              Due {deadline}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <FileText className="size-3.5" />
              {totalMarks} marks
            </span>
          </div>

          <Link
            href="#"
            className="text-sm font-medium text-slate-900 underline underline-offset-4"
          >
            {questionPdf}
          </Link>
        </div>

        <div className="flex flex-col items-end gap-2">
        {isPublished ? (
          <p className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            Published
          </p>
        ) : (
          <Button size="sm" onClick={handlePublish}>
            Publish
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleEdit}>
              Edit Assignment
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onClick={handleDelete}>
              Delete Assignment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
