import { AddEmployee } from '@/pages/employees/components/add-employee';

interface WelcomeProps {
  title: string;
  subTitle?: string;
}

export const Welcome = ({ title, subTitle }: WelcomeProps) => {
  return (
    <section className='flex items-center justify-between px-6 pt-8 pb-28 bg-mainBlack'>
      <div>
        {subTitle && <h3 className='text-lg text-zinc-400'>{subTitle}</h3>}
        <h1 className='text-4xl font-bold tracking-wide text-white'>{title}</h1>
      </div>
      <AddEmployee />
    </section>
  );
};
