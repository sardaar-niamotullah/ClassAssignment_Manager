"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assignmentSchema,
  AssignmentFormInput,
  AssignmentFormData,
} from "../schemas/assignment.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AssignmentFormProps = {
  isEdit?: boolean;
  initialValues?: AssignmentFormInput;
};

const mockClasses = [
  {
    id: "1",
    name: "Class Six",
  },
  {
    id: "2",
    name: "Class Seven",
  },
];

export default function AssignmentForm({
  isEdit = false,
  initialValues,
}: AssignmentFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssignmentFormInput, unknown, AssignmentFormData>({
    resolver: zodResolver(assignmentSchema),
    defaultValues: initialValues ?? {
      name: "",
      classId: "",
      totalMarks: 100,
      deadline: "",
    },
  });

  const onSubmit = (data: AssignmentFormData) => {
    console.log(data);
    router.push("/teacher/assignments");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0.5">
      <div>
        <Input placeholder="Assignment Name" {...register("name")} />
        <p className="min-h-5 text-xs text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <select
          {...register("classId")}
          className="w-full rounded-md border p-2"
        >
          <option value="">Select Class</option>
          {mockClasses.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <p className="min-h-5 text-xs text-red-500">
          {errors.classId?.message}
        </p>
      </div>

      <div>
        <Input
          type="number"
          placeholder="Total Marks"
          {...register("totalMarks")}
        />
        <p className="min-h-5 text-xs text-red-500">
          {errors.totalMarks?.message}
        </p>
      </div>

      <div>
        <Input type="date" {...register("deadline")} />
        <p className="min-h-5 text-xs text-red-500">
          {errors.deadline?.message}
        </p>
      </div>

      <div>
        <Input type="file" />
        <p className="text-xs text-muted-foreground">
          Question PDF (optional for now)
        </p>
      </div>
      <div className="mt-4">
        <Button type="submit">
          {isEdit ? "Save Changes" : "Create Assignment"}
        </Button>
      </div>
    </form>
  );
}
