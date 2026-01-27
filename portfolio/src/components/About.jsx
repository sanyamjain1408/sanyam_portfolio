import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-4xl text-gray-900 font-bold md:text-4xl">
              Hello everyone, I'm Sanyam Jain,
            </h2>
            <p className="mt-6 text-gray-950 text-2xl ">
              I am a B.Tech student (7th semester completed)
            specializing in Computer Science Engineering 
            at Parul University, with strong expertise in
            Full-Stack Web Development (MERN Stack) and
            UI/UX design. I have hands-on experience in 
            building responsive, user-friendly, and visually
             appealing web applications.
            </p>
            <p className="mt-4 text-gray-900">
              My technical expertise includes HTML, CSS, Tailwind, JavaScript, React, MongoDB,
              and API testing using Postman. Additionally, I am proficient in Figma for UI/UX
              design and have a deep understanding of both frontend and backend development.
            </p>
            <p className="mt-4 text-gray-900">
              I have gained hands-on experience in Web Development at Fuel Flex Company, where 
              I also worked on UI/UX design for their partner app, creating intuitive and
               user-friendly interfaces. Combining this with my skills in Full-Stack Web Development,
                I can efficiently develop, optimize, and enhance web applications to deliver a 
                seamless user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
