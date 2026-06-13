import TaskItem from "./TaskItem";

export default function TaskList({
  listRef,
  tasks,
  editingId,
  editValue,
  setEditValue,
  editRef,
  onToggle,
  onDelete,
  onStartEdit,
  onConfirmEdit,
  onCancelEdit,
  filter,
}) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        <div style={{ fontSize: "2.5rem" }}>📭</div>
        {filter === "completed"
          ? "No completed tasks yet."
          : "No tasks here. Add one above!"}
      </div>
    );
  }

  return (
    <ul className="list-group list-group-flush" ref={listRef}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editingId={editingId}
          editValue={editValue}
          setEditValue={setEditValue}
          editRef={editRef}
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          onConfirmEdit={onConfirmEdit}
          onCancelEdit={onCancelEdit}
        />
      ))}
    </ul>
  );
}
