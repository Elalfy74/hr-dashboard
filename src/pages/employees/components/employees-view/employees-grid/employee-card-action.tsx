import { useDisclosure } from '@/hooks/use-disclosure';

import { CardActions } from '@/components/card-actions';

import { useDeleteEmployee } from '../hooks/use-delete-employee';

import { EditEmployee } from '../../edit-employee';

interface EmployeeCardActions {
  id: number;
  onDone: () => void;
}

export const EmployeeCardActions = ({ id, onDone }: EmployeeCardActions) => {
  // For Menu
  const { isOpen, setIsOpened, close } = useDisclosure();

  // Form Dialog
  const {
    isOpen: formIsOpen,
    setIsOpened: setOpenForm,
    close: closeForm,
  } = useDisclosure(false);

  const onActionDone = () => {
    close();
    onDone();
  };

  const { alertOpen, setAlertOpen, deleteEmployeeLoading, deleteEmployee } =
    useDeleteEmployee(onActionDone);

  const handleDeleteEmployee = () => deleteEmployee(id);

  const EditEmployeeComponent = () => (
    <EditEmployee
      id={id}
      onUpdateDone={onActionDone}
      isOpen={formIsOpen}
      setIsOpened={setOpenForm}
      close={closeForm}
    />
  );

  return (
    <CardActions
      title='Employee'
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
      isMenuOpen={isOpen}
      setIsMenuOpen={setIsOpened}
      handleDelete={handleDeleteEmployee}
      isDeleteLoading={deleteEmployeeLoading}
      editComponent={<EditEmployeeComponent />}
    />
  );
};
