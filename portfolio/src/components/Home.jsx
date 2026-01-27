import React from "react";
import { motion } from "framer-motion"; // ✅ Only motion needed
import sanyam from '/src/assets/sanyam.jain.png';
import instagram from '/src/assets/insta.jpg';
import linkedin from '/src/assets/linkedin.webp';
import github from '/src/assets/github.webp';

export default function Home() {
  return (
    <section
    id="home">
    <motion.div 
      className="mx-auto w-full max-w-7xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <h2 className="text-4xl text-center font-serif font-bold sm:text-5xl sm:text-right sm:font-serif  
                          hover:sm:text-6xl ease-in-out duration-300 ">
              Hello , <br /> I'm Sanyam Jain ,
              <br />
              <span className="text-sm">MERN Stack Developer, UI/UX Designer</span>
            </h2>

            <div className="flex flex-col sm:flex-row  gap-3 ">
              <a
                className="flex flex-row text-white items-center  gap-2 px-3 py-3 font-medium bg-blue-400
                            rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
                href="https://www.instagram.com/sanyam.p.jain?igsh=b2ZtY21tYjB3eGtj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6 ml-2 rounded-md" src={instagram} alt="Instagram" />
                <h1>sanyam.p.jain</h1>
              </a>

              <a
                className="flex flex-row text-white items-center gap-3 px-3 py-3 font-medium bg-blue-400 
                           rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
                href="https://www.linkedin.com/in/sanyamjain14/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-6 h-6 ml-2 rounded-md" src={linkedin} alt="LinkedIn" />
                <h1>sanyam jain</h1>
              </a>

              <a
                className="flex flex-row text-white items-center gap-1.5 px-3 py-3 font-medium bg-blue-400 
                           rounded-lg hover:bg-blue-600 ease-in-out duration-300 w-44"
                href="https://github.com/sanyamjain1408"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-5 h-6 ml-2 rounded-md" src={github} alt="GitHub" />
                <h1>sanyamjain1408</h1>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img
            className="w-96 p-0 rounded-3xl bg-gray-100 shadow-2xl shadow-black hover:p-0 hover:shadow-blue-400 
                        ease-in-out duration-200"
            src={sanyam}
            alt="sanyam jain"
          />
        </motion.div>
      </aside>
    </motion.div>
    </section>
  );
}
