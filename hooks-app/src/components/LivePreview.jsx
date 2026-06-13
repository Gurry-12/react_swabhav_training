const LivePreview = ({ profile }) => {
  const getInitials = (name) => {
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase() || "?";
  };

  const stateSnapshot = {
    name: profile.fullName,
    email: profile.email,
    course: profile.course,
    bio: profile.bio.length > 30 ? profile.bio.slice(0, 30) + "..." : profile.bio,
    skills: profile.skills,
  };

  return (
    <div>
      <div
        className="d-flex align-items-center gap-2 mb-3"
        style={{ fontSize: "14px", fontWeight: 500 }}
      >
        <i className="ti ti-eye" style={{ fontSize: "16px", color: "#6b7280" }}></i>
        Live preview
      </div>

      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Profile card label */}
        <div
          style={{
            padding: "6px 14px 0",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#9ca3af",
          }}
        >
          Profile card
        </div>

        {/* Header: avatar + name + active badge */}
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ padding: "12px 14px" }}
        >
          <div className="d-flex align-items-center gap-2">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#dbeafe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: 500,
                color: "#1d4ed8",
                flexShrink: 0,
              }}
            >
              {profile.fullName ? getInitials(profile.fullName) : "?"}
            </div>
            <div>
              <div style={{ fontSize: "15px", fontWeight: 500 }}>
                {profile.fullName || "Your Name"}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                {profile.email || "—"}
              </div>
            </div>
          </div>
          <span
            style={{
              background: "#dcfce7",
              color: "#166534",
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "20px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <i className="ti ti-check" style={{ fontSize: "11px" }}></i> Active
          </span>
        </div>

        {/* Course badge */}
        {profile.course && (
          <div style={{ padding: "0 14px 8px" }}>
            <span
              style={{
                background: "#eff6ff",
                color: "#1d4ed8",
                fontSize: "12px",
                padding: "4px 10px",
                borderRadius: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <i className="ti ti-book" style={{ fontSize: "13px" }}></i>
              {profile.course}
            </span>
          </div>
        )}

        {/* Bio */}
        {profile.bio && (
          <div style={{ padding: "0 14px 12px", fontSize: "13px", color: "#4b5563", lineHeight: 1.6 }}>
            {profile.bio}
          </div>
        )}

        {/* Skills */}
        {profile.skills.length > 0 && (
          <div
            style={{
              padding: "10px 14px",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: "8px",
              }}
            >
              Skills
            </div>
            <div className="d-flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    background: "#f3f4f6",
                    border: "1px solid #e5e7eb",
                    borderRadius: "20px",
                    padding: "3px 10px",
                    fontSize: "12px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* useState State Snapshot */}
        <div
          style={{
            padding: "10px 14px",
            borderTop: "1px solid #f3f4f6",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: "8px",
            }}
          >
            State snapshot (useState)
          </div>
          <pre
            style={{
              background: "#f9fafb",
              borderRadius: "6px",
              padding: "10px 12px",
              fontSize: "11px",
              color: "#374151",
              lineHeight: 1.7,
              margin: 0,
              overflowX: "auto",
              fontFamily: "monospace",
            }}
          >
{`{
  "name": "${stateSnapshot.name}",
  "email": "${stateSnapshot.email}",
  "course": "${stateSnapshot.course}",
  "bio": "${stateSnapshot.bio}",
  "skills": [${stateSnapshot.skills.map((s) => `"${s}"`).join(", ")}]
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
