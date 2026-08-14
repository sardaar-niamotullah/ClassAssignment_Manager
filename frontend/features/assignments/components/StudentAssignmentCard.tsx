"use client";

import { useRouter } from "next/navigation";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md p-2 hover:bg-accent">
            <MoreVertical className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem variant="destructive" onClick={handleSubmit}>
              Submit Assignment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
