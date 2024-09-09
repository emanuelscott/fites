import React from 'react'

const Customer = () => {
  return (
    <main className='bg-white 2xl:w-screen 2xl:h-[600px] xl:w-screen xl:h-[550px] sm:w-[390px] sm:h-[500px] '>
    <div className='flex flex-col'>
    <div className='text-[#D80000] 2xl:text-[38px] sm:text-[28px] md:text-[24px] lg:text-[30px] xl:text-[38px] font-medium font-oswald text-center uppercase mt-20'>
    What do they say about Emanuel Scott Fitness ?
      </div>
      <div className='flex flex-row flexCenter gap-5 justify-center items-center mt-14'>
   <img src='./previous.png' className='2xl:visible xl:visible sm:invisible 2xl:w-[47px] 2xl:h-[47px] xl:w-[47px] xl:h-[47px] sm:w-[0px]'/>


   <div className='box 2xl:w-[514px] 2xl:h-[284px] xl:w-[514px] xl:h-[284px] bg-[#F6F6F6] sm:w-[354.51px] sm:h-[196.2px] sm:ml-5 '>
   <div className='flex flex-col flexCenter'>
   <img src='./stars.png' />
      <span className='text-balance text-center 2xl:text-[22px] xl:text-[22px] sm:text-[15px] indent-4'>
      Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The Glute Maximizer program was a game-changer for me
      </span>
    
      <img src='./profile.png' className='mt-5 2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] sm:w-[24px] sm:h-[24px]' />
      <span className='uppercase 2xl:text-[20px] xl:text-[20px] sm:text-[10px] mt-2'>
        breyana k
      </span>
   </div>
   
   </div>

 
   
   <div className='box 2xl:w-[514px] 2xl:h-[284px] xl:w-[514px] xl:h-[284px] bg-[#F6F6F6] sm:w-[0] sm:h-[0] 2xl:visible xl:visible sm:invisible'>
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

   <img src='./next.png' className='2xl:visible xl:visible sm:invisible 2xl:w-[47px] 2xl:h-[47px] xl:w-[47px] xl:h-[47px] sm:w-[0px]'/>
</div>

       
</div>


</main>
  )
}

export default Customer