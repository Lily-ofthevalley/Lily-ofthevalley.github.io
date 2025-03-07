import Header from "./components/Header";
import Seperator from "./components/Seperator";
import AboutMe from "./layouts/AboutMe";
import Technologies from "./layouts/Technologies";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <AboutMe />
      <Seperator title="Technologies" />
      <Technologies />
      <Seperator title="Projects" />
      <Seperator title="Experience/Education" />
      <Seperator title="Contact" />
    </div>
  );
}

export default App;
