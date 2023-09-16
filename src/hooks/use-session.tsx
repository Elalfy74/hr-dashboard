import { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

import { supabase } from '../services/supabase/client';

interface SessionContextValue {
  session: Session | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextValue>({
  session: null,
  isLoading: true,
});

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      return setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
