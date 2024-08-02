import React from 'react'

const Vitality = () => {
  return (
    <main className='bg-black w-screen h-[460px]'>

    <div className='flex flex-row flexCenter '>
        <img src='./lean1.png' className='' />
        <img src='./lean2.png' className=''/>
    <div className='flex flex-col flexCenter'>
      <div className='box w-[485px] h-[92px] text-center'>
        <span className='text-white uppercase font-medium text-[38px] '>
        Ready to Boost Your Vitality and Athleticism?       
         </span>
        </div>
        
        <div className='box w-[515px] h-[81px] text-center mt-10'>
        <span className='text-white font-light text-[18px]'>
        Join our Vigor Package at Emanuel Scott Fitness and start your journey to enhanced stamina and peak physical condition. Our comprehensive approach ensures that you receive the support and guidance you need to achieve your fitness goals.        </span>
        </div>

        <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-5 w-[210px] h-[60px]">Start Men's program</button>

    </div>

    <img src='./lean3.png'/>
    <img src='./lean4.png'/>
    </div>
   </main>
  )
}

export default Vitality