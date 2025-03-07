import github from "../../assets/github-logo.svg";
import mail from "../../assets/mail-icon.svg";
import linkedin from "../../assets/linkedin-logo.svg";

const Socials = () => {
  return (
    <div className="bg-[#DDB6C6] rounded-xl flex justify-evenly items-center p-4 m-3 w-">
      <a href="https://github.com/Lily-ofthevalley" target="_blank">
        <img src={github} alt="Github logo" className="w-auto h-12 m-3" />
      </a>
      <a
        href="https://www.linkedin.com/in/lilith-van-der-plas-947809305/"
        target="_blank"
      >
        <img src={linkedin} alt="Linkedin logo" className="w-auto h-12 m-3" />
      </a>
      <a href="mailto:lilithvdplas@gmail.com" target="_blank">
        <img src={mail} alt="Mail logo" className="w-auto h-12 m-3" />
      </a>
    </div>
  );
};

export default Socials;
