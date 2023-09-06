import { useState } from 'react';

import { FormDialog } from '@/components/form-dialog';
import { AddJobForm } from './add-job-form';

export const AddJob = () => {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <FormDialog open={open} onOpenChange={setOpen} label='Job'>
      <AddJobForm handleClose={handleClose} />
    </FormDialog>
  );
};
