import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [sortCriteria, setSortCriteria] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (title, priority) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, priority }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortCriteria === "priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortCriteria === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortCriteria === "completed") {
      return a.completed - b.completed;
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearch}
      />
      <TaskInput onAddTask={addTask} />
      <div>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggleComplete={toggleTaskCompletion}
          />
        ))}
      </div>
      <div>
        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="">Sort by</option>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
          <option value="completed">Completion</option>
        </select>
      </div>
    </div>
  );
};

export default App;
