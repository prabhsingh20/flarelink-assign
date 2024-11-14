const TaskItem = ({ task, onDelete, onToggleComplete }) => (
  <div style={{ textDecoration: task.completed ? "line-through" : "none" }}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggleComplete(task.id)}
    />
    <span>{task.title}</span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default TaskItem;
