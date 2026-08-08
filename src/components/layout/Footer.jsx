import "./footer.css";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Reveal from "../common/Reveal";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
    <footer className="footer">

      <div className="container-custom footer-container">

        <div className="footer-left">

          <h2>Krishna Kumar</h2>

          <p className="footer-role">
            Full Stack MERN Developer
          </p>

          <p className="footer-description">
            Building modern, scalable and user-focused web applications
            with React, Node.js, Express and MongoDB.
          </p>

        </div>

        <div className="footer-right">

          <div className="footer-socials">

            <a
              href="https://github.com/krishnakumarb-dev"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-kumar-b-b01278414/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={22} />
            </a>

            <a href="mailto:krishnakumarb.dev@gmail.com">
              <Mail size={22} />
            </a>

          </div>

        

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Krishna Kumar. Designed & Developed by Krishna Kumar.

      </div>

    </footer>
    </Reveal>
  );
}

export default Footer;