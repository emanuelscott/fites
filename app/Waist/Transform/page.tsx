import React from 'react'

const Transform = () => {
    return (
        <div className='bg-black w-screen'>
          <img src='./peak.png' className='w-screen'/>
            <div className='flex flex-col flexCenter'>
                <div className='box mt-10 w-[439px] h-[92px] text-center text-balance'>
                <h1 className='uppercase text-[38px] text-white font-medium '>
                Start Your Waist Transformation Today
                            </h1>
                </div> 
    
                <div className=' mt-10 box w-[515px] h-[108px] text-center font-light'>
                <p className='text-white text-[18px]'>
                The Waist Wellness Program at Emanuel Scott Fitness offers a comprehensive and personalized approach to achieving a slimmer, more defined waistline. With expert guidance, customized workouts, and a supportive community, you'll have everything you need to strengthen your core and enhance your overall fitness.
                </p>
                </div>
    
                <a href='http://localhost:3000/Contact'>
      <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-10 mb-16 w-[210px] h-[60px] ">
       Secure Your Spot Now
      </button>
      </a>
            </div>
        </div>
      )
    }

export default Transform