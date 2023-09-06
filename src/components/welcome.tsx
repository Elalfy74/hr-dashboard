interface WelcomeProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export const Welcome = ({ title, subTitle, children }: WelcomeProps) => {
  return (
    <section className='flex items-center justify-between px-6 pt-8 pb-48 bg-mainBlack '>
      <div>
        {subTitle && <h3 className='text-lg text-zinc-400'>{subTitle}</h3>}
        <h1 className='text-4xl font-bold tracking-wide text-white'>{title}</h1>
      </div>
      {children}
    </section>
  );
};
