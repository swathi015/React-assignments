import { useForm } from "react-hook-form";

function AddTaskForm({ addNewTask }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm(); 

  const submitForm = (obj) => {
    // obj.priority = Number(obj.priority);
    obj.completedStatus = false; //incomplete
    addNewTask(obj);
    reset();
  };

  return (
    <div className="flex flex-col gap-4 items-center p-2">
      <h2 className="text-[clamp(20px,10vw,30px)] font-bold">Add Your Tasks</h2>
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 items-center mb-3">
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="title of the task"
          className="p-2 border rounded-[3px]"
        />
        {errors.title?.type === "required" && <p className="text-amber-500">title required</p>}

        <div>
          <label htmlFor="priorities" className="font-bold text-lg m-2">
            Priority
          </label>
          <select
            id="priorities"
            {...register("priority")}
            className="p-0.5 ml-1 bg-gray-600 text-white rounded border-none font-bold cursor-pointer"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="bg-green-500 px-4 py-1 text-white rounded cursor-pointer hover:bg-green-600">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
