import Icon from "../assets/icon.jpeg";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#795B82] flex flex-row w-full fixed z-50 shadow-lg">
      <div className="w-1/12 ml-12 flex items-center">
        <img src={Icon} alt="Lily of the valley" className="h-12 w-auto" />
      </div>
      <div className="w-1/2 ml-auto flex justify-evenly py-6">
        <p
          className="duration-300 ease-in-out hover:scale-115 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          About me
        </p>
        <p
          className="duration-300 ease-in-out hover:scale-115 cursor-pointer"
          onClick={() => scrollToSection("technologies")}
        >
          Technologies/Experience
        </p>
        <p
          className="duration-300 ease-in-out hover:scale-115 cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </p>
      </div>
    </div>
  );
};

export default Header;
