import { Navigate, Outlet } from 'react-router-dom';

import { useSession } from '@/hooks/use-session';

export const PublicRoute = () => {
  const { session, isLoading } = useSession();

  if (isLoading) return null;

  if (session) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
