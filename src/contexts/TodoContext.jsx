import { createContext, useCallback, useEffect, useState } from "react";
import dateFormatter from "../utils/dateFormatter";
import { arrayMove } from "@dnd-kit/sortable";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    const localItems = localStorage.getItem("todos");
    return localItems ? JSON.parse(localItems) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [deletedTodoId, setDeletedTodoId] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    if (!todoList.includes(newTodo)) {
      setTodoList((prevTodos) => {
        return [
          ...prevTodos,
          {
            id: todoList[todoList.length - 1].id + 1,
            task: newTodo,
            completed: false,
          },
        ];
      });
    }
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    console.log("this is todoId ", todoId);
    setDeletedTodoId((prevDeleted) => [...prevDeleted, todoId]);

    setTodoList((prevTodos) =>
      prevTodos.filter((item) => {
        return item.id !== todoId;
      })
    );
    console.log("deleted ids: ", deletedTodoId);
  };

  const toggleCompleted = (todoId) => {
    console.log("toggleCompleted called with id:", todoId);

    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const extractTodoPos = (id) => {
    // It takes id and find the old position in an original todoList array.

    return todoList.findIndex((todo) => todo.id === id);
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
