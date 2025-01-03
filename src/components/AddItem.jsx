import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const AddItem = () => {
  const { addTodo, newTodo, setNewTodo } = useContext(TodoContext);
  return (
    <div className="flex w-3/5 place-self-center mb-10">
      <input
        type="text"
        className="bg-slate-100 text-black p-4 flex-1 w-3/5 rounded-md"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add your task to kick of a brilliant day!"
      />
      <button
        onClick={addTodo}
        className="rounded-md mx-2 p-4 bg-white text-black"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddItem;
