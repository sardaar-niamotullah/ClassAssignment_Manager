"use client";

import { Building2, BookOpen, MoreVertical, Users } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ClassCardProps = {
  id: number;
  name: string;
  teachers: string[];
  studentCount: number;
  assignmentCount: number;
};

export default function ClassCard({
  id,
  name,
  teachers,
  studentCount,
  assignmentCount,
}: ClassCardProps) {
  const router = useRouter();
  // const handleEdit = () => {
  //   console.log(`Edit class ${id}`);
  // };
  const handleEdit = () => {
    router.push(`/admin/classes/${id}/edit`);
  };

  const handleDelete = () => {
    console.log(`Delete class ${id}`);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <Building2 className="size-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-950">{name}</h3>
              <p className="text-sm text-slate-500">Managed class</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <Users className="size-3.5" />
              {studentCount} students
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
              <BookOpen className="size-3.5" />
              {assignmentCount} assignments
            </span>
          </div>

          <p className="text-sm text-slate-600">
            <span className="font-medium text-slate-900">Teachers:</span>{" "}
            {teachers.join(", ")}
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleEdit}>Edit Class</DropdownMenuItem>

            <DropdownMenuItem variant="destructive" onClick={handleDelete}>
              Delete Class
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
