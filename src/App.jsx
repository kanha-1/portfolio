import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Experiances from "./Components/Experiances/Experiances";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Parllax from "./Components/Parallax/Parallax";
import Projects from "./Components/Projects/Projects";
import "./app.scss"
function App() {
  return (
    <div>
      <section id="Home">
        <NavBar />
        <Home />
      </section>
      {/* service section */}
      <section id="Services">
        <Parllax type="services" />
      </section>
      <Experiances/>
      {/* projects section */}
      <section id="Portfolio">
        <Parllax type="portfolio" />
      </section>
      <Projects />
      <section id="AboutMe">
      <AboutMe/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
};

export default App;