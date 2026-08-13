"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { classSchema, ClassFormData } from "../schemas/class.schema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

type ClassFormProps = {
  initialValues?: ClassFormData;
  isEdit?: boolean;
};

export default function ClassForm({
  initialValues,
  isEdit = false,
}: ClassFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClassFormData>({
    resolver: zodResolver(classSchema),

    defaultValues: initialValues ?? {
      name: "",
      teachers: [],
      students: [],
    },
  });

  const onSubmit = (data: ClassFormData) => {
    console.log(data);

    router.push("/admin/classes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0.5 max-w-md">
      <div>
        <Input placeholder="Class Name" {...register("name")} />
        <p className="min-h-4 text-xs text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <Input
          placeholder="Teachers (comma separated)"
          defaultValue={initialValues?.teachers?.join(", ") ?? ""}
        />
        <p className="text-xs text-muted-foreground">Optional</p>
      </div>

      <div>
        <Input
          placeholder="Students (comma separated)"
          defaultValue={initialValues?.students?.join(", ") ?? ""}
        />
        <p className="text-xs text-muted-foreground">Optional</p>
      </div>

      <div className="mt-4">
        <Button type="submit">
          {isEdit ? "Save Changes" : "Create Class"}
        </Button>
      </div>
    </form>
  );
}
