function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <div className="entry">
            <div>
              <h4>
                {project.title} | {project.tech}
              </h4>
            </div>

            <span>{project.duration}</span>
          </div>

          <ul>
            {project.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;
