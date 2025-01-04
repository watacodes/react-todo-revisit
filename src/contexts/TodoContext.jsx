import { createContext, useEffect, useState } from "react";
import dateFormatter from "../utils/dateFormatter";
import { arrayMove } from "@dnd-kit/sortable";

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
        {
          id: `${prevTodos.length + 1}-${newTodo}`,
          task: newTodo,
          completed: false,
        },
      ]);
    }
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    console.log("this is todoId ", todoId);
    setTodoList((prevTodos) =>
      prevTodos.filter((item) => {
        return item.id !== todoId;
      })
    );
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

  const extractTodoPos = (id) => {
    // It takes id and find the old position in an original todoList array.

    return todoList.findIndex(
      (todo) => Number(todo.id.split("-")[0]) === Number(id.split("-")[0])
    );
  };

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) return;
    setTodoList((todos) => {
      const initialPos = extractTodoPos(active.id);
      const newPos = extractTodoPos(over.id);
      return arrayMove(todos, initialPos, newPos);
    });
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
        handleDragEnd,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
