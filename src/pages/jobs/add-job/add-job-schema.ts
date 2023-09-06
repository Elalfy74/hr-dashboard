import { z } from 'zod';

export const addJobSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2),
  logo: z.custom<File>((v) => v instanceof File, {
    message: 'Logo is required',
  }),
  open_positions: z.number().min(1).max(10),
  full_time: z.boolean(),
  remote: z.boolean(),
  active: z.boolean().default(true),
});

export interface AddJobFormState extends z.infer<typeof addJobSchema> {}
