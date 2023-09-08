import { FormDialog } from '@/components/form-dialog';
import { Loader } from '@/components/ui/loader';
import { useDisclosure } from '@/hooks/use-disclosure';

import { EditJobForm } from './edit-job-form';
import { useEditJob } from './hooks/use-edit-job';

interface EditJobProps {
  id: number;
  onUpdateDone: () => void;
}

export const EditJob = ({ id, onUpdateDone }: EditJobProps) => {
  // Dialog
  const { isOpen, setIsOpened, close } = useDisclosure(false);

  const onDone = () => {
    close();
    onUpdateDone();
  };

  return (
    <FormDialog
      action='edit'
      open={isOpen}
      onOpenChange={setIsOpened}
      label='Job'
      triggerComponent={
        <button className='w-full text-left cursor-pointer px-2 py-1.5'>
          Edit
        </button>
      }
    >
      <EditJobFormDataSupply id={id} onDone={onDone} />
    </FormDialog>
  );
};

// I had to make this component
// because i must supply the form with initial values

interface EditJobFormDataSupplyProps {
  id: number;
  onDone: () => void;
}

export const EditJobFormDataSupply = ({
  id,
  onDone,
}: EditJobFormDataSupplyProps) => {
  const { jobData, getJobLoading, updateJob, updateJobLoading } = useEditJob(
    onDone,
    id
  );

  return (
    <>
      {getJobLoading || !jobData ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : (
        <EditJobForm
          handleClose={close}
          id={id}
          jobData={jobData}
          updateJob={updateJob}
          updateJobLoading={updateJobLoading}
        />
      )}
    </>
  );
};
