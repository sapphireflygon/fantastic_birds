import "./components/DndActivity/DndActivity.css"
import DndActivity from "./components/DndActivity";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"

function App() {
  return (
    <div className="App">
    <DndProvider backend={HTML5Backend}>
      <DndActivity />
    </DndProvider>
    </div>
  );
}

export default App;
