import { EmployeesGrid } from './employees-grid';
import { UseEmployees } from './hooks/use-employees';
import { useState } from 'react';
import { Switch } from './components/switch';
import { EmployeesTable } from './employees-table';

export const EmployeesView = () => {
  const { data, handleNext, canNext, handlePrev, canPrev } = UseEmployees();
  const [isTableView, setIsTableView] = useState(true);

  function handleChangeView() {
    setIsTableView((prev) => !prev);
  }

  if (!data) {
    return null;
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
