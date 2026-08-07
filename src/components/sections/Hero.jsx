import "./hero.css";
import Button from "../common/Button";
import profileLight from "../../assets/images/profile/profile-light.webp";
import { Github, Linkedin, Contact  } from "lucide-react";
import Reveal from "../common/Reveal";
function Hero() {
  return (
    
    <section
      id="home"
      className="hero section"
    >
      <div className="container-custom hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-tag">
            👋 Hello, I'm
          </span>

          <h1 className="hero-title">
            Krishna Kumar
          </h1>

          <h2 className="hero-role">
            Full Stack MERN Developer
          </h2>

          <p className="hero-description">
            I build fast, responsive and modern web applications
            focused on exceptional user experiences.
          </p>
          <div className="hero-buttons">

    <Button>

      <button
    className="primary-btn"
    onClick={() => {
        document
            .getElementById("projects")
            .scrollIntoView({
                behavior: "smooth",
            });
    }}
>
    View Projects
</button>

    </Button>

    <a
        href="/resume/Krishna_Kumar_Resume.pdf"
        download
    >
        <Button variant="secondary">

            Download Resume

        </Button>
    </a>

</div>
          <div className="hero-stats">

  <div className="stat-card glass">
    <h3>4+</h3>
    <p>Projects</p>
  </div>

  <div className="stat-card glass">
    <h3>1</h3>
    <p>Internship</p>
  </div>

  <div className="stat-card glass">
    <h3>8+</h3>
    <p>Technologies</p>
  </div>

  <div className="stat-card glass">
    <h3>Open</h3>
    <p>For Work</p>
  </div>

</div>
<div className="hero-social">

    <a
        href="https://github.com/krishnakumarb-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <Github size={22} />
    </a>

    <a
        href="https://www.linkedin.com/in/krishna-kumar-b-b01278414/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <Linkedin size={22} />
    </a>

<button
    className="hero-social-btn"
    aria-label="Contact"
    onClick={() => {
        document
            .getElementById("contact")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    }}
>
    <Contact size={22} />
</button>
</div>
        </div>
        

        {/* RIGHT */}

        <div className="hero-right">

  <div className="profile-card">

    <div className="availability-badge">
      🟢 Available for Opportunities
    </div>

    <div className="profile-placeholder">

    <img
        src={profileLight}
        alt="Krishna Kumar"
        className="profile-image"
    />

</div>

    <div className="profile-info">

      <h3>Krishna Kumar</h3>

      <p>
        Full Stack MERN Developer
      </p>

    </div>

  </div>

</div>

      </div>
    </section>
    
  );
}

export default Hero;