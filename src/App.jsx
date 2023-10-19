import Contact from "./Components/Contact/Contact";
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
      {/* <section id="Services">
        <Parllax type="services" />
      </section>
      <section>Services</section> */}
      <section id="Portfolio">
        <Parllax type="portfolio" />
      </section>
      <Projects />
      {/* <section id="About">About</section> */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
};

export default App;