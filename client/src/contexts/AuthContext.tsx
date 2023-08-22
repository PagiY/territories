import {createContext, Dispatch, SetStateAction} from 'react';

type Auth = { username: string, displayName: string, roles: string[] };

export const AuthContext = createContext<{
  auth: Auth | undefined,
  setAuth: Dispatch<SetStateAction<undefined | Auth>>,
}>({
  auth: undefined,
  setAuth: () => {}
});