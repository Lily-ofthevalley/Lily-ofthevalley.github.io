import Header from "./components/Header";
import Seperator from "./components/Seperator";
import Socials from "./components/Socials";
import AboutMe from "./layouts/AboutMe";
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
        <Technologies />
      </div>

      <Seperator title="Projects" />
      <Seperator title="Experience/Education" />
      <Seperator title="Contact" />
    </div>
  );
}

export default App;
