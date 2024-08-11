import React from 'react'

const Landing = () => {
  return (
    <div className ="bg-black w-screen">
            <div className="relative mx-auto">
                <img src='./landing.png' className='w-screen'/>
    <div className="flex flex-col gap-y-5 absolute inset-0 items-center justify-center">
        <h2 className="text-[#D80000] text-[28px] ">
          Men's Program
          </h2>
      <p className='text-white text-[48px] uppercase font-medium'>
        endurance elite Program
      </p>

      <div className='box w-[484px] h-[101px] text-center'>
      <h3 className='text-white font-light'>
      Boost your stamina and overall functionality with dynamic stamina routines and functional fitness exercises. The program emphasizes recovery optimization, personalized life coaching, and video-guided exercises, complemented by custom nutrition plans and detailed progress tracking.      </h3>
      </div>

      <a href='http://localhost:3000/Endurance'>
  <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase  w-[210px] h-[60px] ">
      let's start now
  </button>
  </a>
    </div>
            </div>

    </div>
  )
}

export default Landing