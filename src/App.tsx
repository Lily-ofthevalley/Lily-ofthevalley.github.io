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
      <div className="w-full flex justify-center mt-36 mb-24">
        <AboutMe />
      </div>
      <div className="w-full flex flex-row justify-center pt-3 pb-3 pl-10 pr-10">
        <Technologies />
        <Experience />
      </div>
      <div className="w-full flex justify-center pt-3 pb-3">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
