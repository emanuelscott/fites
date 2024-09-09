import React from 'react'

const Landing = () => {
  return (
    <div className ="2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] sm:h-[600px]">
            <div className="2xl:relative xl:relative xl:mx-auto 2xl:mx-auto">
                <img src='./womenlanding.png' className='2xl:w-screen xl:w-screen sm:w-0'/>
    <div className="flex flex-col gap-y-5 absolute inset-0 items-center justify-center">
    <h2 className="text-[#D80000] 2xl:text-[28px] xl:text-[28px] sm:text-[40px] text-center">
        Women's program
          </h2>
      <p className='text-white text-[48px] uppercase font-medium text-center'>
      Waist Wellness Program
      </p>

      <div className='box 2xl:w-[484px] xl:w-[484px] h-[101px] text-center'>
      <h3 className='text-white font-light'>
      Strengthen and define your waistline with core-focused exercises and fat-burning cardio routines. This program includes comprehensive core workouts, flexible meal plans, and personalized coaching, ensuring a balanced approach to achieving a slimmer, more toned waist.
            </h3>
      </div>

      <a href='http://localhost:3000/Contact'>
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