import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item, styles }) => {
  const { deleteTodo, toggleCompleted } = useContext(TodoContext);

  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => toggleCompleted(item.task)} />
      <label style={styles}>{item.task}</label>
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
