import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';
import { PublicRoute } from './public-route';
import { Layout } from '@/layouts/layout';

import { Employees } from '@/pages/employees';
import { Dashboard } from '@/pages/dashboard';
import { Auth } from '@/pages/auth';
import { Jobs } from '@/pages/jobs';
import { Leaves } from '@/pages/leaves';
import { AllLeaves } from '@/pages/leaves/all';

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
          {
            path: '/jobs',
            element: <Jobs />,
          },
          {
            path: '/leaves',
            children: [
              {
                path: '',
                element: <Leaves />,
              },
              {
                path: 'all',
                element: <AllLeaves />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <PublicRoute />,
    children: [
      {
        path: '',
        element: <Auth />,
      },
    ],
  },
]);
