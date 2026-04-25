/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { createContext, useState, useEffect, useContext } from "react";

/* ----------------------------- */
/* CONTEXT                       */
/* ----------------------------- */
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    //LIGHT-DARK setting from localstorage
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    //LIGHT-DARK setting from browser preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  //LIGHT-DARK setting save in localstorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

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
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider!");
  return context;
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export { ThemeProvider, useTheme };
