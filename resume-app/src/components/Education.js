function Education({ education }) {
  return (
    <section>
      <h2>Education</h2>

      {education.map((edu) => (
        <div key={edu.id} className="entry">
          <div>
            <h4>{edu.college}</h4>
            <p>{edu.location}</p>
            <p>{edu.degree}</p>
          </div>

          <span>{edu.duration}</span>
        </div>
      ))}
    </section>
  );
}

export default Education;
