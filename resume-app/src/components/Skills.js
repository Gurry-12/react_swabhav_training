function Skills({ skills }) {
  return (
    <section>
      <h2>Technical Skills</h2>

      <p>
        <strong>Languages:</strong> {skills.languages.join(", ")}
      </p>

      <p>
        <strong>Frameworks & Libraries:</strong> {skills.frameworks.join(", ")}
      </p>

      <p>
        <strong>Databases:</strong> {skills.databases.join(", ")}
      </p>

      <p>
        <strong>Tools & Platforms:</strong> {skills.tools.join(", ")}
      </p>

      <p>
        <strong>Concepts:</strong> {skills.concepts.join(", ")}
      </p>
    </section>
  );
}

export default Skills;
