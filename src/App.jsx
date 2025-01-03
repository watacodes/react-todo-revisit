import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import PendingTodos from "./components/PendingTodos";
// import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  return (
    <div>
      <Header />
      <AddItem />
      <PendingTodos />
    </div>
  );
}

export default App;
