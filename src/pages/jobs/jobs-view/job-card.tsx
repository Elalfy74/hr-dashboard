import { AppBadge } from '@/components/app-badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import type { Job } from '@/types';

import { JobCardActions } from './job-card-action';

export const JobCard = ({
  job,
  jobsRefetch,
}: {
  job: Job;
  jobsRefetch: () => void;
}) => {
  return (
    <Card className='h-[250px] flex flex-col'>
      <CardHeader className='p-3 pb-0'>
        <JobCardActions id={job.id} jobsRefetch={jobsRefetch} />
      </CardHeader>

      <CardContent className='flex flex-col justify-between flex-1 px-3 pb-3 -mt-3'>
        <div>
          <Avatar className='w-16 h-16'>
            <AvatarImage src={job.logo} alt='logo' />
            <AvatarFallback>{job.title}</AvatarFallback>
          </Avatar>

          <h2 className='mt-1 text-lg font-semibold text-mainBlack'>
            {job.title}
          </h2>
          <p className='mt-2 text-xs font-medium tracking-wide capitalize text-zinc-500'>
            {job.description}
          </p>
        </div>

        <div className='flex gap-3 pt-4 pb-2 '>
          <AppBadge variant='green'>{job.open_positions} Positions</AppBadge>
          <AppBadge variant='purple'>
            {job.full_time ? 'Full Time' : 'Part Time'}
          </AppBadge>
          <AppBadge variant='orange'>{job.remote ? 'Remote' : 'WFO'}</AppBadge>
        </div>
      </CardContent>
    </Card>
  );
};
