import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const ProjectsOverview = () => {
  return (
    <Card className='flex flex-col h-full'>
      <CardHeader>
        <CardTitle>Projects Overview</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col justify-between flex-1 '>
        {projectsOverview.map(({ variant, ...project }) => (
          <Card
            key={project.id}
            className={cn({
              'bg-mainPurple': variant === 'purple',
              'bg-mainCyan': variant === 'cyan',
              'bg-mainGreen': variant === 'green',
            })}
          >
            <CardHeader className='py-4'>
              <CardTitle>{project.number}</CardTitle>
              <CardDescription className='capitalize'>
                {project.title}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

const projectsOverview = [
  {
    id: 1,
    number: 125,
    title: 'total projects',
    variant: 'purple',
  },
  {
    id: 2,
    number: 13,
    title: 'projects on hold',
    variant: 'cyan',
  },
  {
    id: 3,
    number: 4,
    title: 'upcoming projects',
    variant: 'green',
  },
];
