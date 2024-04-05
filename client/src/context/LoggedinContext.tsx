import { ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

interface LoggedinProviderProps {
  children: ReactNode;
}

export const LoggedinContext = createContext({
  isLoggedIn: false,

  // @ts-ignore
  setIsLoggedIn: (value: boolean) => {},
});

export default function LoggedinProvider({ children }: LoggedinProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <LoggedinContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      {children}
    </LoggedinContext.Provider>
  );
}
