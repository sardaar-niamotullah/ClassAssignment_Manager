"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submissionSchema,
  SubmissionFormInput,
  SubmissionFormData,
} from "../schemas/submission.schema";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubmissionMarkFormProps = {
  totalMarks: number;
  initialMarks?: number;
};

export default function SubmissionMarkForm({
  totalMarks,
  initialMarks,
}: SubmissionMarkFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmissionFormInput, unknown, SubmissionFormData>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      awardedMarks: initialMarks ?? 0,
      feedback: "",
    },
  });

  const onSubmit = (data: SubmissionFormData) => {
    console.log(data);
    router.push("/teacher/submissions");
  };

  return (
    <Card className="border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">Grade submission</CardTitle>
        <CardDescription className="text-sm">
          Review the work, assign marks, and leave feedback for the student.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm text-slate-600">Total marks</p>
            <p className="text-2xl font-semibold text-slate-950">{totalMarks}</p>
          </div>

          <div className="space-y-1">
            <Input
              type="number"
              placeholder="Awarded Marks"
              {...register("awardedMarks")}
            />
            <p className="min-h-5 text-xs text-red-500">
              {errors.awardedMarks?.message}
            </p>
          </div>

          <div className="space-y-1">
            <textarea
              rows={5}
              placeholder="Teacher Feedback"
              {...register("feedback")}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
            />
            <p className="min-h-5 text-xs text-red-500">
              {errors.feedback?.message}
            </p>
          </div>

          <div className="flex justify-end pt-1">
            <Button type="submit">Save Marks</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
