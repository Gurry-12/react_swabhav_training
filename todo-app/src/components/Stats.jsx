export default function Stats({ total, completed, active }) {
  return (
    <div className="row g-2 mb-3">
      {[
        { label: "Total", value: total, color: "primary" },
        { label: "Completed", value: completed, color: "success" },
        { label: "Remaining", value: active, color: "warning" },
      ].map((s) => (
        <div className="col-4" key={s.label}>
          <div
            className={`card border-0 bg-${s.color} text-white text-center py-2`}
          >
            <div className="fw-bold fs-4">{s.value}</div>
            <div className="small">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
