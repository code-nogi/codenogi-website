/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { createContext, useState, useContext } from "react";

/* ----------------------------- */
/* CONTEXT                       */
/* ----------------------------- */
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    //LIGHT-DARK setting from browser preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export { ThemeProvider, useTheme };
