import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import ExperienceTimeline from "./Components/ExperienceTimeline/ExperienceTimeline";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Parallax from "./Components/Parallax/Parallax";
import Projects from "./Components/Projects/Projects";
import "./app.scss"

function App() {
  return (
    <div>
      <section id="Home">
        <NavBar />
        <Home />
      </section>

      {/* projects section */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Projects />

      {/* experience section */}
      <section id="Experience" className="experience-wrapper">
        <ExperienceTimeline />
      </section>

      {/* contact */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
};

export default App;