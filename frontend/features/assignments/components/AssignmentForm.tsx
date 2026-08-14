"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  assignmentSchema,
  AssignmentFormInput,
  AssignmentFormData,
} from "../schemas/assignment.schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">
          {isEdit ? "Edit assignment" : "Create assignment"}
        </CardTitle>
        <CardDescription className="text-sm">
          Set the class, marks, deadline, and upload the question file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Input placeholder="Assignment Name" {...register("name")} />
            <p className="min-h-5 text-xs text-red-500">{errors.name?.message}</p>
          </div>

          <div className="space-y-1">
            <select
              {...register("classId")}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
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

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <Input
                type="number"
                placeholder="Total Marks"
                {...register("totalMarks")}
              />
              <p className="min-h-5 text-xs text-red-500">
                {errors.totalMarks?.message}
              </p>
            </div>

            <div className="space-y-1">
              <Input type="date" {...register("deadline")} />
              <p className="min-h-5 text-xs text-red-500">
                {errors.deadline?.message}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <Input type="file" />
            <p className="mt-2 text-xs text-slate-500">
              Question PDF upload is optional in this demo.
            </p>
          </div>

          <div className="flex justify-end pt-1">
            <Button type="submit">
              {isEdit ? "Save Changes" : "Create Assignment"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
