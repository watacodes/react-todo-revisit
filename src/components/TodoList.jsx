import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
  const { todoList, toggleCompleted } = useContext(TodoContext);
  return (
    <ul>
      {todoList.map((item) => {
        const styles = {
          textDecoration: item.completed ? "line-through" : "none",
        };
        // eslint-disable-next-line react/jsx-key
        return (
          <TodoItem
            key={item.id}
            item={item}
            styles={styles}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
