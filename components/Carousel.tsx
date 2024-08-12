'use client'

import React from 'react'
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";

const Carousel = ({ activeItemIndex, setActiveItemIndex, carouselData }) => {
  return (
    <div className='flex items-center gap-2'>
      <button 
   onClick={() => {
    activeItemIndex !== 0 &&
      setActiveItemIndex((prevIndex) => prevIndex - 1);
  }}     
      className='duration-200 min-w-[50px] h-[50px] rounded-full grid place-items-center hover:text-[#D80000]'>
        <SlArrowLeftCircle />
        </button>

      <div className='min-w-[513px] grid place items-center rounded-md 
      h-[284px] bg-[#F6F6F6]'>




      </div>
      <button 
        onClick={() => {
          activeItemIndex !== carouselData.length - 1 &&
            setActiveItemIndex((prevIndex) => prevIndex + 1);
        }}
      className=' duration-200 min-w-[50px] h-[50px] rounded-full grid place-items-center hover:text-[#D80000]'>
      <SlArrowRightCircle/>        
      </button>

    </div>
  )
}

export default Carousel