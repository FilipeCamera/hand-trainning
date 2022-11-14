import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ContextState = {
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
};

export const Context = createContext<ContextState>({} as ContextState);

export default function ContextProvider({ children }) {
  const [logged, setLogged] = useState(false);
  return <Context.Provider value={{ logged, setLogged }}>{children}</Context.Provider>;
}
