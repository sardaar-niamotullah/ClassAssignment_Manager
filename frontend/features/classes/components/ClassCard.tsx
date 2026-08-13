"use client";

import { MoreVertical } from "lucide-react";
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
    <div className="flex justify-between rounded-lg border p-4">
      <div className="space-y-1">
        <p>
          <span className="font-semibold">{name}</span>
        </p>

        <p>
          <span className="font-medium">Teachers:</span> {teachers.join(", ")}
        </p>

        <p>
          <span className="font-medium">Students:</span> {studentCount}
        </p>

        <p>
          <span className="font-medium">Assignments:</span> {assignmentCount}
        </p>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-2 hover:bg-accent">
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
  );
}
