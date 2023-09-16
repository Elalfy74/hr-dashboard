import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { supabase } from '@/services/supabase/client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Auth = () => {
  return (
    <Card className='container max-w-lg mt-32'>
      <CardHeader>
        <CardTitle> Sign In Now</CardTitle>
      </CardHeader>
      <CardContent>
        <SupabaseAuth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#CEBDF2',
                  brandAccent: '#a593cc',
                  brandButtonText: '#212326',
                },
                radii: {
                  borderRadiusButton: '1.5rem',
                  inputBorderRadius: '1.5rem',
                },
              },
            },
          }}
          showLinks={false}
          providers={['google', 'facebook', 'twitter']}
          socialLayout='horizontal'
        />
      </CardContent>
    </Card>
  );
};
