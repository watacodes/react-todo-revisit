import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const InProgressTodos = () => {
  const { todoList } = useContext(TodoContext);

  return (
    <ul className="flex-col p-2 overflow-auto ml-4 min-h-screen bg-slate-200 rounded-lg">
      <h2 className="text-blue-600 font-bold text-2xl text-center">
        In-Progress
      </h2>
      <SortableContext items={todoList} strategy={verticalListSortingStrategy}>
        {todoList.map((item) => {
          console.log(item);
          const styles = {
            textDecoration: item.completed ? "line-through" : "none",
          };
          // eslint-disable-next-line react/jsx-key
          return (
            <TodoItem key={item.id} id={item.id} item={item} styles={styles} />
          );
        })}
      </SortableContext>
    </ul>
  );
};

export default InProgressTodos;
