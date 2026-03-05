import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };

  const updateTask = (updatedTaskObj, indx) => {
    const newTasks = [...tasks];
    newTasks[indx] = updatedTaskObj;
    setTasks(newTasks);
  };

  const deleteTask = (indx) => {
    const newTasks = tasks.filter((_, i) => i != indx);
    setTasks(newTasks);
  };

  console.log(tasks);

  return (
    <div>
      <AddTaskForm addNewTask={addNewTask} />
      {/* <hr className="" /> */}
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default TaskManager;
