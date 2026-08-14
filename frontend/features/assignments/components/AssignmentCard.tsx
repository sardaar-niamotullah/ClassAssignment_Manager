"use client";

import {
  CalendarDays,
  Hash,
  MoreVertical,
  School,
  UserCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type AssignmentCardProps = {
  id: number;
  name: string;
  className: string;
  createdBy: string;
  assignmentNumber: number;
  submissionDeadline: string;
};

export default function AssignmentCard({
  id,
  name,
  className,
  createdBy,
  assignmentNumber,
  submissionDeadline,
}: AssignmentCardProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/assignments/${id}`);
  };
  const handleDelete = () => {
    console.log(`Delete assignment ${id}`);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-500">Published assignment</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <School className="size-3.5" />
              {className}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <UserCircle2 className="size-3.5" />
              {createdBy}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <Hash className="size-3.5" />
              #{assignmentNumber}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <CalendarDays className="size-3.5" />
              Due {submissionDeadline}
            </span>
          </div>
        </div>

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
  );
}
