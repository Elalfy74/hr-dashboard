import { z } from 'zod';
import { addJobSchema } from '../add-job/add-job-schema';

export const editJobSchema = addJobSchema.partial();

export interface EditJobFormState extends z.infer<typeof editJobSchema> {}
