"use client";

import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NewUserTileProps = {
  id: number;
  name: string;
  email: string;
};

export default function NewUserTile({ id, name, email }: NewUserTileProps) {
  const handleAssignTeacher = () => {
    console.log(`Assign user ${id} as Teacher`);
  };

  const handleAssignStudent = () => {
    console.log(`Assign user ${id} as Student`);
  };

  const handleDelete = () => {
    console.log(`Delete user ${id}`);
  };

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-semibold">{name}</h3>

        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-md p-2 hover:bg-accent">
          <MoreVertical className="size-5" />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleAssignTeacher}>
            Set as Teacher
          </DropdownMenuItem>

          <DropdownMenuItem onClick={handleAssignStudent}>
            Set as Student
          </DropdownMenuItem>

          <DropdownMenuItem variant="destructive" onClick={handleDelete}>
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
