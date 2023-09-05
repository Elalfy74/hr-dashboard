import { useMutation } from '@tanstack/react-query';

import { addEmployee } from '@/services/employees';

import { useToast } from '@/components/ui/use-toast';

export const useAddEmployee = (handleClose: () => void) => {
  const { toast } = useToast();

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
