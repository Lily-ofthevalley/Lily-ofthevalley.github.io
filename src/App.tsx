import Header from "./components/Header";
import Socials from "./components/Socials";
import AboutMe from "./layouts/AboutMe";
import Experience from "./layouts/Experience";
import Projects from "./layouts/Projects";
import Technologies from "./layouts/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Socials />
      <div
        className="w-full flex justify-center mt-36 mb-12 md:mb-36 scroll-m-36"
        id="home"
      >
        <AboutMe />
      </div>
      <div
        className="w-full flex flex-col  justify-center pt-3 pb-3 pl-10 pr-10 scroll-m-24 md:flex-row"
        id="technologies"
      >
        <Technologies />
        <Experience />
      </div>
      <div
        className="w-full flex justify-center pt-3 pb-3 scroll-m-24"
        id="projects"
      >
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
