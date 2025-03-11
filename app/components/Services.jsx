"use client";
import { motion } from "framer-motion";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Section Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300"
      >
        🚀 What I Offer
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-extrabold text-gray-900 dark:text-white tracking-wide drop-shadow-lg"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        I build **fast, responsive, and scalable** web applications, handling **both front-end and back-end**
        development to create seamless digital experiences.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group relative border border-gray-300 dark:border-gray-600 rounded-2xl px-8 py-12
              bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-r from-blue-50 to-white
              dark:hover:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 transition-transform duration-500
              shadow-md dark:shadow-gray-700 cursor-pointer"
          >
            {/* Icon */}
            <div className="absolute -top-6 left-6 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
              <Image src={icon} alt={title} className="w-10" />
            </div>

            {/* Content */}
            <h3 className="text-lg my-4 text-gray-800 dark:text-white font-semibold group-hover:text-blue-600 transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-6 dark:text-white/80">
              {description}
            </p>

            {/* Read More Link */}
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              Read more <Image src={assets.right_arrow} alt="arrow" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
