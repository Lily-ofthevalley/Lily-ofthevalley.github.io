import { useState } from "react";
import Card from "../components/Experience/Card";
import CardEducation from "../components/Experience/CardEducation";

// Images
import artecollege from "../assets/logos/experience/arteCollege.jpg";
import roc from "../assets/logos/experience/roc.png";
import younameit from "../assets/logos/experience/younameit.png";

const Experience = () => {
  const [isExperience, setIsExperience] = useState(true);

  const toggleView = (view: string) => {
    setIsExperience(view === "experience");
  };

  return (
    <div className="w-full mt-6 rounded-xl flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl text-[#AC8DAF]">
        Experience/Education
      </h1>
      <div className="flex flex-col justify-center items-center w-full h-full mt-9">
        <div className="w-4/5 h-full rounded-xl bg-[#DDB6C6] flex flex-col items-center p-3">
          <div className="h-1/20 border-2 border-[#AC8DAF] w-full rounded-4xl relative">
            {/* Sliding background bar */}
            <div
              className={`w-1/2 bg-[#AC8DAF] rounded-full h-full absolute transition-transform duration-300 ease-in-out ${
                isExperience ? "translate-x-0" : "translate-x-full"
              }`}
            ></div>

            {/* Experience text */}
            <p
              className={`w-1/2 h-full text-center cursor-pointer flex items-center justify-center absolute z-10 hover:text-white ${
                isExperience ? "text-white" : "text-[#AC8DAF]"
              }`}
              onClick={() => toggleView("experience")}
            >
              Experience
            </p>

            {/* Education text */}
            <p
              className={`w-1/2 h-full text-center cursor-pointer flex items-center justify-center absolute left-1/2 z-10 hover:text-white ${
                !isExperience ? "text-white" : "text-[#AC8DAF]"
              }`}
              onClick={() => toggleView("education")}
            >
              Education
            </p>
          </div>

          {/* Content area */}
          <div className="h-full w-full mt-3">
            {isExperience ? (
              <>
                <Card
                  imageUrl={younameit}
                  name="YouName-IT"
                  timeframe="mar 2025 - current"
                  title="Software developer"
                  note="I am the main developer working on a client portal, a dashboard and other things."
                />
                <Card
                  imageUrl={younameit}
                  name="YouName-IT"
                  timeframe="oct 2024 - feb 2025"
                  title="Intern software developer"
                  note="I worked on a dashboard, client portal and automation."
                />
              </>
            ) : (
              <>
                <CardEducation
                  imageUrl={roc}
                  name="ROC van Flevoland"
                  timeframe="feb 2024 - mar 2025"
                  educationalLevel="MBO 4 software developer"
                  note="Finished in 4 months not counting internship or holidays."
                />
                <CardEducation
                  imageUrl={artecollege}
                  name="Arte College"
                  timeframe="aug 2018 - jan 2024"
                  educationalLevel="Havo/Vwo"
                  note="Not finished"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
