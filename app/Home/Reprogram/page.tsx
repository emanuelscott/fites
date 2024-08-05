import React from 'react'

const Reprogram = () => {
  return (
   <main className='w-screen h-[390px] bg-black'>
    <img src="./line9.png" className="w-screen h-[164px] "/>

    <div className='flex flex-row flexCenter'>
        <p className='text-white text-[38px] font-medium uppercase'>
        Reprogram for
        </p>
    <p className='text-[#D80000] text-[38px] font-medium uppercase ml-2'>
        Success
        </p>
    </div>

    <div className='flex flex-row flexCenter gap-x-4 mt-4'>
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