import { useState, useRef, useEffect } from "react";

const ProfileForm = ({ profile, setProfile }) => {
  const [skillInput, setSkillInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const fullNameRef = useRef(null);

  // Auto-focus full name on mount (useRef demo)
  useEffect(() => {
    fullNameRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
    if (name === "email") {
      setEmailError(value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };

  const addSkill = () => {
    const val = skillInput.trim();
    if (val && !profile.skills.includes(val)) {
      setProfile({ ...profile, skills: [...profile.skills, val] });
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((_, i) => i !== index),
    });
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const BIO_MAX = 150;

  return (
    <div>
      <div
        className="d-flex align-items-center gap-2 mb-3"
        style={{ fontSize: "14px", fontWeight: 500 }}
      >
        <i className="ti ti-clipboard-list" style={{ fontSize: "16px", color: "#6b7280" }}></i>
        Registration form
      </div>

      {/* Full Name + Phone */}
      <div className="row g-2 mb-2">
        <div className="col">
          <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
            Full name <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            ref={fullNameRef}
            type="text"
            className="form-control form-control-sm"
            name="fullName"
            placeholder="Aanya Sharma"
            value={profile.fullName}
            onChange={handleChange}
          />
          <div style={{ fontSize: "11px", color: "#16a34a", marginTop: "3px" }}>
            <i className="ti ti-info-circle" style={{ fontSize: "11px" }}></i> useRef auto-focuses this on mount
          </div>
        </div>
        <div className="col">
          <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
            Phone
          </label>
          <input
            type="tel"
            className="form-control form-control-sm"
            name="phone"
            placeholder="9876543210"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-2">
        <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
          Email address <span style={{ color: "#dc2626" }}>*</span>
        </label>
        <input
          type="email"
          className={`form-control form-control-sm ${emailError ? "is-invalid" : ""}`}
          name="email"
          placeholder="aanya@example.com"
          value={profile.email}
          onChange={handleChange}
        />
        {emailError && (
          <div style={{ fontSize: "11px", color: "#dc2626", marginTop: "3px", display: "flex", alignItems: "center", gap: "4px" }}>
            <i className="ti ti-alert-circle" style={{ fontSize: "13px" }}></i>
            Enter a valid email address
          </div>
        )}
      </div>

      {/* Course */}
      <div className="mb-2">
        <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
          Course
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          name="course"
          placeholder="Web Development"
          value={profile.course}
          onChange={handleChange}
        />
      </div>

      {/* Bio */}
      <div className="mb-3">
        <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
          Bio
        </label>
        <textarea
          className="form-control form-control-sm"
          name="bio"
          rows={3}
          maxLength={BIO_MAX}
          placeholder="Tell us about yourself..."
          value={profile.bio}
          onChange={handleChange}
          style={{ resize: "vertical" }}
        />
        <div className="d-flex justify-content-between align-items-center mt-1">
          <span style={{ fontSize: "11px", color: "#9ca3af" }}>
            <i className="ti ti-info-circle" style={{ fontSize: "11px" }}></i> useState tracks this field's focus state
          </span>
          <span style={{ fontSize: "11px", color: "#9ca3af" }}>
            {profile.bio.length} / {BIO_MAX}
          </span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-3">
        <label className="form-label" style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
          Skills
        </label>
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Type a skill, press Enter or Add..."
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKeyDown}
          />
          <button
            type="button"
            onClick={addSkill}
            style={{
              padding: "5px 12px",
              fontSize: "12px",
              background: "#f3f4f6",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <i className="ti ti-plus" style={{ fontSize: "13px" }}></i> Add
          </button>
        </div>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              style={{
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                padding: "3px 10px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(i)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "14px", lineHeight: 1, padding: 0, color: "#6b7280" }}
                aria-label={`Remove ${skill}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="button"
        style={{
          width: "100%",
          padding: "10px",
          background: "#1e293b",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <i className="ti ti-send" style={{ fontSize: "15px" }}></i> Submit registration
      </button>
    </div>
  );
};

export default ProfileForm;
