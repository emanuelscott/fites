'use client'

import React from 'react'
import { useRef, useState } from "react";
import Carousel from "@/components/Carousel";

const Testpage = () => {
    const carouselData = useRef([
        {
          image: "./stars.png",
   
          subject: "Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me",
          profile: "./profile.png",
          name: "BREYANA K"

        },
        {
            image: "./stars.png",
         
          subject: "Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me",
          profile: "./profile.png",
          name: "RAMSEY NOAH"

        },
        {
            image: "./stars.png",
        
            subject: "Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me",
            profile: "./profile.png",
            name: "KIMBERLY N"
  
          },
          {
            image: "./stars.png",
            
            subject: "Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me",
            profile: "./profile.png",
            name: "JOSH SEGERA"
  
          },
      ]);

      const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
   
        <main className='bg-white w-screen h-[400px] '>
        <div className='flex flex-col'>
        <div className='text-[#D80000] text-[38px] font-medium font-oswald text-center uppercase mt-20'>
        What do they say about Emanuel Scott Fitness ?
          </div>
          <div className='flexCenter mt-14'>
    <Carousel

activeItemIndex={activeItemIndex}
setActiveItemIndex={setActiveItemIndex}
carouselData={carouselData.current}
/>
</div>
       </div>
    </main>
      

  )
}

export default Testpage