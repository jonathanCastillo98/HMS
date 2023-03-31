import { createContext, useState, useContext } from 'react';
import React from 'react';


type Props = {
  children: JSX.Element;
};

interface DataContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

let DataContext = createContext<DataContextType>({} as DataContextType);

export function DataContextProvider({ children }: Props) {

  // State variables

  const [isAdmin, setIsAdmin] = useState(false)

  // Values that will be availables in the context
  let value = {

    isAdmin,
    setIsAdmin
  }

  return <DataContext.Provider value={value} > {children} </DataContext.Provider>
}

// Custom hook to use the data of the context
export function useDataContext() {
  return useContext(DataContext);
}