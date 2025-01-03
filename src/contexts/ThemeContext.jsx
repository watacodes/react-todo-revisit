// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");
//   const toggleTheme = () => {
//     setTheme(() => (theme === "dark" ? "light" : "dark"));
//   };

//   useEffect(() => {
//     document.body.className = theme + "-mode";
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };
