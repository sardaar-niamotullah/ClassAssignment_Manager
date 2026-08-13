"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { classSchema, ClassFormData } from "../schemas/class.schema";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type ClassFormProps = {
  initialValues?: ClassFormData;
  isEdit?: boolean;
};

const allTeachers = ["Ratul", "Tim", "Bokul", "Nahid"];

const allStudents = [
  "Student One",
  "Student Two",
  "Student Three",
  "Student Four",
  "Student Five",
];

export default function ClassForm({
  initialValues,
  isEdit = false,
}: ClassFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ClassFormData>({
    resolver: zodResolver(classSchema),

    defaultValues: initialValues ?? {
      name: "",
      teachers: [],
      students: [],
    },
  });

  const selectedTeachers = watch("teachers") ?? [];

  const selectedStudents = watch("students") ?? [];

  const toggleTeacher = (teacher: string) => {
    const updated = selectedTeachers.includes(teacher)
      ? selectedTeachers.filter((t) => t !== teacher)
      : [...selectedTeachers, teacher];

    setValue("teachers", updated);
  };

  const toggleStudent = (student: string) => {
    const updated = selectedStudents.includes(student)
      ? selectedStudents.filter((s) => s !== student)
      : [...selectedStudents, student];

    setValue("students", updated);
  };

  const onSubmit = (data: ClassFormData) => {
    console.log(data);

    router.push("/admin/classes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      <div>
        <Input placeholder="Class Name" {...register("name")} />

        <p className="min-h-4 text-xs text-red-500">{errors.name?.message}</p>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Teachers</h3>

        <div className="space-y-2 rounded-lg border p-4">
          {allTeachers.map((teacher) => (
            <div key={teacher} className="flex items-center justify-between">
              <span>{teacher}</span>

              <Checkbox
                checked={selectedTeachers.includes(teacher)}
                onCheckedChange={() => toggleTeacher(teacher)}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-medium">Students</h3>

        <div className="space-y-2 rounded-lg border p-4">
          {allStudents.map((student) => (
            <div key={student} className="flex items-center justify-between">
              <span>{student}</span>

              <Checkbox
                checked={selectedStudents.includes(student)}
                onCheckedChange={() => toggleStudent(student)}
              />
            </div>
          ))}
        </div>
      </div>

      <Button type="submit">{isEdit ? "Save Changes" : "Create Class"}</Button>
    </form>
  );
}
