import Header from "./components/Header";
import Seperator from "./components/seperator";
import AboutMe from "./layouts/AboutMe";
import Technologies from "./layouts/Technologies";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <AboutMe />
      <Seperator title="Technologies" />
      <Technologies />
    </div>
  );
}

export default App;
