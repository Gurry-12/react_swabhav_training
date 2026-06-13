import "./TeamSection.css";
import MemberRow from "./MemberRow";

const TeamSection = ({
  department,
  members
}) => {
  return (
    <div className="team-section">

      <div className="team-header">

        <h3 className="team-title">
          {department}
        </h3>

        <span className="member-count">
          · {members.length} members
        </span>

      </div>

      {members.map(member => (
        <MemberRow
          key={member.id}
          name={member.name}
          role={member.role}
          experience={member.experience}
          initials={member.initials}
        />
      ))}

    </div>
  );
};

export default TeamSection;