import "./projectDetails.css";

import { useParams } from "react-router-dom";
import projects from "../../data/projects";

function ProjectDetails() {

    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    if (!project) {

        return (

            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <h1>Project Not Found</h1>

            </div>

        );

    }

    return (

        <section className="project-details">

            <div className="container-custom">

                <button
                    className="back-btn"
                    onClick={() => window.history.back()}
                >

                    ← Back to Portfolio

                </button>

                <div className="project-hero">

                    <div className="project-banner">

                        <img
                            src={project.thumbnail}
                            alt={project.title}
                        />

                    </div>

                    <div className="project-info">

                        <h1>{project.title}</h1>

                        <p className="project-tagline">

                            {project.tagline}

                        </p>

                        <div className="tech-stack">

                            {project.technologies.map((tech) => (

                                <span key={tech}>

                                    {tech}

                                </span>

                            ))}

                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                        >

                            Source Code ↗

                        </a>

                    </div>

                </div>

                <section className="overview-section">

                    <h2>Overview</h2>

                    <p>

                        {project.overview}

                    </p>

                </section>

                <section className="features-section">

                    <h2>Key Features</h2>

                    <ul>

                        {project.features.map((feature) => (

                            <li key={feature}>

                                {feature}

                            </li>

                        ))}

                    </ul>

                </section>

            </div>

        </section>

    );

}

export default ProjectDetails;