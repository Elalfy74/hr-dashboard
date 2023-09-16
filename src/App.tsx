import { RouterProvider } from 'react-router-dom';

import { QueryProvider } from './query-provider';
import { router } from './routers/router';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { SessionProvider } from './hooks/use-session';

export function App() {
  return (
    <QueryProvider>
      <TooltipProvider>
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
        <Toaster />
      </TooltipProvider>
    </QueryProvider>
  );
}
