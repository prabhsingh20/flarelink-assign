import { useState } from "react";

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAddTask = () => {
    if (title.trim() && description.trim()) {
      onAddTask(title, description, priority);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="bg-2 flex justify-between p-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input w-52"
        />
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input w-52"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="input w-28 "
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button
        onClick={handleAddTask}
        className="inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
