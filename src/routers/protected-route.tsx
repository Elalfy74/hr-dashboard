import { Navigate, Outlet } from 'react-router-dom';
import { useSession } from '../hooks/use-session';

export const ProtectedRoute = () => {
  const { session, isLoading } = useSession();

  if (!isLoading && !session) {
    return <Navigate to='/auth' />;
  }

  return <Outlet />;
};
