import { useMutation, useQuery } from '@tanstack/react-query';

import { useToast } from '@/components/ui/use-toast';

import { updateEmployee, getSingleEmployee } from '@/services/employees';

export const useEditEmployee = (onDone: () => void, id: number) => {
  const { toast } = useToast();

  const { data: employeeData, isLoading: getEmployeeLoading } = useQuery({
    queryKey: ['Employee', id],
    queryFn: () => getSingleEmployee(id),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: updateEmployee,
    onSuccess: () => {
      toast({
        description: 'Employee has been updated.',
      });
      onDone();
    },
  });

  return {
    employeeData,
    getEmployeeLoading,
    updateEmployee: mutate,
    updateEmployeeLoading: isLoading,
  };
};
