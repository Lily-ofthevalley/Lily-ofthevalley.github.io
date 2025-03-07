import Image from "../components/AboutMe/Image";
import Text from "../components/AboutMe/Text";

const AboutMe = () => {
  return (
    <div className="w-5/6 h-1/2 flex rounded-2xl">
      <div className=" w-2/3">
        <Text />
      </div>
      <Image />
    </div>
  );
};

export default AboutMe;
