import { z } from 'zod';

export const addEmployeeSchema = z.object({
  first_name: z.string().min(1).max(50),
  last_name: z.string().min(1).max(50),
  email: z.string().email(),
  designation: z.string().min(2),
  avatar: z.custom<File>((v) => v instanceof File, {
    message: 'Avatar is required',
  }),
  department: z.number(),
  date_of_joining: z.date(),
  salary: z.number().min(8000).max(50000),
  experience_years: z.number().min(0).max(50),
  active: z.boolean().default(true),
});

export interface AddEmployeeFormState
  extends z.infer<typeof addEmployeeSchema> {}
