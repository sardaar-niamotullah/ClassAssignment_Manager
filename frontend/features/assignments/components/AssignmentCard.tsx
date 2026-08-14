"use client";

import { MoreVertical } from "lucide-react";
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
    <div className="flex justify-between rounded-lg border p-4">
      <div className="space-y-1">
        <h3 className="font-semibold text-lg">{name}</h3>

        <p>
          <span className="font-medium">Class:</span> {className}
        </p>

        <p>
          <span className="font-medium">Created By:</span> {createdBy}
        </p>

        <p>
          <span className="font-medium">Number:</span> {assignmentNumber}
        </p>

        <p>
          <span className="font-medium">Submission Deadline:</span>{" "}
          {submissionDeadline}
        </p>
      </div>

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
  );
}
