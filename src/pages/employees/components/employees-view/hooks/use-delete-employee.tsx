import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { deleteEmployee } from '@/services/employees';
import { useDisclosure } from '@/hooks/use-disclosure';

export const useDeleteEmployee = (onDone: () => void = () => {}) => {
  const { toast } = useToast();

  const {
    isOpen: alertOpen,
    setIsOpened: setAlertOpen,
    close,
  } = useDisclosure();

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      close();
      toast({
        description: 'Employee has been deleted ',
      });

      onDone();
    },
  });

  return {
    alertOpen,
    setAlertOpen,
    deleteEmployee: mutate,
    isLoading,
  };
};
