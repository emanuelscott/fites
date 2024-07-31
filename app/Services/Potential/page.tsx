import React from 'react'

const Potential = () => {
  return (
   <main className='bg-black w-screen h-[460px]'>

    <div className='flex flex-row flexBetween '>
        <img src='./lean1.png' />
        <img src='./lean2.png'/>
    <div className='flex flex-col flexCenter grow-0'>
        <span className='text-white uppercase font-medium text-[38px] '>
        Ready to Unlock Your Full
        </span>
        <span className='text-white uppercase font-medium text-[38px] '>
        Potential?
        </span>
        <span className='text-white font-light text-[18px] mt-5'>
        Join our Mastermind Package at Emanuel Scott Fitness and start your journey to a 
        </span>
        <span className='text-white font-light text-[18px]'>
        stronger, more focused you. Our comprehensive approach ensures that you receive
        </span>
        <span className='text-white font-light text-[18px]'>
        the support and guidance you need to achieve your fitness goals.        
        </span>
        
        <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-5 w-[210px] h-[60px]">Start Men's program</button>

    </div>

    <img src='./lean3.png'/>
    <img src='./lean4.png'/>
    </div>
   </main>
  )
}

export default Potential