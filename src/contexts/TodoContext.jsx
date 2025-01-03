import { createContext, useEffect, useState } from "react";
import dateFormatter from "../utils/dateFormatter";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const localItems = localStorage.getItem("todos");
    return localItems ? JSON.parse(localItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    if (!todoList.includes(newTodo)) {
      setTodoList((prevTodos) => [
        ...prevTodos,
        { id: new Date(), task: newTodo, completed: false },
      ]);
    }
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    setTodoList((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === todoId
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        deleteTodo,
        toggleCompleted,
        newTodo,
        todoList,
        setNewTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
