const TaskItem = ({ task, onDelete, onToggleComplete, setSortCriteria }) => {
  const getBackgroundColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-400";
      case "Medium":
        return "bg-yellow-300";
      case "Low":
        return "bg-green-300";
      default:
        return "bg-green-300";
    }
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between border-b px-4 py-2 ${getBackgroundColor(task.priority)}`}
      >
        <div className="flex items-start">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mr-2 mt-[0.5rem]"
          />
          <div className="flex flex-col">
            <span
              className="text-lg"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <strong>{task.title}</strong>:
            </span>
            <span>{task.description}</span>
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="ml-4 rounded-full bg-red-500 px-3 py-1 text-white"
        >
          Delete
        </button>
      </div>

      <div>
        <select
          onChange={(e) => setSortCriteria(e.target.value)}
          className="input fixed bottom-8 left-[42%]"
        >
          <option value="">Sort by</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
          <option value="completed">Completion</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
