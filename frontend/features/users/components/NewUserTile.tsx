"use client";

import { BadgeCheck, MoreVertical, Trash2, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <UserRound className="size-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-950">{name}</h3>
            <p className="text-sm text-slate-500">{email}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
                <BadgeCheck className="size-3.5" />
                Pending role
              </span>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
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

      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={handleAssignTeacher}>
          Set as Teacher
        </Button>
        <Button size="sm" variant="secondary" onClick={handleAssignStudent}>
          Set as Student
        </Button>
        <Button size="sm" variant="destructive" onClick={handleDelete}>
          <Trash2 className="size-4" />
          Delete
        </Button>
      </div>
    </div>
  );
}
