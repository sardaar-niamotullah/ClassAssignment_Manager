"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  submissionSchema,
  SubmissionFormInput,
  SubmissionFormData,
} from "../schemas/submission.schema";
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0.5">
      <p className="font-medium">Total Marks: {totalMarks}</p>

      <div>
        <Input
          type="number"
          placeholder="Awarded Marks"
          {...register("awardedMarks")}
        />
        <p className="min-h-5 text-xs text-red-500">
          {errors.awardedMarks?.message}
        </p>
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Teacher Feedback"
          {...register("feedback")}
          className="w-full rounded-md border p-3"
        />
        <p className="min-h-5 text-xs text-red-500">
          {errors.feedback?.message}
        </p>
      </div>

      <Button type="submit">Save Marks</Button>
    </form>
  );
}
