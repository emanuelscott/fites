import React from 'react'

const Reprogram = () => {
  return (
   <main className='2xl:w-screen 2xl:h-[390px] xl:w-screen xl:h-[320px] sm:w-[800px] sm:h-[400px] bg-black'>
    <img src="./line9.png" className="2xl:w-screen 2xl:h-[164px] "/>

    <div className='flex flex-row flexCenter mt-5'>
        <p className='text-white 2xl:text-[38px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[38px] font-medium uppercase '>
        Reprogram for
        </p>
    <p className='text-[#D80000] 2xl:text-[38px] sm:text-[24px] md:text-[24px] lg:text-[30px] xl:text-[38px] font-medium uppercase ml-2'>
        Success
        </p>
    </div>

    <div className='flex flex-row flexCenter gap-x-4 mt-4 flex-wrap gap-y-5'>
    <div className='bg-[#0C0C0C] box w-[277px] h-[99px] flex flex-row items-center'>
        <img src='./flex.png' className='w-[66px] h-[56px] ml-5'/>
        <p className='text-white text-[20px] text-wrap uppercase ml-2'>
        Reprogram your mind and body
        </p>
    </div>

    <div className='bg-[#0C0C0C] box w-[277px] h-[99px] flex flex-row items-center'>
        <img src='./curl.png' className='w-[66px] h-[56px] ml-5'/>
        <p className='text-white text-[20px] text-wrap uppercase ml-2'>
        Reprogram your mind and body
        </p>
    </div>

    <div className='bg-[#0C0C0C] box w-[277px] h-[99px] flex flex-row items-center'>
        <img src='./check.png' className='w-[66px] h-[56px] ml-5'/>
        <p className='text-white text-[20px] text-wrap uppercase ml-2'>
        Reprogram your mind and body
        </p>
    </div>

    <div className='bg-[#0C0C0C] box w-[277px] h-[99px] flex flex-row items-center'>
        <img src='./run.png' className='w-[66px] h-[56px] ml-5'/>
        <p className='text-white text-[20px] text-wrap uppercase ml-2'>
        Reprogram your mind and body
        </p>
    </div>
    </div>
   </main>
  )
}

export default Reprogram