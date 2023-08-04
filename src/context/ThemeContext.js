import { useState, createContext, useContext } from "react";

// custom hook

const ThemeContext = createContext();

// writing children in below line means the content will be changing dynamically
const ThemeProvider = ({ children }) => {
  // creating state
  const [theme, setTheme] = useState("light");
  // by default light state

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// exporting custom hook

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
