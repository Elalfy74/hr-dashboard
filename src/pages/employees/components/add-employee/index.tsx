import { useState } from 'react';

import { FormDialog } from '@/components/form-dialog';

import AddEmployeeForm from './add-employee-form';

export const AddEmployee = () => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <FormDialog
      action='add'
      open={open}
      onOpenChange={setOpen}
      label='Employee'
    >
      <AddEmployeeForm handleClose={handleClose} />
    </FormDialog>
  );
};
