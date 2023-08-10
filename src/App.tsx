import { RouterProvider } from 'react-router-dom';

import { QueryProvider } from './query-provider';
import { router } from './routers/router';
import { Toaster } from './components/ui/toaster';

export function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
      <Toaster />
    </QueryProvider>
  );
}
