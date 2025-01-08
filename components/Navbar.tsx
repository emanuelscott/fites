"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 bg-black flex flexBetween items-center text-center h-20 bg-gradient-to-r from-[#D80000] via-[#2B2B2B] to-black overflow-x-hidden px-4 text-white ">
      {/* Logo */}
      <div className="flex flex-row items-center">
        <img
          src="./cross.png"
          className="2xl:w-[52px] 2xl:h-[32.1px] 2xl:ml-8 xl:w-[52px] xl:h-[32.1px] xl:ml-8 
  sm:w-[38.14px] sm:h-[23.54px] sm:ml-4"
        />
        <a
          href="#"
          className="flex items-center rtl:space-x-reverse  2xl:ml-10 xl:ml-10 sm:ml-3"
        >
          <img
            src="./logo2.png"
            className="2xl:h-[44.01px] 2xl:w-[149.81px] xl:w-[149.81px] xl:h-[44.01px] sm:w-[109.86px] sm:h-[32.28px]"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 2xl:space-x-16 xl:space-x-16 text-[20px]">
        <li>
          <a
            href="https://esfitness.io/"
            className="block py-2 px-3 md:p-0  text-white  rounded bg-transparent hover:text-[#BF0A0A]"
            aria-current="page"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/About"
            className="block py-2 px-3 md:p-0 text-white  rounded  md:hover:bg-transparent hover:text-[#BF0A0A]"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="/Services"
            className="block py-2 px-3 md:p-0 text-white rounded  md:hover:bg-transparent hover:text-[#BF0A0A] "
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="/Blog"
            className="block py-2 px-3 md:p-0 text-white  rounded  md:hover:bg-transparent  hover:text-[#BF0A0A]"
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-white rounded  md:hover:bg-transparent  hover:text-[#BF0A0A]"
          >
            APP
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-20 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] "
        }
      >
        {/* Mobile Navigation Items */}

        <li>
          <a
            href="https://esfitness.io/"
            className="block py-2 px-3 md:p-0  text-white hover:bg-gray-100 rounded bg-transparent hover:text-[#BF0A0A] text-[24px]"
            aria-current="page"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="/About"
            className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A] text-[24px]"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="/Services"
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A] text-[24px] "
          >
            SERVICES
          </a>
        </li>
        <li>
          <a
            href="/Blog"
            className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A] text-[24px]"
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A] text-[24px]"
          >
            APP
          </a>
        </li>
        <li>
          <a
            href="/Contact"
            className="block py-2 px-3 md:p-0 bg-white text-black rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A] text-[24px] w-fit mx-auto"
          >
            CONTACT US
          </a>
        </li>
      </ul>

      <div className="flex md:order-2 md:space-x-0 rtl:space-x-reverse font-oswaldn hidden md:block ">
        <a href="/Contact">
          <button
            type="button"
            className="p-2 text-black bg-white hover:bg-[#BF0A0A] hover:text-white"
          >
            CONTACT US
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
