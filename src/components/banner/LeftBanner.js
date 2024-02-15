import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import Ressume from "./Ressume.pdf";



const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["software engineer.", "Frontend developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Baudoin Bolingo</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am Bolingo Baudoin a skilled Software Engineer with 3 years of experience designing and 
        developing innovative web applications using the latest technologies. With a strong passion for building responsive, 
        user-friendly interfaces, I am dedicated to creating high-quality, performant applications that deliver an exceptional 
        user experience. My expertise includes developing scalable front-end architectures, integrating RESTful APIs, and 
        optimizing application performance.
        </p>
      </div>

      <div className="download-cv">
        <a href={Ressume} download>
          <button className="bg-designColor text-white  py-2 px-4 rounded">
            Download CV
          </button>
        </a>
      </div>

      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner