import React from 'react';
import { createContext, useState, useContext } from 'react';

type Props = {
  children: JSX.Element;
};

interface LoginContextType {
  user: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: any;
}

let LoginContext = createContext<LoginContextType>({} as LoginContextType);

export function LoginContextProvider({ children }: Props) {

  // State variables
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState(false);



  // Values that will be availables in the context
  let value = {
    user,
    setUser,
    loading,
    setLoading
  }

  return <LoginContext.Provider value={value} > {children} </LoginContext.Provider>
}

// Custom hook to use the data of the context
export function useLoginContext() {
  return useContext(LoginContext);
}