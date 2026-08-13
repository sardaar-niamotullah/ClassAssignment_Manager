import { z } from "zod";

export const classSchema = z.object({
  name: z
    .string()
    .min(1, "Class name is required")
    .max(16, "Class name cannot exceed 16 characters"),

  teachers: z.array(z.string()).optional(),

  students: z.array(z.string()).optional(),
});

export type ClassFormData = z.infer<typeof classSchema>;
