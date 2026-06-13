function Experience({ experience }) {
  return (
    <section>
      <h2>Experience</h2>

      {experience.map((exp) => (
        <div key={exp.id}>
          <div className="entry">
            <div>
              <h4>{exp.role}</h4>
              <p>
                {exp.company} | {exp.location}
              </p>
            </div>

            <span>{exp.duration}</span>
          </div>

          <ul>
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
