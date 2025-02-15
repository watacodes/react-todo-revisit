import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const PendingTodos = () => {
  const { todoList } = useContext(TodoContext);

  // const filterPendingTodos = () => {

  // }
  return (
    <ul className="flex-col p-2 overflow-auto ml-4 bg-slate-200 rounded-lg">
      <h2 className="text-blue-600 font-bold text-2xl text-center">Pending</h2>
      <SortableContext items={todoList} strategy={verticalListSortingStrategy}>
        {todoList.map((item) => {
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

export default PendingTodos;
