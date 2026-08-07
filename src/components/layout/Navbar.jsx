import "./navbar.css";
import Button from "../common/Button";
import useTheme from "../../hooks/useTheme";
import useActiveSection from "../../hooks/useActiveSection";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  return (
    <header className="navbar">
      <div className="container-custom navbar-container">

        {/* Logo */}

        <a href="#" className="logo">
          Krishna Kumar
        </a>

        {/* Navigation */}

        <nav className="nav-links">

  <a
    href="#home"
    className={activeSection === "home" ? "nav-link active" : "nav-link"}
  >
    Home
  </a>

  <a
    href="#about"
    className={activeSection === "about" ? "nav-link active" : "nav-link"}
  >
    About
  </a>

  <a
    href="#skills"
    className={activeSection === "skills" ? "nav-link active" : "nav-link"}
  >
    Skills
  </a>

  <a
    href="#projects"
    className={activeSection === "projects" ? "nav-link active" : "nav-link"}
  >
    Projects
  </a>

  <a
    href="#experience"
    className={activeSection === "experience" ? "nav-link active" : "nav-link"}
  >
    Experience
  </a>

  <a
    href="#contact"
    className={activeSection === "contact" ? "nav-link active" : "nav-link"}
  >
    Contact
  </a>

</nav>

        {/* Theme Button */}

        <Button
          variant="secondary"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </Button>

      </div>
    </header>
  );
}

export default Navbar;