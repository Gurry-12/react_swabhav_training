import { useState } from "react";
import ProfileForm from "./ProfileForm";
import LivePreview from "./LivePreview";

const PersonalInfo = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    email: "",
    course: "",
    bio: "",
    skills: [],
  });

  return (
    <div className="container mt-4">
      {/* Success Banner */}
      <div
        className="alert d-flex align-items-center gap-2 mb-3"
        style={{
          background: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "8px",
          color: "#166534",
          fontSize: "13px",
          padding: "10px 14px",
        }}
      >
        <i className="ti ti-circle-check" style={{ fontSize: "16px", color: "#16a34a" }}></i>
        Registration saved successfully! Profile is now active.
      </div>

      {/* Stepper */}
      <div className="d-flex align-items-center mb-4" style={{ fontSize: "13px", gap: "0" }}>
        <StepItem label="Personal info" status="done" />
        <StepLine done />
        <StepItem label="Course & bio" status="active" number={2} />
        <StepLine />
        <StepItem label="Skills" status="inactive" number={3} />
      </div>

      {/* Two-column layout */}
      <div className="row g-4">
        <div className="col-md-6">
          <ProfileForm profile={profile} setProfile={setProfile} />
        </div>
        <div className="col-md-6">
          <LivePreview profile={profile} />
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ label, status, number }) => {
  const styles = {
    done: { color: "#16a34a" },
    active: { color: "#000", fontWeight: 500 },
    inactive: { color: "#9ca3af" },
  };
  return (
    <div className="d-flex align-items-center gap-2" style={styles[status]}>
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          border: "1.5px solid currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          fontWeight: 500,
          background: status === "done" ? "#16a34a" : status === "active" ? "#000" : "transparent",
          color: status === "done" || status === "active" ? "#fff" : "currentColor",
          flexShrink: 0,
        }}
      >
        {status === "done" ? <i className="ti ti-check" style={{ fontSize: "11px" }}></i> : number}
      </div>
      {label}
    </div>
  );
};

const StepLine = ({ done }) => (
  <div
    style={{
      width: "40px",
      height: "1.5px",
      background: done ? "#16a34a" : "#e5e7eb",
      margin: "0 6px",
    }}
  />
);

export default PersonalInfo;
