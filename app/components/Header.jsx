"use client";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        viewport={{ once: false }} 
        className="mt-12"
      >
        <Image 
          src={assets.ac} 
          alt="Profile" 
          className="rounded-full w-40 h-40 object-cover shadow-xl border-4 border-gray-300 dark:border-gray-700"
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="flex items-center gap-2 text-2xl md:text-3xl font-semibold"
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abreham Worke</span>
        <motion.span
          animate={{ rotate: [0, 15, 0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Image src={assets.hand_icon} alt="Waving Hand" className="w-6" />
        </motion.span>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="text-3xl sm:text-5xl font-bold leading-tight"
      >
        <motion.span
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          viewport={{ once: false }}
        >
          Full Stack Developer
        </motion.span>
        <br />
        <span className="text-gray-500 dark:text-gray-300 text-lg">
          Based in Addis Ababa
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: false }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
      >
        A passionate full-stack web developer from Addis Ababa, Ethiopia, with over
        four years of experience working across various frameworks to build scalable
        and dynamic applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: false }}
          href="#contact"
          className="px-8 py-3 border border-transparent rounded-full bg-blue-600 text-white font-medium flex items-center gap-2 transition hover:bg-blue-700"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: false }}
          href="/Resume.pdf"
          download
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 bg-white text-gray-800 font-medium transition hover:bg-gray-200"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
