import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Stats from "./components/Stats";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const inputRef = useRef(null);
  const editRef = useRef(null);
  const listRef = useRef(null);
  const prevLengthRef = useRef(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (editingId !== null) {
      editRef.current?.focus();
    }
  }, [editingId]);

  useEffect(() => {
    prevLengthRef.current = tasks.length;
  }, [tasks.length]);

  const addTask = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setTasks([...tasks, { id: Date.now(), text: trimmed, done: false }]);
    setInputValue("");
    inputRef.current?.focus();
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditValue(task.text);
  };

  const confirmEdit = () => {
    const trimmed = editValue.trim();
    if (!trimmed) return;
    setTasks(
      tasks.map((t) => (t.id === editingId ? { ...t, text: trimmed } : t)),
    );
    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.done));
    inputRef.current?.focus();
  };

  const visibleTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.done).length;
  const activeCount = totalCount - completedCount;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <Header />
            <Stats
              total={totalCount}
              completed={completedCount}
              active={activeCount}
            />
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4">
                <TaskInput
                  inputRef={inputRef}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  addTask={addTask}
                />
                <FilterButtons
                  filter={filter}
                  setFilter={setFilter}
                  totalCount={totalCount}
                  activeCount={activeCount}
                  completedCount={completedCount}
                />
                <TaskList
                  listRef={listRef}
                  tasks={visibleTasks}
                  editingId={editingId}
                  editValue={editValue}
                  setEditValue={setEditValue}
                  editRef={editRef}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  onStartEdit={startEdit}
                  onConfirmEdit={confirmEdit}
                  onCancelEdit={cancelEdit}
                  filter={filter}
                />
                {completedCount > 0 && (
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                    <small className="text-muted">
                      {completedCount} task(s) completed
                    </small>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={clearCompleted}
                    >
                      Clear Completed
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
