import { deleteEmployee } from '@/services/employees';
import { useDeleteEntity } from '@/hooks/use-delete-entity';

export const useDeleteEmployee = (onDone: () => void = () => {}) => {
  const { alertOpen, setAlertOpen, deleteEntity, isDeleting } = useDeleteEntity(
    {
      deleteFun: deleteEmployee,
      entity: 'Employee',
      onDone: onDone,
    }
  );

  return {
    alertOpen,
    setAlertOpen,
    deleteEntity,
    isDeleting,
  };
};
