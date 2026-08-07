import "./skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import Reveal from "../common/Reveal";

function Skills() {
  return (
    <Reveal>
    <section id="skills" className="section">
      <div className="container-custom">

        <div className="section-header">
      
<div className="section-label">
    Skills
</div>
          <h2 className="section-title">
            Technologies I Work With
          </h2>
        </div>

        <div className="skills-container">

          <div className="skills-left">

            <h3>
              Turning ideas into modern web applications.
            </h3>

            <p>
              I enjoy building responsive, scalable and modern
              applications using the MERN stack while focusing on
              performance, maintainability and user experience.
            </p>

          </div>

          <div className="skills-right">

            <div className="skill-card glass">
              <h4>Frontend</h4>

              <div className="skill-icons">
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
                <SiTailwindcss />
              </div>
            </div>

            <div className="skill-card glass">
              <h4>Backend</h4>

              <div className="skill-icons">
                <FaNodeJs />
                <SiExpress />
              </div>
            </div>

            <div className="skill-card glass">
              <h4>Database</h4>

              <div className="skill-icons">
                <SiMongodb />
                <SiMysql />
              </div>
            </div>

            <div className="skill-card glass">
  <h4>Tools</h4>

  <div className="skill-icons">
    <FaGitAlt />
    <FaGithub />
    <SiPostman />
    <span className="skill-text">VS Code</span>
  </div>
</div>

            <div className="skill-card glass">
  <h4>No-Code</h4>

  <div className="skill-icons">
    <span className="skill-text">Adalo</span>
  </div>
</div>

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  );
}

export default Skills;