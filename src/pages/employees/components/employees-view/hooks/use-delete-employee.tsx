import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { deleteEmployee } from '@/services/employees';

export const useDeleteEmployee = (onDone: () => void = () => {}) => {
  const { toast } = useToast();

  const [alertOpen, setAlertOpen] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      setAlertOpen(false);
      toast({
        description: 'Employee has been deleted ',
      });

      onDone();
    },
  });

  return {
    alertOpen,
    setAlertOpen,
    mutate,
    isLoading,
  };
};
