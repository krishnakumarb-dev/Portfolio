import Navbar from "./Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

function Layout() {
  return (
  <>
    <Navbar />

    <Hero />

    <About />

    <Skills />

    <Projects />

    <Experience />

    <Contact/>

    <Footer/>

    <ScrollToTop />
    
</>
  );
}

export default Layout;