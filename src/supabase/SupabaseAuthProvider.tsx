import { createClient, Session } from "@supabase/supabase-js";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface ISupabaseAuthContext {
  client: ReturnType<typeof createClient<any, "public", any>>;
  session: Session | null;
}

const client = createClient(
  process.env.REACT_APP_SUPABASE_URL as string,
  process.env.REACT_APP_SUPABASE_ANON_KEY as string
);

export const SupabaseAuthContext = createContext<ISupabaseAuthContext>({
  client: {} as ReturnType<typeof createClient<any, "public", any>>,
  session: null,
});

export const SupabaseAuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <SupabaseAuthContext.Provider
      value={{
        client,
        session,
      }}
    >
      {children}
    </SupabaseAuthContext.Provider>
  );
};
