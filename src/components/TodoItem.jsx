import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoItem = ({ id, item, styles }) => {
  const { deleteTodo, handleStatusChange } = useContext(TodoContext);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <li
      key={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex justify-between items-center touch-none min-w-4/5 py-8 m-6 bg-slate-300 rounded-md"
    >
      <div onPointerDown={(e) => e.preventDefault()}>
        {/* <input
          className="mr-1"
          name="todo"
          id={id}
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            toggleCompleted(item.id);
          }}
        /> */}
      </div>
      <fieldset>
        Status
        <select
          onChange={(e) =>
            handleStatusChange({ id: item.id, status: e.target.value })
          }
          name="todo-status"
          className="bg-green-200"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
        <p className="text-black" style={styles}>
          {item.task}
        </p>
      </fieldset>

      <div onPointerDown={(e) => e.preventDefault()}>
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
