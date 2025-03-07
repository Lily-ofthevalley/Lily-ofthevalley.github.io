import github from "../assets/github-logo.svg";
import mail from "../assets/mail-icon.svg";
import linkedin from "../assets/linkedin-logo.svg";

const Socials = () => {
  return (
    <aside className="left-0 z-30 h-screen fixed flex items-center">
      <div className="bg-[#DDB6C6] h-1/3 rounded-r-xl flex flex-col justify-evenly shadow-lg">
        <a href="https://github.com/Lily-ofthevalley" target="_blank">
          <img src={github} alt="Github logo" className="w-auto h-9 m-3" />
        </a>
        <a
          href="https://www.linkedin.com/in/lilith-van-der-plas-947809305/"
          target="_blank"
        >
          <img src={linkedin} alt="Linkedin logo" className="w-auto h-9 m-3" />
        </a>
        <a href="mailto:lilithvdplas@gmail.com" target="_blank">
          <img src={mail} alt="Mail logo" className="w-auto h-9 m-3" />
        </a>
      </div>
    </aside>
  );
};

export default Socials;
