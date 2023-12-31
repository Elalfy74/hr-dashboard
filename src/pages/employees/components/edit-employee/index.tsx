import { FormDialog } from '@/components/form-dialog';
import { Loader } from '@/components/ui/loader';

import { useDisclosure } from '@/hooks/use-disclosure';

import { useEditEmployee } from './hooks/use-edit-employee';

import { EditEmployeeForm } from './edit-employee-form';

interface EditEmployeeProps {
  id: number;
  onDone: () => void;
  children?: React.ReactNode;
}

export const EditEmployee = (props: EditEmployeeProps) => {
  const { id, onDone, children } = props;

  // Form Dialog
  const { isOpen, setIsOpened } = useDisclosure(false);

  return (
    <FormDialog
      action='add'
      open={isOpen}
      onOpenChange={setIsOpened}
      label='Employee'
      triggerComponent={
        children ?? (
          <button className='w-full text-left cursor-pointer px-2 py-1.5'>
            Edit
          </button>
        )
      }
    >
      <EditEmployeeFormDataSupply id={id} onDone={onDone} />
    </FormDialog>
  );
};

// I had to make this component
// because i must supply the form with initial values

interface EditEmployeeFormDataSupplyProps {
  id: number;
  onDone: () => void;
}

export const EditEmployeeFormDataSupply = ({
  id,
  onDone,
}: EditEmployeeFormDataSupplyProps) => {
  const {
    employeeData,
    getEmployeeLoading,
    updateEmployee,
    updateEmployeeLoading,
  } = useEditEmployee(onDone, id);

  return (
    <>
      {getEmployeeLoading || !employeeData ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : (
        <EditEmployeeForm
          id={id}
          employeeData={employeeData}
          updateEmployee={updateEmployee}
          updateEmployeeLoading={updateEmployeeLoading}
        />
      )}
    </>
  );
};
