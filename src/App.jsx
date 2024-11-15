import { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Header from "./components/Header";

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

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm),
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (title, description, priority) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title, description, completed: false, priority },
    ]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
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
    <div className="flex h-screen flex-col font-Quicksand">
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      <main className="flex flex-grow flex-col">
        <TaskInput onAddTask={addTask} />
        <div className="flex-grow overflow-y-auto bg-3">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggleComplete={toggleTaskCompletion}
                setSortCriteria={setSortCriteria}
              />
            ))
          ) : (
            <div className="mt-56 text-center text-2xl font-medium text-white">
              Start adding your first task📝
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
