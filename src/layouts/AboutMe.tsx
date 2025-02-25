import Image from "../components/AboutMe/Image";
import Socials from "../components/AboutMe/Socials";
import Text from "../components/AboutMe/Text";

const AboutMe = () => {
  return (
    <div className="w-3/5 h-[40%] mt-24 flex">
      <div className="w-1/3 h-full flex flex-col">
        <Image />
        <Socials />
      </div>
      <Text />
    </div>
  );
};

export default AboutMe;
