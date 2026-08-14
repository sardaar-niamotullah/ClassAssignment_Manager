"use client";

import { useRouter } from "next/navigation";
import { CalendarDays, MoreVertical, Trophy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type StudentAssignmentCardProps = {
  id: number;
  name: string;
  totalMarks: number;
  deadline: string;
  questionPdf: string;
};

export default function StudentAssignmentCard({
  id,
  name,
  totalMarks,
  deadline,
  questionPdf,
}: StudentAssignmentCardProps) {
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/student/assignments/${id}`);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-500">Assigned task</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <CalendarDays className="size-3.5" />
              Due {deadline}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <Trophy className="size-3.5" />
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
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem variant="destructive" onClick={handleSubmit}>
              Submit Assignment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          <Button size="sm" variant="outline" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
