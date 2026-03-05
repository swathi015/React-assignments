import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div  className="bg-gray-700 min-h-screen text-white">
      <h1  className="bg-gray-600 text-[clamp(28px,10vw,48px)] w-full text-center font-bold p-5">Task Manager</h1>
      <TaskManager />
    </div>
  );
}

export default App;