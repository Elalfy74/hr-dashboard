import { useState } from 'react';

import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { CardActions } from '@/components/card-actions';
import { useDisclosure } from '@/hooks/use-disclosure';

interface EmployeeCardActions {
  id: number;
  employeesRefetch: () => void;
}

export const EmployeeCardActions = ({
  id,
  employeesRefetch,
}: EmployeeCardActions) => {
  const { isOpen, setIsOpened, close } = useDisclosure();

  const onDeleteDone = () => {
    close();
    employeesRefetch();
  };

  const { alertOpen, setAlertOpen, isLoading, deleteEmployee } =
    useDeleteEmployee(onDeleteDone);

  //TODO change edit component
  return (
    <CardActions
      title='Employee'
      alertOpen={alertOpen}
      setAlertOpen={setAlertOpen}
      isMenuOpen={isOpen}
      setIsMenuOpen={setIsOpened}
      handleDelete={() => deleteEmployee(id)}
      isLoading={isLoading}
      editComponent={<span>Edit</span>}
    />
  );
};
