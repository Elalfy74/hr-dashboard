import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { CardActions } from '@/components/card-actions';
import { useDisclosure } from '@/hooks/use-disclosure';

interface EmployeeCardActions {
  id: number;
  onDone: () => void;
}

export const EmployeeCardActions = ({ id, onDone }: EmployeeCardActions) => {
  const { isOpen, setIsOpened, close } = useDisclosure();

  const onDeleteDone = () => {
    close();
    onDone();
  };

  const { alertOpen, setAlertOpen, deleteEmployeeLoading, deleteEmployee } =
    useDeleteEmployee(onDeleteDone);

  const handleDeleteEmployee = () => deleteEmployee(id);

  //TODO change edit component
  const EditEmployeeComponent = () => <span>Edit</span>;

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
