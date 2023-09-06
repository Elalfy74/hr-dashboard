import { RouterProvider } from 'react-router-dom';

import { QueryProvider } from './query-provider';
import { router } from './routers/router';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

export function App() {
  return (
    <QueryProvider>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster />
      </TooltipProvider>
    </QueryProvider>
  );
}
