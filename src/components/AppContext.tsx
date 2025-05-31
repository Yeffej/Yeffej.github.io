import { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type AppContext = {
    isDarkMode: boolean,
    setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

const placeholder: AppContext = {
    isDarkMode: true,
    setIsDarkMode: () => false
}

const AppContext = createContext(placeholder);
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const globalProps = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <AppContext.Provider value={globalProps}>
        {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
