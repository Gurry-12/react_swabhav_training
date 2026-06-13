export default function TaskInput({
  inputRef,
  inputValue,
  setInputValue,
  addTask,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="input-group mb-3">
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-primary"
        onClick={addTask}
        disabled={!inputValue.trim()}
      >
        + Add Task
      </button>
    </div>
  );
}
