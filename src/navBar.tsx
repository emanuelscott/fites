import React from 'react'
import logo from  "./assets/Rectangle.png"
const Navbar = () => {
  return (
    

<nav className="border-gray-200 bg-black" style={{display:"table-row"}}>
  <div className="w-screen flex flex-wrap items-center justify-between mx-auto p-4">
  <div className='flex flex-row items-center'>
  
  <a href="http://localhost:3000/" className="flex ">
      <img src={logo} style={{width:"410px",height:"70px"}} />
  </a>
  </div>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-oswald">
      <button type="button" className="w-[115px] text-black bg-white text-[16px] px-4 py-2 text-center mr-20">CONTACT</button>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-oswald p-4 md:p-0 mt-4 border border-gray-100 bg-black xl:space-x-20 md:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black ">
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white text-[18px] bg-black rounded md:bg-transparent hover:text-[#BF0A0A]" aria-current="page">HOME</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A]">ABOUT</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#BF0A0A]">SERVICES</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white text-[18px] rounded hover:bg-gray-100 md:hover:bg-transparent  hover:text-[#BF0A0A]">BLOG</a>
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