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
            Flutter Development using Dart and 
            Full-Stack Web Development (MERN Stack).
             I have hands-on experience in building responsive,
              user-friendly, and visually appealing web applications.
            </p>
            <p className="mt-4 text-gray-900">
              My technical expertise includes HTML, CSS, Tailwind, JavaScript,
               React, MongoDB, Dart, and API testing using Postman. I also
                specialize in Flutter development, creating scalable 
                cross-platform mobile applications with dynamic UI components,
                 state management, and REST API integration, backed by a strong
                  understanding of full-stack development principles.
            </p>
            <p className="mt-4 text-gray-900">
              I gained hands-on experience in Web Development at Fuel Flex Company,
               where I contributed to responsive web solutions and worked on UI/UX
                design for their partner application, creating intuitive and user-friendly
                 interfaces. Additionally, I completed a Flutter Developer internship at
                  TechPilot IT Solution, where I developed cross-platform mobile applications
                   using Dart and Flutter, implemented dynamic UI components, integrated REST
                    APIs, and managed application state for smooth performance. Combining this
                     with my Full-Stack Web Development skills, I am capable of developing,
                      optimizing, and enhancing both web and mobile applications to deliver 
                      a seamless user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
