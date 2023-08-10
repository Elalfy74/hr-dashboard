import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layouts/layout';
import { Employees } from '../pages/employees';
import { Dashboard } from '../pages/dashboard';
import { ProtectedRoute } from './protected-route';
import { Auth } from '../pages/auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Navigate to='/dashboard' />,
          },
          {
            path: '/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/employees',
            element: <Employees />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
  },
]);
