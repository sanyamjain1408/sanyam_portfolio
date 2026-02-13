import React, { useState } from "react";


import Portfolio from "../../public/portfolio.png"
import DOCPAT from "../../public/docpat.png"
import BarBer from "../../public/barber_booking.png"
import Chat from "../../public/chatboard.png"
import ClipCode from "../../public/clipcode.png"
import Calculator from "../../public/calculator.jpeg"

const projects = [
  {
    src: Portfolio,
    title: "Portfolio",
    link: "https://singlepage-portfolio-2ayy.vercel.app/",
  },
   {
    src: DOCPAT,
    title: "DOCPAT",
    link: "https://github.com/sanyamjain1408/docpat",
  },
   {
    src: BarBer,
    title: "BarBer Online Booking web",
    link: "https://github.com/sanyamjain1408/online_booking",
  },
  {
    src: Chat,
    title: "Chat Board",
    link: "https://github.com/sanyamjain1408/ChatBoardApp-React.js-and-Node.js",
  },
  {
    src: ClipCode,
    title: "ClipCode",
    link: "https://clipcodeapp-two.vercel.app/",
  },
  {
    src:Calculator,
    title: "Dynamic Calculator",
    link: "https://github.com/sanyamjain1408/Dynamic_calculator",
    width: "w-[20rem]",
  height: "h-[10rem]"
  },
  
  
 
 
  
  
   
];

function Project() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="project"
      className="flex flex-col pb-10 justify-center items-center"
    >
      <div className="sm:grid grid-cols-2 gap-10">
        {visibleProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[40rem] border-black mt-5 rounded-3xl p-3 shadow-2xl hover:p-0 hover:shadow-black ease-in-out duration-200"
                src={project.src}
                alt={project.title}
              />
              <h1 className="text-2xl text-black font-bold hover:text-3xl ease-in-out duration-200">
                {project.title}
              </h1>
            </div>
          </a>
        ))}
      </div>

     <button
  onClick={() => window.open("https://github.com/sanyamjain1408?tab=repositories", "_blank")}
  className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
>
  {showAll ? "Show Less" : "Show All Projects"}
</button>

    </section>
  );
}

export default Project;
