import { FormDialog } from '@/components/form-dialog';
import { useDisclosure } from '@/hooks/use-disclosure';

import { AddJobForm } from './add-job-form';

export const AddJob = () => {
  const { isOpen, setIsOpened, close } = useDisclosure(false);

  return (
    <FormDialog
      label='Job'
      action='add'
      open={isOpen}
      onOpenChange={setIsOpened}
    >
      <AddJobForm onDone={close} />
    </FormDialog>
  );
};
