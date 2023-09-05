import { Link } from 'react-router-dom';

import { Nav } from './nav';
import { LoggedUser } from './logged-user';

export const Header = () => {
  return (
    <header className='sticky flex justify-between top-0 left-0 z-10 px-6 py-4 border-b bg-[#212326] text-zinc-300 border-b-zinc-500'>
      <div className='flex items-center'>
        <Link
          to='/dashboard'
          className='mr-20 text-lg font-bold text-white uppercase'
        >
          Magix
        </Link>
        <Nav />
      </div>
      <LoggedUser />
    </header>
  );
};
