function TaskItem({ taskObj }) {
  return (
    <div
      className={`text-[clamp(16px,10vw,24px)] text-center font-light px-2 py-0.5 rounded ${taskObj.completedStatus && "line-through opacity-80"}`}
    >
      {taskObj.title} - {taskObj.priority}
    </div>
  );
}

export default TaskItem;