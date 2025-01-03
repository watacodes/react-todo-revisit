import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ item, styles }) => {
  const { deleteTodo, toggleCompleted } = useContext(TodoContext);

  return (
    <li
      key={item.id}
      className="flex justify-between items-center min-w-4/5 py-8 m-6 bg-slate-300 rounded-md"
    >
      <div>
        <input
          className="mr-1"
          name="todo"
          id={`todo-${item.id}`}
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleCompleted(item.id)}
        />
        <label
          className="text-black"
          htmlFor={`todo-${item.id}`}
          style={styles}
        >
          {item.task}
        </label>
      </div>
      <div>
        <button
          className="flex px-2 py-0 rounded-sm text-black"
          onClick={() => deleteTodo(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
