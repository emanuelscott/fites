'use client'

import React from 'react'


const Navbar = () => {



  return (
    

<nav className="bg-gradient-to-r from-[#D80000] via-[#2B2B2B] to-black 2xl:w-screen xl:w-screen sm:w-[800px] ">
  <div className="2xl:w-screen xl:w-screen sm:w-[800px] flex flex-wrap items-center justify-between mx-auto p-4">
  <div className='flex flex-row items-center'>
  <img src='./cross.png' className='w-[52px] h-[32.1px] ml-8'/>
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse ml-10">
      <img src="./logo2.png" className="h-[44.01px] w-[149.81px]" />
  </a>
  </div>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-oswald">
      <a href='/Contact'>
      <button type="button" className="w-[115px] text-black bg-white text-[16px] px-4 py-2 text-center mr-20 hover:bg-[#BF0A0A] hover:text-white">CONTACT US</button>
      </a>     

    

  </div>
  <div className= 'items-center justify-between w-full md:flex md:w-auto md:order-1' id="navbar-cta">
        
    <ul className="flex flex-row flexCenter gap-y-2 font-oswald p-4 md:p-0 mt-4 xl:space-x-20 md:space-x-10 sm:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
      <li>
        <a href="https://esfitness.io/" className="block py-2 px-3 md:p-0  text-white text-[18px] rounded bg-transparent hover:text-[#BF0A0A]" aria-current="page">HOME</a>
      </li>
      <li>
        <a href="/About" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A]">ABOUT</a>
      </li>
      <li>
        <a href="/Services" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A] ">SERVICES</a>
      </li>
      <li>
        <a href="/Blog" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A]">BLOG</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A]">APP</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}
export default Navbar;