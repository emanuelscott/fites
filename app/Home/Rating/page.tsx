

import React from 'react'

const Rating = () => {

  return (
    <main className='bg-white 2xl:w-screen 2xl:h-[350px] xl:w-screen xl:h-[350px] sm:w-[1150px] sm:h-[400px] mx-auto'>
    <div className='flex flex-col'>
    <div className='text-[#D80000] 2xl:text-[38px] sm:text-[32px] md:text-[24px] lg:text-[30px] xl:text-[38px] font-medium font-oswald text-center uppercase mt-20'>
    What do they say about Emanuel Scott Fitness ?
      </div>
      <div className='flex flex-row flexCenter gap-5 justify-center items-center mt-14'>
   <img src='./previous.png'/>


   <div className='box w-[514px] h-[284px] bg-[#F6F6F6] '>
   <div className='flex flex-col flexCenter'>
   <img src='./stars.png' />
      <span className='text-balance text-center text-[22px] indent-4'>
      Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The Glute Maximizer program was a game-changer for me
      </span>
    
      <img src='./profile.png' className='mt-5 w-[60px] h-[60px]' />
      <span className='uppercase text-[20px] mt-2'>
        breyana k
      </span>
   </div>
   
   </div>

 
   
   <div className='box w-[514px] h-[284px] bg-[#F6F6F6] '>
   <div className='flex flex-col flexCenter'>
   <img src='./stars.png'/>
      <span className='text-balance text-center text-[22px] indent-4'>
      Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The Glute Maximizer program was a game-changer for me
      </span>
    
      <img src='./profile2.png' className='mt-5 w-[60px] h-[60px]' />
      <span className='uppercase text-[20px] mt-2'>
        alex m
      </span>
   </div>
   
   </div>

   <img src='./next.png'/>
</div>

       
</div>


</main>
  )
}

export default Rating