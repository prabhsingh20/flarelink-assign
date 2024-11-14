const TaskItem = ({ task, onDelete, onToggleComplete, setSortCriteria }) => {
  const getBackgroundColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-300";
      case "Medium":
        return "bg-yellow-300";
      case "Low":
        return "bg-green-300";
      default:
        return "bg-green-100";
    }
  };

  return (
    <div className="bg-red-800 ">
      <div
        className={`flex items-center justify-between p-4 border-b ${getBackgroundColor(task.priority)}`}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mr-2"
          />
          <span>
            <strong>{task.title}</strong>: {task.description}
          </span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white py-1 px-3 ml-4 rounded-full"
        >
          Delete
        </button>
      </div>

      <div>
        <select
          onChange={(e) => setSortCriteria(e.target.value)}
          className="absolute bottom-8 left-[42%] input"
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
