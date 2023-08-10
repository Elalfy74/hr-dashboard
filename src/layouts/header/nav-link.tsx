import { NavLink as Link } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface NavLinkProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  to: string;
}

export const NavLink = ({ children, icon, to }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        cn(
          'gap-2 rounded-3xl center text-zinc-400 px-4 py-2.5',
          'hover:bg-white/10 duration-300',
          {
            'bg-white/10 text-zinc-50': isActive,
          }
        )
      }
    >
      {icon}
      <span className='capitalize'>{children}</span>
    </Link>
  );
};
