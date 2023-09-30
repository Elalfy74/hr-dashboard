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
  const { isOpen, setIsOpened, close } = useDisclosure(false);

  const onActionDone = () => {
    close();
    onDone();
  };

  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } =
    useDeleteEmployee(onActionDone);

  const handleDeleteEmployee = () => deleteEntity(id);

  const EditEmployeeComponent: React.FC = () => (
    <EditEmployee id={id} onDone={onActionDone} />
  );

  return (
    <CardActions
      title='Employee'
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
      isMenuOpen={isOpen}
      setIsMenuOpen={setIsOpened}
      handleDelete={handleDeleteEmployee}
      isDeleteLoading={isDeleting}
      editComponent={<EditEmployeeComponent />}
    />
  );
};
