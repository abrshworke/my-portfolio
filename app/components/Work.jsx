"use client";
import { motion } from "framer-motion";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Section Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        🎨 My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide drop-shadow-lg"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        Welcome to my **web development portfolio**! Explore a collection of
        **projects showcasing my expertise** in **full-stack development**.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {workData.map((project, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-auto"
          >
            <div
              className="w-full aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer overflow-hidden shadow-lg group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              {/* Dark Overlay for Readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500 rounded-lg"></div>

              {/* Project Info */}
              <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-3 px-5
                            flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg"
              >
                <div>
                  <h2 className="font-semibold text-lg">{project.title}</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Button */}
                <div
                  className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center
                            shadow-[2px_2px_0px_black] group-hover:bg-lime-300 dark:group-hover:bg-lime-500 transition-all duration-300"
                >
                  <Image src={assets.send_icon} alt="send icon" className="w-5" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

    </motion.div>
  );
};

export default Work;
