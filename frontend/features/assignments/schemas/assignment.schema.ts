import { z } from "zod";

export const assignmentSchema = z.object({
  name: z
    .string()
    .min(1, "Assignment name is required")
    .max(50, "Assignment name cannot exceed 50 characters"),
  classId: z.string().min(1, "Please select a class"),
  totalMarks: z.coerce.number().min(1, "Marks must be at least 1"),
  deadline: z.string().min(1, "Please select a deadline"),
});

export type AssignmentFormInput = z.input<typeof assignmentSchema>;
export type AssignmentFormData = z.output<typeof assignmentSchema>;