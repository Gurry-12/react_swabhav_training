export default function TaskItem({
  task,
  editingId,
  editValue,
  setEditValue,
  editRef,
  onToggle,
  onDelete,
  onStartEdit,
  onConfirmEdit,
  onCancelEdit,
}) {
  const isEditing = editingId === task.id;

  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") onConfirmEdit();
    if (e.key === "Escape") onCancelEdit();
  };

  return (
    <li className="list-group-item px-0 py-2 border-bottom">
      {isEditing ? (
        <div className="input-group">
          <input
            ref={editRef}
            type="text"
            className="form-control form-control-sm"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleEditKeyDown}
          />
          <button className="btn btn-sm btn-success" onClick={onConfirmEdit}>
            ✓
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={onCancelEdit}
          >
            ✕
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            className="form-check-input mt-0"
            checked={task.done}
            onChange={() => onToggle(task.id)}
            style={{ width: "18px", height: "18px", cursor: "pointer" }}
          />
          <span
            className={`flex-grow-1 ${task.done ? "text-decoration-line-through text-muted" : ""}`}
            style={{ cursor: "pointer" }}
            onDoubleClick={() => !task.done && onStartEdit(task)}
            title={!task.done ? "Double-click to edit" : ""}
          >
            {task.text}
          </span>
          {!task.done && (
            <button
              className="btn btn-sm btn-outline-secondary py-0 px-1"
              onClick={() => onStartEdit(task)}
              title="Edit"
            >
              ✏️
            </button>
          )}
          <button
            className="btn btn-sm btn-outline-danger py-0 px-1"
            onClick={() => onDelete(task.id)}
            title="Delete"
          >
            🗑️
          </button>
        </div>
      )}
    </li>
  );
}
