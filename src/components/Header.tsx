import Icon from "../assets/icon.jpeg";

const Header = () => {
  return (
    <div className="bg-[#795B82] flex flex-row w-full fixed z-50 shadow-lg">
      <div className="w-1/12 ml-12 flex items-center">
        <img src={Icon} alt="Lily of the valley" className="h-12 w-auto" />
      </div>
      <div className="w-1/2 ml-auto flex justify-evenly py-6">
        <a href="/AboutMe">About me</a>
        <a href="/Technologies">Technologies/Experience</a>
        <a href="/Projects">Projects</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
