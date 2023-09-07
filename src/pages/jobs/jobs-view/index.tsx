import { useState } from 'react';
import { animated, useTrail } from '@react-spring/web';

import { Pagination } from '@/components/pagination';
import { Loader } from '@/components/ui/loader';
import { Switch } from '@/components/switch';

import { useJobs } from './hooks/use-jobs';
import { JobCard } from './job-card';

export const JobsView = () => {
  const {
    jobsData,
    jobsError,
    jobsLoading,
    pageCount,
    handlePageChange,
    currentPage,
    jobsRefetch,
    isActiveJobsView,
    toggleIsActive,
  } = useJobs();

  const lengthOfTrails = jobsData?.length || 0;

  const trails = useTrail(lengthOfTrails, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  if (jobsError) {
    return (
      <div className='text-lg font-semibold text-center text-white'>
        Something Went Wrong
      </div>
    );
  }

  if (jobsLoading || !jobsData) {
    return (
      <div className='text-white center'>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className='mb-4 '>
        <Switch
          isFirstActive={isActiveJobsView}
          toggleActive={toggleIsActive}
          firstView={<span>Active</span>}
          secondView={<span>Inactive</span>}
          iconSize={false}
        />
      </div>
      <div className='grid gap-main grid-cols-autoFill'>
        {trails.map((props, i) => (
          <animated.div style={props} key={jobsData[i].id}>
            <JobCard job={jobsData[i]} jobsRefetch={jobsRefetch} />
          </animated.div>
        ))}
      </div>
      {pageCount && (
        <div className='mt-4 center'>
          <Pagination
            handlePageClick={(e) => handlePageChange(e.selected)}
            pageCount={pageCount}
            initialPage={currentPage}
          />
        </div>
      )}
    </>
  );
};
