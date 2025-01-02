import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item, styles }) => {
  const { toggleCompleted } = useContext(TodoContext);

  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => toggleCompleted(item.task)} />
      <label style={styles}>{item.task}</label>
    </li>
  );
};

export default TodoItem;
