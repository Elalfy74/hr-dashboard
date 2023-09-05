import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

function reqFun() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
}

export const useDeleteEmployee = (id: number, onDone?: () => void) => {
  const { toast } = useToast();

  const [alertOpen, setAlertOpen] = useState(false);

  const { mutate, isLoading } = useMutation({
    mutationFn: reqFun,
    onSuccess: () => {
      setAlertOpen(false);
      toast({
        description: 'Employee has been deleted with id ' + id,
      });

      onDone && onDone();
    },
  });

  return {
    alertOpen,
    setAlertOpen,
    mutate,
    isLoading,
  };
};
