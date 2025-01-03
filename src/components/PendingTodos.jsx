import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const PendingTodos = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <section>
      <ul className="flex-col w-1/3 p-2 ml-4 min-h-screen bg-slate-200 rounded-lg">
        <h2 className="text-blue-600 font-bold text-2xl text-center">
          Pending
        </h2>
        {todoList.map((item) => {
          console.log(item);
          const styles = {
            textDecoration: item.completed ? "line-through" : "none",
          };
          // eslint-disable-next-line react/jsx-key
          return <TodoItem key={item.id} item={item} styles={styles} />;
        })}
      </ul>
    </section>
  );
};

export default PendingTodos;
