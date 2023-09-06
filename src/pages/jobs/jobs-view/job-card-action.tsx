import { useState } from 'react';

import { CardActions } from '@/components/card-actions';

import { useDeleteJob } from './hooks/use-delete-employee';

interface JobCardActions {
  id: number;
  jobsRefetch: () => void;
}

export const JobCardActions = ({ id, jobsRefetch }: JobCardActions) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onDeleteDone = () => {
    setIsMenuOpen(false);
    jobsRefetch();
  };

  const { alertOpen, setAlertOpen, isLoading, deleteJob } =
    useDeleteJob(onDeleteDone);

  return (
    <CardActions
      alertOpen={alertOpen}
      handleDelete={() => deleteJob(id)}
      isLoading={isLoading}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      setAlertOpen={setAlertOpen}
      title='Job'
    />
  );
};
