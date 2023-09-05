import { useState } from 'react';

import { EmployeesGrid } from './employees-grid';
import { EmployeesTable } from './employees-table';
import { useEmployees } from './hooks/use-employees';
import { Switch } from './components/switch';
import { Loader } from '@/components/ui/loader';

export const EmployeesView = () => {
  const { data, error, isLoading, handleNext, canNext, handlePrev, canPrev } =
    useEmployees();
  const [isTableView, setIsTableView] = useState(true);

  function handleChangeView() {
    setIsTableView((prev) => !prev);
  }

  if (error) {
    return (
      <div className='text-lg font-semibold text-center text-white'>
        Something Went Wrong
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className='text-white center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='flex flex-col'>
      <div className='self-end mb-4'>
        <Switch isTableView={isTableView} handleChangeView={handleChangeView} />
      </div>

      {isTableView ? (
        <EmployeesTable
          data={data}
          handleNext={handleNext}
          handlePrev={handlePrev}
          canNext={canNext}
          canPrev={canPrev}
        />
      ) : (
        <EmployeesGrid
          data={data}
          handleNext={handleNext}
          handlePrev={handlePrev}
          canNext={canNext}
          canPrev={canPrev}
        />
      )}
    </div>
  );
};
