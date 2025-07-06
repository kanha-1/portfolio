import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
// import Experiances from "./Components/Experiances/Experiances"; // Replaced by ExperienceTimeline
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
      {/* experiances section - Now Experience Timeline */}
      <section id="Experience">
        {/* Optionally, add a Parallax component here if you want a parallax background for this section too */}
        {/* <Parallax type="experience" /> */} {/* You'd need to define styles for this type in Parallax.scss */}
        <ExperienceTimeline />
      </section>
      
      {/* projects section */}

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Projects />

      {/* about */}
      {/* <section id="AboutMe">
      <AboutMe/>
      </section> */}

      {/* contact */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
};

export default App;