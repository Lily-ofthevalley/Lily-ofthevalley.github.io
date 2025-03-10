import Icon from "../assets/icon.jpeg";

const Header = () => {
  return (
    <div className="bg-[#795B82] flex flex-row w-full fixed z-50 shadow-lg">
      <div className="w-1/12 ml-12 flex items-center">
        <img src={Icon} alt="Lily of the valley" className="h-12 w-auto" />
      </div>
      <div className="w-1/2 ml-auto flex justify-evenly py-6">
        <a href="/AboutMe" className="duration-300 ease-in-out hover:scale-115">
          About me
        </a>
        <a
          href="/Technologies"
          className="duration-300 ease-in-out hover:scale-115"
        >
          Technologies/Experience
        </a>
        <a
          href="/Projects"
          className="duration-300 ease-in-out hover:scale-115"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Header;
