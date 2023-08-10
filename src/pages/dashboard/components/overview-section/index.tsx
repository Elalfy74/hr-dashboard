import { ProjectsOverview } from './project-overview';
import { RecentApplications } from './recent-applications';
import { UpcomingInterviews } from './upcoming-interviews';

export const OverviewSection = () => {
  return (
    <div className='grid grid-cols-7 gap-main'>
      <div className='col-span-2'>
        <RecentApplications />
      </div>
      <div className='col-span-4'>
        <UpcomingInterviews />
      </div>
      <div>
        <ProjectsOverview />
      </div>
    </div>
  );
};
