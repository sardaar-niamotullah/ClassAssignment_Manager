"use client";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpenCheck, Users, UserRoundPen } from "lucide-react";

import { classSchema, ClassFormData } from "../schemas/class.schema";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    control,
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

  const selectedTeachers = useWatch({ control, name: "teachers" }) ?? [];
  const selectedStudents = useWatch({ control, name: "students" }) ?? [];

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
    <Card className="border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <CardHeader className="pb-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
          <UserRoundPen className="size-3.5 text-slate-900" />
          Class setup
        </div>
        <CardTitle className="pt-3 text-2xl">
          {isEdit ? "Edit class" : "Create class"}
        </CardTitle>
        <CardDescription className="text-sm">
          Name the class and assign the right teachers and students.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <Input
              placeholder="Class Name"
              className="h-10 rounded-xl"
              {...register("name")}
            />
            <p className="min-h-4 text-xs text-red-500">{errors.name?.message}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <BookOpenCheck className="size-4 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Teachers</h3>
                  <p className="text-xs text-slate-500">Pick one or more instructors</p>
                </div>
              </div>

              <div className="space-y-2">
                {allTeachers.map((teacher) => (
                  <label
                    key={teacher}
                    className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium text-slate-900">{teacher}</span>
                    <Checkbox
                      checked={selectedTeachers.includes(teacher)}
                      onCheckedChange={() => toggleTeacher(teacher)}
                    />
                  </label>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-9 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Users className="size-4 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Students</h3>
                  <p className="text-xs text-slate-500">Assign the enrolled students</p>
                </div>
              </div>

              <div className="space-y-2">
                {allStudents.map((student) => (
                  <label
                    key={student}
                    className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    <span className="text-sm font-medium text-slate-900">{student}</span>
                    <Checkbox
                      checked={selectedStudents.includes(student)}
                      onCheckedChange={() => toggleStudent(student)}
                    />
                  </label>
                ))}
              </div>
            </section>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="px-5">
              {isEdit ? "Save Changes" : "Create Class"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
