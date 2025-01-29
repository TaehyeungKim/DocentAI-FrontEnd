import { useContext } from "react";
import { SupabaseAuthContext } from "./SupabaseAuthProvider";

export const useSupabase = () => {
  const { client, session } = useContext(SupabaseAuthContext);

  return { client, session };
};
