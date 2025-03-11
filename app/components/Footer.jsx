import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      
      <div className="text-center">
      <h1 className="text-4xl font-bold text-center text-gray-800">Abraham</h1>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email Icon"
            className="w-6"
          />
          Abrehamworke78@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6
        dark:border-gray-700"
      >
        <p className="text-gray-700 dark:text-gray-300">
          &copy; 2025 Abreham Worke. All rights reserved.
        </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/abrshworke/"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/mynetwork/grow/?skipRedirect=true/"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="@wskaf"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
