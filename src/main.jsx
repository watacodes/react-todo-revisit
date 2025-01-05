import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
