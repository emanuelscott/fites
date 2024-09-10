import React from 'react'

const Elevate = () => {
  return (
    <div className ="2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] sm:h-[500px] ">
      <img src='./peak.png' className='w-screen'/>
        <div className='flex flex-col flexCenter'>
        <div className='box mt-10 2xl:w-[439px] xl:w-[439px] 2xl:h-[92px] xl:h-[92px] text-center text-balance'>
            <h1 className='uppercase text-[30px] text-white font-medium '>
            Elevate Your Endurance to Elite Levels
                        </h1>
            </div> 

            <div className=' mt-10 box 2xl:w-[515px] 2xl:h-[108px] xl:w-[515px] xl:h-[108px] text-center font-light'>
            <p className='text-white text-[18px]'>
            The Endurance Elite Program at Emanuel Scott Fitness is your ultimate guide to building unparalleled stamina and functionality. With expert coaching, personalized training plans, and a holistic approach, you'll have everything you need to boost your endurance, enhance your fitness, and achieve peak performance in all areas of life.            </p>
            </div>

            <a href='/Contact'>
  <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-10 mb-16 w-[210px] h-[60px] ">
   Secure Your Spot Now
  </button>
  </a>
        </div>
    </div>
  )
}

export default Elevate