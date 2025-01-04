import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import PendingTodos from "./components/PendingTodos";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

// import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  const { handleDragEnd } = useContext(TodoContext);

  return (
    <div>
      <Header />
      <AddItem />
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <PendingTodos />
      </DndContext>
    </div>
  );
}

export default App;

/* 

TODO: Add dnd function

1) Create context provider (DndProvider)


*/
