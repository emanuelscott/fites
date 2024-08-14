import React from 'react'
import "./output.css"
const Footer = () => {
  return (
    <footer className='bottom-0 left-0 p-4 flexBetween w-screen' style={{display:"table-row",background:"#0C0C0C"}} >
            <div className="mx-auto w-screen">

      <div className="grid grid-cols-2 gap-6 px-4 py-6 lg:py-8 md:grid-cols-4 xl:grid-cols-6 ml-20 mt-10">
        <div>
            <img src='./logo.png' className='mt-12 '/>
            <div className='border w-[194px] h-[57px] border-[#0C0C0C] mt-4  '>
        <span className='text-[#D5D5D5] uppercase text-[14px] text-wrap font-oswald font-light '>Our mission is to empower you to discover your inner strength and achieve the extraordinary</span>
        </div>
        </div>

        <div >
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-oswald ">ES FITNESS</h2>
            <ul className="text-[#D5D5D5] font-light  uppercase font-oswald">
                <li className="mb-4">
                    <a href="#" className="hover:underline">home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">about</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">coaching</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Community</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white font-oswald">SERVICE</h2>
            <ul className="text-[#D5D5D5] font-light uppercase font-oswald">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Booty Builder Program</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Waist Trimmer Program</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Mastermind Package</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Vigor Package</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Heating Up Package</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase font-oswald">social media</h2>
            <ul className="text-[#D5D5D5] font-light uppercase font-oswald">
                <li className="mb-4">
                    <a href="#" className="hover:underline">instagram</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">youtube</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">x/twitter</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase font-oswald">links</h2>
            <ul className="text-[#D5D5D5] font-light  uppercase font-oswald">
                <li className="mb-4">
                    <a href="#" className="hover:underline">contact</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">privacy policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">terms & conditions</a>
                </li>
            </ul>
        </div>

        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white uppercase font-oswald">download mobible apps</h2>
            <ul className="text-[#D5D5D5] font-light uppercase font-oswald">
                <li className="mb-4">
                    <a href="#" className="hover:underline">contact</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">privacy policy</a>
                </li>
               
            </ul>
        </div>
    </div>
    <div className='border border-[#444444] ml-20 mr-20'></div>

    <div className=" bg-[#0C0C0C] flexCenter mt-4">
        <span className="text-[13px] text-[#D5D5D5] sm:text-center uppercase font-oswald">©copyright 2024 - All Rights Reserved.
        </span>
       
      </div>

</div>
        </footer>
  )
}

export default Footer