import Icon from "../assets/icon.jpeg";

const Header = () => {
  return (
    <div className="bg-[#795B82] flex flex-row sticky w-full">
      <div className="w-[10%] ml-12 flex items-center">
        <img src={Icon} alt="Lily of the valley" className="h-12 w-auto" />
      </div>
      <div className="w-[90%] flex justify-evenly py-6">
        <a href="/AboutMe">About me</a>
        <a href="/Technologies">Technologies</a>
        <a href="/Projects">Projects</a>
        <a href="/Experience">Experience</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
