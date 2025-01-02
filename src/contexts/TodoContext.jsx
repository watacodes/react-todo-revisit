import { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    if (!todoList.includes(newTodo)) {
      setTodoList((prevTodos) => [
        ...prevTodos,
        { id: crypto.randomUUID(), task: newTodo, completed: false },
      ]);
    }
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    setTodoList((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };
  const toggleCompleted = (todo) => {
    setTodoList(
      todoList.map((item) =>
        item.task === todo ? { ...item, completed: !item.completed } : item
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
