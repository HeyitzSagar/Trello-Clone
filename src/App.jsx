import "./App.css";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl text-gray-600 hover:text-gray-900 duration-300 font-bold text-center my-5 p-5 bg-red-50">Trello Board</h1>
      <KanbanBoard />
    </div>
  );
}

export default App;
