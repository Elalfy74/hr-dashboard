import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

import { supabase } from '../services/supabase';

export const useSession = () => {
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

  return { session, isLoading };
};
