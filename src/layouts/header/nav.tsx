import {
  LayoutGrid,
  User2,
  ClipboardList,
  Users,
  MenuSquare,
} from 'lucide-react';

import { NavLink } from './nav-link';

export const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-14'>
        {links.map(({ title, icon, to }) => (
          <NavLink key={title} icon={icon} to={to}>
            {title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

const links = [
  {
    title: 'dashboard',
    to: '/dashboard',
    icon: <LayoutGrid className='w-5' />,
  },
  {
    title: 'employees',
    to: '/employees',
    icon: <User2 className='w-5' />,
  },
  {
    title: 'jobs',
    to: '/jobs',
    icon: <ClipboardList className='w-5' />,
  },
  // {
  //   title: 'candidates',
  //   to: '/candidates',
  //   icon: <Users className='w-5' />,
  // },
  {
    title: 'leaves',
    to: '/leaves',
    icon: <MenuSquare className='w-5' />,
  },
];
