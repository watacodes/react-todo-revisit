import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import PendingTodos from "./components/PendingTodos";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";
import InProgressTodos from "./components/InProgressTodos.jsx";
import CompletedTodos from "./components/CompletedTodos.jsx";
import TodoContainer from "./components/TodoContainer.jsx";

// import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  const { handleDragEnd } = useContext(TodoContext);

  return (
    <div>
      <Header />
      <AddItem />
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <TodoContainer>
          <PendingTodos />
          <InProgressTodos />
          <CompletedTodos />
        </TodoContainer>
      </DndContext>
    </div>
  );
}

export default App;

/* 

Todos

1) Split PendingTodos into 3 sections and wrap it in a container.
2) Add a dropdown for each TodoItems so it can change the status.
3) Map each todo list based on the status and display them in the designated column.



*/
