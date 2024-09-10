import React from 'react'

const Landing = () => {
  return (
    <div className ="2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] sm:h-[700px]">
            <div className='2xl:relative xl:relative xl:mx-auto 2xl:mx-auto'>
                <img src='./womenlanding.png' className='2xl:w-screen xl:w-screen sm:w-0'/>
    <div className="flex flex-col gap-y-5 absolute inset-0 items-center justify-center ">
        <h2 className="text-[#D80000] 2xl:text-[28px] xl:text-[28px] sm:text-[40px] text-center">
        Women's program
          </h2>
      <p className='text-white text-[48px] uppercase font-medium text-center'>
      Sculpt & Tone Program
      </p>
      <div className='box 2xl:w-[484px] xl:w-[484px] h-[101px] text-center'>
      <h3 className='text-white font-light'>
      Transform your body with a focus on achieving a lean, toned physique through high-energy workouts, strength training, and flexibility exercises. Our program includes personalized life coaching, custom meal plans, and progress tracking, with weekly live check-ins and 24/7 app support.
            </h3>
      </div>

      <a href='/Contact'>
  <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase  w-[210px] h-[60px] sm:mt-4">
      let's start now
  </button>
  </a>
    </div>
    </div>

    </div>
  )
}

export default Landing