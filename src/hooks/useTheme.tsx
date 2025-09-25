import { createContext, useContext } from "react";

interface ThemeContext {
  getTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContext);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
  return (
    <ThemeContext.Provider value={{ getTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};
