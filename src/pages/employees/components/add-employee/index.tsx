import { useDisclosure } from '@/hooks/use-disclosure';

import { FormDialog } from '@/components/form-dialog';

import { AddEmployeeForm } from './add-employee-form';

export const AddEmployee = () => {
  const { isOpen, setIsOpened, close } = useDisclosure();

  return (
    <FormDialog
      action='add'
      open={isOpen}
      onOpenChange={setIsOpened}
      label='Employee'
    >
      <AddEmployeeForm onDone={close} />
    </FormDialog>
  );
};
