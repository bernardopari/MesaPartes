"use client"; // Necesario para componentes con estado en Next.js (App Router)
import { createContext, useState, useContext } from "react";

// Creamos el contexto
export const themeContext = createContext();

// Proveedor del contexto que rodeará la aplicación
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;