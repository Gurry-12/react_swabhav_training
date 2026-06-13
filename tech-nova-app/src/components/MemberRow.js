import "./MemberRow.css";

const MemberRow = ({
  name,
  role,
  experience,
  initials
}) => {
  return (
    <div className="member-row">

      <div className="member-left">

        <div className="avatar">
          {initials}
        </div>

        <div className="member-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>

      </div>

      <div className="member-right">

        <div className="experience">
          {experience} yrs exp
        </div>

        <div className="arrow">
          &gt;
        </div>

      </div>

    </div>
  );
};

export default MemberRow;