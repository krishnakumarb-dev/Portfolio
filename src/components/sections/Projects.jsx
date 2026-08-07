import "./projects.css";
import projects from "../../data/projects";
import { useNavigate } from "react-router-dom";
import Reveal from "../common/Reveal";

function Projects() {
    const navigate = useNavigate();
  return (
    <Reveal>
    <section id="projects" className="section">
      <div className="container-custom">

        <div className="section-header">

          <div className="section-label">
    Projects
</div>

          <h2 className="section-title">
            Projects That Showcase My Skills
          </h2>

        </div>

        <div className="projects-container">

  {projects.map((project) => (

<div
  className="project-card glass"
  key={project.id}
  onClick={() => {}}
>

      <div className="project-image">

        <img
          src={project.thumbnail}
          alt={project.title}
        />

      </div>

      <div className="project-content">

    <h3 className="project-title">

        {project.title}

    </h3>

  <div className="project-tech">

    {project.technologies.map((tech) => (

        <span
            key={tech}
            className="tech-pill"
        >

            {tech}

        </span>

    ))}

</div>

    <p className="project-description">

        {project.description}

    </p>

    <div className="project-features">

        {project.features.slice(0,3).map((feature)=>(

            <div
                key={feature}
                className="feature-item"
            >

                <span className="feature-check">

                    ✓

                </span>

                <span>

                    {feature}

                </span>

            </div>

        ))}

    </div>

    <div className="project-buttons">

        <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            onClick={(e)=>e.stopPropagation()}
        >

            Source Code ↗

        </a>

    </div>

</div>

    </div>

  ))}

</div>

      </div>
    </section>
    </Reveal>
  );
}


export default Projects;