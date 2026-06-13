export default function FilterButtons({
  filter,
  setFilter,
  totalCount,
  activeCount,
  completedCount,
}) {
  const filters = [
    { key: "all", label: "All", count: totalCount },
    { key: "active", label: "Active", count: activeCount },
    { key: "completed", label: "Completed", count: completedCount },
  ];

  return (
    <div className="btn-group w-100 mb-3">
      {filters.map((f) => (
        <button
          key={f.key}
          className={`btn btn-sm ${filter === f.key ? "btn-primary" : "btn-outline-secondary"}`}
          onClick={() => setFilter(f.key)}
        >
          {f.label}{" "}
          <span
            className={`badge ${filter === f.key ? "bg-white text-primary" : "bg-secondary"}`}
          >
            {f.count}
          </span>
        </button>
      ))}
    </div>
  );
}
