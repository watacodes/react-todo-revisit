import { createContext, useCallback, useEffect, useState } from "react";
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
    if (!todoList.some((todo) => todo.task === newTodo)) {
      setTodoList((prevTodos) => {
        return [
          ...prevTodos,
          {
            column: 1,
            id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
            task: newTodo,
            status: "pending",
          },
        ];
      });
    }
    setNewTodo("");
  };

  const deleteTodo = (todoId) => {
    setDeletedTodoId((prevDeleted) => [...prevDeleted, todoId]);

    setTodoList((prevTodos) =>
      prevTodos.filter((item) => {
        return item.id !== todoId;
      })
    );
  };

  const convertStatusToColumn = (todo) => {
    let col;
    console.log("todo:", todo);

    // TODO: Fix the logic
    if (todo.status === "in-progress") {
      col = 2;
    } else if (todo.status === "completed") {
      col = 3;
    } else {
      col = 1;
    }
    return col;
  };

  const handleStatusChange = ({ id, status }) => {
    console.log("todoid: ", id);
    console.log("todoStatus: ", status);

    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: status,
              column: convertStatusToColumn(todo),
            }
          : todo
      )
    );
  };

  const extractTodoPos = (id) => todoList.findIndex((todo) => todo.id === id);

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
        newTodo,
        todoList,
        setNewTodo,
        handleDragEnd,
        handleStatusChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
