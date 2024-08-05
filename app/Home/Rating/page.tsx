import React from 'react'

const Rating = () => {
  return (
    <main className='bg-white w-screen'>
        <div className='flex flex-col'>
        <div className='text-[#D80000] text-[38px] font-medium font-oswald text-center uppercase mt-20'>
        What do they say about Emanuel Scott Fitness ?
          </div>
          <div className='flex flex-row flexBetween justify-center items-center mt-20'>
       <img src='./previous.png' className='ml-20 '/>

      <div className='flex flex-col text-center items-center'>
       <div className='box w-[513px] h-[284px] bg-[#F6F6F6] '>
       <img src='./stars.png' className=''/>
          <span className='text-balance text-center font-semibold text-[22px] indent-4'>
          Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me
          </span>
        
          <img src='./profile.png' className='' />
          <span className='uppercase text-[22px]'>
            breyana k
          </span>
       </div>
       
       </div>

       <div className='flex flex-col'>
       <div className='box w-[520px] h-[170px]'>
          <span className='text-balance text-center font-semibold text-[24px]'>
          Joining the Vigor Package was the best decision I've made for my fitness journey. The high-intensity workouts and functional training have significantly improved my stamina and overall performance. The recovery strategies have helped me push harder without burnout."          </span>
          <img src='./stars.png' className='ml-36'/>
          <img src='./profile2.png' className='ml-48' />
          <span className='uppercase text-[22px] ml-48 '>
            alex m
          </span>
       </div>
</div>
       <img src='./next.png' className='mr-20'/>
    </div>
</div>
       

       
    </main>
  )
}

export default Rating