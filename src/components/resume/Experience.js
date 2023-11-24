import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="CB-LINK  "
            result="Rwanda kigali"
            des="Analzying testing quality assurance for their softwares and make it successfully in market."
          />
          <ResumeCard
            title="klab"
            subTitle="Front-end Egnineer"
            result="Rwanda kigali"
            des="design the beautiful user experience web applications, implement and deploy them for companies and for customers need"
          />
          <ResumeCard
            title="ALISON"
            subTitle="MERN STACK DEVELOPER"
            result="Irland"
            des="empowering by myself for learning new techlogies and makes pair-programming with other developers in whole world."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2022</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="unilak"
            subTitle="Trainer for tech-up"
            result="Kigali"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Ricta "
            subTitle="Internet society"
            result="INDIA"
            des="working with a team for helping people to get explore more about technlogy specially in designing and deploying computer network"
          />
          <ResumeCard
            title="Web developer mentor"
            subTitle="Trust Engineering Ltd"
            result="Rwanda kigali"
            des="helping students for gaining a good background in software development field i have been teach them how they could be able to build their website and make it succssfully in market "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
