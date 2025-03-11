"use client";
import { motion } from "framer-motion";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[10%] py-16 scroll-mt-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Section Header */}
      <motion.div className="text-center">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-lg font-Ovo text-gray-600 dark:text-gray-300"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
          className="text-5xl font-bold text-gray-800 dark:text-white"
        >
          About Me
        </motion.h2>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-16"
      >
        {/* Profile Image with Zoom & Rotation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative w-64 sm:w-80 rounded-3xl shadow-lg"
        >
          <Image
            src={assets.ac}
            alt="User"
            className="w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-lg text-gray-700 dark:text-gray-400 text-base  font-light">
            I am a passionate full-stack web developer with expertise in building dynamic, user-friendly, and scalable web applications.
            I love designing intuitive UI components, optimizing backend performance, and crafting seamless digital experiences.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05, rotate: 1 }}
                key={index}
                className="border border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer
                  bg-white dark:bg-gray-800 hover:shadow-xl hover:-translate-y-1 duration-500"
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-8 mb-3" />
                <h3 className="font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: false }}
            className="my-8 text-gray-700 dark:text-gray-300 text-lg font-semibold"
          >
            Tools I Use
          </motion.h4>

          {/* Tools Icons */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: false }}
            className="flex items-center gap-4 sm:gap-6 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.15, rotate: 5 }}
                key={index}
                className="flex items-center justify-center w-14 sm:w-16 aspect-square
                  border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 shadow-md"
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
