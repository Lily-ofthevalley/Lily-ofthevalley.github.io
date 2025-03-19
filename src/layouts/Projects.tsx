import Card from "../components/Projects/Card";
import signalprint from "../assets/projects/SignalPrint.png";
import youdashit from "../assets/projects/youdashit.png";
import clientportal from "../assets/projects/clientportal.png";

const Projects = () => {
  return (
    <div className="w-full mt-6 rounded-xl flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl text-[#AC8DAF]">Projects</h1>
      <div className="w-10/12 mt-9 grid grid-cols-1 md:grid-cols-4">
        <Card
          title="SignalPrint"
          imageUrl={signalprint}
          info="Python"
          description="This is a program which gathers the information from the network you are currently logged into and generates an STL file based on that information which you can 3d print to get a custom sign with which you'll be able to log into your wifi."
          linkName="The repository"
          link="https://github.com/Lily-ofthevalley/3D-Wifi-QR-code-generator"
        />
        <Card
          title="YouDash-IT"
          imageUrl={youdashit}
          info="Python, React, Django, Typescript and Tailwind"
          description="This is an internal dashboard I have made for YouName-IT. In this dashboard employees can see incidents, changes and their written time. Managers can also see licenses the companies customers get from them and they can also see all invoices."
          linkName="YouDash-IT.nl"
          link="https://YouDash-IT.nl/"
        />
        <Card
          title="YouName-IT's client portal"
          imageUrl={clientportal}
          info="Python, React, Django, Typescript and Tailwind"
          description="This is a client portal I have made for YouName-IT. In this portal customers can view their incidents, changes, licenses and invoices. Besides viewing things they can also place orders for new products and services."
          linkName="portal.YouName-IT.nl"
          link="https://portal.YouName-IT.nl/"
        />
      </div>
    </div>
  );
};

export default Projects;
