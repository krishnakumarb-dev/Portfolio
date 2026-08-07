import "./about.css";
import Reveal from "../common/Reveal";

function About() {
  return (
    <Reveal>
    <section
      id="about"
      className="section"
    >
      <div className="container-custom">

        <div className="section-header">

         <div className="section-label">
    About
</div>

          <h2 className="section-title">
            Building Modern Web Experiences
          </h2>

        </div>

        <div className="about-container">

          {/* LEFT */}

          <div className="about-left">

            <p className="about-text">

              I'm <strong>Krishna Kumar</strong>, an M.Sc. Computer Science
              student and Full Stack MERN Developer passionate about
              building modern, responsive, and user-friendly web
              applications.

            </p>

            <p className="about-text">

              I enjoy transforming ideas into real-world applications
              using React, Node.js, Express, MongoDB, and modern UI
              design principles.

            </p>

            <p className="about-text">

              My goal is to join a software company where I can
              continuously learn, solve real-world problems, and build
              impactful products.

            </p>

          </div>

          {/* RIGHT */}

          <div className="about-right">

            <div className="about-card glass">

              <h3>Education</h3>

              <p>
                M.Sc. Computer Science
              </p>

              <p>
                Full Stack MERN Developer
              </p>

              <p>
                Open to Opportunities
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
    </Reveal>
  );
}

export default About;