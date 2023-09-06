import { useState } from 'react';

import { FormDialog } from '@/components/form-dialog';
import { Loader } from '@/components/ui/loader';

import { EditJobForm } from './edit-job-form';
import { useEditJob } from './hooks/use-edit-job';

export const EditJob = ({ id }: { id: number }) => {
  const { jobData, getJobLoading, updateJob, updateJobLoading } = useEditJob(
    handleClose,
    id
  );

  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <FormDialog
      action='edit'
      open={open}
      onOpenChange={setOpen}
      label='Job'
      triggerComponent={
        <button className='w-full text-left cursor-pointer px-2 py-1.5'>
          Edit
        </button>
      }
    >
      {getJobLoading || !jobData ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : (
        <EditJobForm
          handleClose={handleClose}
          id={id}
          jobData={jobData}
          updateJob={updateJob}
          updateJobLoading={updateJobLoading}
        />
      )}
    </FormDialog>
  );
};
