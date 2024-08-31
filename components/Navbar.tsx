'use client'

import React from 'react'


const Navbar = () => {



  return (
    

<nav className=" sticky top-0 z-10 bg-gradient-to-r from-[#D80000] via-[#2B2B2B] to-black 2xl:w-screen xl:w-screen sm:w-[800px] ">
  <div className="2xl:w-screen xl:w-screen sm:w-[800px] flex flexcenter items-center justify-between mx-auto 2xl:p-4 xl:p-4 sm:p-0">
  <div className='flex flex-row items-center'>
  <img src='./cross.png' className='2xl:w-[52px] 2xl:h-[32.1px] 2xl:ml-8 xl:w-[52px] xl:h-[32.1px] xl:ml-8 
  sm:w-[30px] sm:h-[25px] sm:ml-4'/>
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse 2xl:ml-10 xl:ml-10 sm:ml-3">
      <img src="./logo2.png" className="2xl:h-[44.01px] 2xl:w-[149.81px] xl:w-[149.81px] xl:h-[44.01px] sm:w-[80px] sm:h-[24px]" />
  </a>
  </div>
  
  <div className= 'items-center justify-between w-full md:flex md:w-auto md:order-1' id="navbar-cta">
        
    <ul className="flex flex-row flexCenter gap-y-2 font-oswald 2xl:p-4 xl:p-4 sm:p-2 md:p-0 mt-4 xl:space-x-20 md:space-x-10 sm:space-x-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
    2xl:text-[18px] xl:text-[18px] sm:text-[12px] ">
      <li>
        <a href="https://esfitness.io/" className="block py-2 px-3 md:p-0  text-white rounded bg-transparent hover:text-[#BF0A0A]" aria-current="page">HOME</a>
      </li>
      <li>
        <a href="/About" className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A]">ABOUT</a>
      </li>
      <li>
        <a href="/Services" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A] ">SERVICES</a>
      </li>
      <li>
        <a href="/Blog" className="block py-2 px-3 md:p-0 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A]">BLOG</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A]">APP</a>
      </li>
    </ul>
  </div>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-oswald">
      <a href='/Contact'>
      <button type="button" className="2xl:w-[115px] xl:w-[115px] sm:w-[80px]  text-black bg-white 2xl:text-[16px] xl:text-[16px] sm:text-[10px] px-4 py-2 text-center 2xl:mr-20 xl:mr-20 sm:mr-10 hover:bg-[#BF0A0A] hover:text-white">CONTACT US</button>
      </a>     

    

  </div>
    </div>
</nav>

  )
}
export default Navbar;