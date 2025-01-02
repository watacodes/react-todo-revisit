import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyles = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
  };

  return (
    <main style={appStyles}>
      <Header />
      <AddItem />
      <ToggleThemeButton />
      <TodoList />
    </main>
  );
}

export default App;
