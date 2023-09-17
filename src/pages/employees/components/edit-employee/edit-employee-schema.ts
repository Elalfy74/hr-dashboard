import { z } from 'zod';

import { addEmployeeSchema } from '../add-employee/add-employee-schema';

export const editEmployeeSchema = addEmployeeSchema.partial();

export interface EditEmployeeFormState
  extends z.infer<typeof editEmployeeSchema> {}
