"use client";

import { useRouter } from "next/navigation";
import { MoreVertical } from "lucide-react";
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
    <div className="flex justify-between rounded-lg border p-4">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>Total Marks: {totalMarks}</p>
        <p>Deadline: {deadline}</p>
        <Link href="#" className="text-sm underline">
          {questionPdf}
        </Link>
      </div>
      <div className="flex flex-col items-end gap-2">
        {isPublished ? (
          <p className="text-sm font-medium text-green-600">
            Published to {className}
          </p>
        ) : (
          <Button size="sm" onClick={handlePublish}>
            Publish
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md p-2 hover:bg-accent">
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
