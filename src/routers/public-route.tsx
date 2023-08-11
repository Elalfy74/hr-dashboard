import { useSession } from '@/hooks/use-session';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const { session, isLoading } = useSession();

  if (!isLoading && session) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
};
