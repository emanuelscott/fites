import React from 'react'

const Transform = () => {
    return (
        <div className='2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] sm:h-[500px] '>
          <img src='./peak.png' className='w-screen'/>
            <div className='flex flex-col flexCenter'>
                <div className='box mt-10 2xl:w-[439px] xl:w-[439px] 2xl:h-[92px] xl:h-[92px] text-center text-balance'>
                <h1 className='uppercase text-[38px] text-white font-medium '>
                Ready to Transform Your Glutes?

                            </h1>
                </div> 
    
                <div className=' mt-10 box  2xl:w-[515px] 2xl:h-[108px] xl:w-[515px] xl:h-[108px] text-center font-light'>
                <p className='text-white text-[18px]'>
                Take the first step towards achieving the glutes you've always wanted. The Glute Maximizer Program at Emanuel Scott Fitness is your ultimate solution for building a stronger, more defined posterior. With targeted exercises, personalized nutrition, and expert coaching, you'll be on your way to sculpted glutes in no time.
                </p>
                </div>
    
                <a href='http://localhost:3000/Contact'>
      <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-8 mb-16 w-[210px] h-[60px] ">
       Secure Your Spot Now
      </button>
      </a>
            </div>
        </div>
      )
    }

export default Transform