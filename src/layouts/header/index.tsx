import { Link } from 'react-router-dom';

import { Nav } from './nav';

export const Header = () => {
  return (
    <header className='sticky top-0 left-0 px-6 py-4 border-b bg-[#212326] text-zinc-300 border-b-zinc-500'>
      <div className='flex items-center'>
        <Link
          to='/dashboard'
          className='mr-20 text-lg font-bold text-white uppercase'
        >
          Magix
        </Link>
        <Nav />
      </div>
    </header>
  );
};
