import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask }) {
  const completeTask = (indx) => { 
    const updatedTaskObj = { ...tasks[indx], completedStatus: !tasks[indx].completedStatus };
    updateTask(updatedTaskObj, indx);
  };
  // const borderColors = { low: "bg-green-400", medium: "bg-amber-400", high: "bg-red-400" };
  const completedTasks = tasks.filter((taskObj) => taskObj.completedStatus);
  return (
    <ul className="flex flex-col items-center gap-3 list-none">
      <div>
        <h3>
          {completedTasks.length} of {tasks.length} completed
        </h3>
      </div>
      {tasks.map((taskObj, indx) => (
        <li
          key={indx}
          className={`w-[90%] bg-gray-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center rounded shadow-xl shadow-black/50 transition-transform duration-300 ease-in-out hover:scale-105`}
        >
          <TaskItem taskObj={taskObj} />
          <div className="flex gap-2">
            <button onClick={() => completeTask(indx)} className="px-2 py-1 bg-amber-400 hover:bg-yellow-600 w-20 cursor-pointer rounded">
              {taskObj.completedStatus ? "undo" : "complete"}
            </button>
            <button onClick={() => deleteTask(indx)} className="px-2 py-1 bg-amber-400 hover:bg-yellow-600 cursor-pointer rounded">
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
