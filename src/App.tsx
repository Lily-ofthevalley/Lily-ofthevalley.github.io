import Header from "./components/Header";
import Socials from "./components/Socials";
import AboutMe from "./layouts/AboutMe";
import Experience from "./layouts/Experience";
import Projects from "./layouts/Projects";
import Technologies from "./layouts/Technologies";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Socials />
      <div className="h-screen w-full flex justify-center mt-36">
        <AboutMe />
      </div>
      <div className="w-full flex justify-center pt-3 pb-3">
        <Experience />
      </div>
      <div className="w-full flex justify-center pt-3 pb-3">
        <Technologies />
      </div>
      <div className="w-full flex justify-center pt-3 pb-3">
        <Projects />
      </div>
    </div>
  );
}

export default App;
