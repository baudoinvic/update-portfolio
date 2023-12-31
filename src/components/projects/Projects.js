import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SMART CAR PARKING SYSTEM"
          des="this is a smart car parking system  aims to revolutionize the way national drivers in rwanda kigali to secure parking spaces by providing a convenient and efficient booking platform  "
          src={projectOne}
          button="Code"
        />
        <ProjectsCard
          title="OPTIMA "
          des="health care system this project it's use for optimizing the health care system in hospitals which is focused more in four area optimization. which is workload. working-time, productivity. and salary finance!"
          src={projectTwo}
          button="Code"
         
        />
        <ProjectsCard
          title="E-COMMERCE WEB APP"
          des="aims is to help all people all over the world to buy their products easily just by using their phones and personal pc but mostly is used in rwanda kigali which helps rwandans people to buy easily the electronics devices easily upon internet!"
          src={projectThree}
          button="Code"
        />
        <ProjectsCard
          title="CB-LINK LTD"
          des="this website helps cblink company to sell their products on internet and showing to their customers what they do and provide more services to their clients need "
          src={projectFour}
          button="Code"
        />

        <ProjectsCard
          title="Chatting App"
          des=" this is a simple chatting app done in mobile app for helping people to chat with their familly members. friends and so on the aim is to communicate with all people around you "
          src={projectFive}
          button="Code"
        />

        <ProjectsCard
          title="HOLIDAY PLANNER TOUR"
          des="this is a holiday planner website whcih help people to book their tours and reserve them  depends in which country or destination they are going on"
          src={projectSix}
          button="Code"
        />
      </div>
    </section>
  );
}

export default Projects