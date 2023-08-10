import { useMutation } from '@tanstack/react-query';

import { addEmployee } from '@/services/employees';

import { toast } from '@/components/ui/use-toast';

export const UseAddEmployee = (handleClose: () => void) => {
  const { mutate, isLoading } = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      toast({
        description: 'Employee has been added.',
      });
      handleClose();
    },
  });

  return {
    addEmployee: mutate,
    isLoading,
  };
};
