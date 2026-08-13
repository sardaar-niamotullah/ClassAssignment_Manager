import { z } from "zod";

export const submissionSchema = z.object({
  awardedMarks: z.coerce.number().min(0),
  feedback: z.string().max(500).optional(),
});

export type SubmissionFormInput = z.input<typeof submissionSchema>;
export type SubmissionFormData = z.output<typeof submissionSchema>;