

import React from 'react'

const Rating = () => {

  return (
    <main className='bg-white 2xl:w-screen 2xl:h-[350px] xl:h-[350px] sm:w-[800px] sm:h-[250px]'>
    <div className='flex flex-col'>
    <div className='text-[#D80000] 2xl:text-[38px] sm:text-[16px] md:text-[16px] lg:text-[30px] xl:text-[38px] font-medium font-oswald text-center uppercase mt-20'>
    What do they say about Emanuel Scott Fitness ?
      </div>
      <div className='flex flex-row flexCenter gap-5 justify-center items-center mt-14'>
   <img src='./previous.png' className='2xl:w-[47px] xl:w-[47px] 2xl:h-[47px] xl:h-[47px] sm:w-[30px] sm:h-[30px]'/>


   <div className='box 2xl:w-[514px] xl:w-[513px] 2xl:h-[284px] xl:h-[284px] bg-[#F6F6F6] sm:w-[200px] sm:h-[150px] '>
   <div className='flex flex-col flexCenter'>
   <img src='./stars.png' className='2xl:mt-4 2xl:w-[120px] 2xl:h-[60px] xl:w-[120px] xl:h-[60px] sm:w-[40px] sm:h-[30px]'/>
      <span className='text-balance text-center 2xl:text-[22px] xl:text-[22px] sm:text-[12px] indent-4'>
      Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The Glute Maximizer program was a game-changer for me
      </span>
    
      <img src='./profile.png' className='mt-5 w-[31px] h-[31px]' />
      <span className='uppercase text-[14px]'>
        breyana k
      </span>
   </div>
   
   </div>

 
   
   <div className='box 2xl:w-[514px] 2xl:h-[284px] xl:w-[513px] xl:h-[284px] bg-[#F6F6F6] sm:w-[200px] sm:h-[150px] '>
   <div className='flex flex-col flexCenter'>
   <img src='./stars.png' className='2xl:mt-4  2xl:w-[120px] 2xl:h-[60px] xl:w-[120px] xl:h-[60px] sm:w-[40px] sm:h-[30px]'/>
      <span className='text-balance text-center 2xl:text-[22px] xl:text-[22px] sm:text-[12px] indent-4'>
      Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The Glute Maximizer program was a game-changer for me
      </span>
    
      <img src='./profile2.png' className='mt-5 w-[31px] h-[31px]' />
      <span className='uppercase text-[14px]'>
        alex m
      </span>
   </div>
   
   </div>

   <img src='./next.png'className='2xl:w-[47px] xl:w-[47px] 2xl:h-[47px] xl:h-[47px] sm:w-[30px] sm:h-[30px]'/>
</div>

       
</div>


</main>
  )
}

export default Rating