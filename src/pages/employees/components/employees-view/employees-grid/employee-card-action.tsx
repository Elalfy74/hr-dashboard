import { useState } from 'react';

import { useDeleteEmployee } from '../hooks/use-delete-employee';
import { CardActions } from '@/components/card-actions';

interface EmployeeCardActions {
  id: number;
  employeesRefetch: () => void;
}

export const EmployeeCardActions = ({
  id,
  employeesRefetch,
}: EmployeeCardActions) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onDeleteDone = () => {
    setIsMenuOpen(false);
    employeesRefetch();
  };

  const { alertOpen, setAlertOpen, isLoading, deleteEmployee } =
    useDeleteEmployee(onDeleteDone);

  return (
    <CardActions
      alertOpen={alertOpen}
      handleDelete={() => deleteEmployee(id)}
      isLoading={isLoading}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      setAlertOpen={setAlertOpen}
      title='Employee'
    />
  );
};
