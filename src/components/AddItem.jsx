import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddItem = () => {
  const { addTodo, newTodo, setNewTodo } = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        className="task-text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddItem;
