import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoContext";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <Header />
      <AddItem />
      <ToggleThemeButton />
      <TodoList />
    </div>
  );
}

export default App;
