import React from 'react'

const Hero3 = () => {
  return (
   
    <main className='w-screen h- bg-white flex flex-col'>
  
    <div className='flex flex-col '>
<div className='flex flex-row mt-10'>
<img src='./model3.png' className='ml-32'/>
<div className='flex flex-col ml-40 text-center items-center'>
<p className="font-semibold font-oswald text-[#D80000] text-[38px] uppercase">
Commitment to Excellence
</p>


<p className='font-oswald text-[18px] font-light mt-2 text-center'>
This program is for those who understand that personal growth is 
</p>
<p className='font-oswald text-[18px] font-light '>
essential not only for themselves but also for those who depend on them
</p>

<div className='flex flex-row box w-[424px] h-[65px] '>
    <img src='./hero3.png'/>
    <span className='text-[22px] uppercase font-medium'>
    If you want to be great, you must first believe that greatness lies within you.
    </span>
</div>

<div className='box w-[430px] h-[85px] text-[18px] mt-4'>
    <span>
    Your mind has the power to shape your reality. By reprogramming your thoughts and breaking old habits, you can transform your life. Embrace the potential within you to create a new future.
    </span>
</div>

<div className='box w-[430x] h-[54px] font-medium text-[18px] mt-4'>
    <span>
    We cultivate a mindset that is driven, resilient, and focused on achieving greatness.
    </span>
</div>

<div className='box w-[387px] h-[84px] font-medium text-[#D80000] text-[26px] mt-8 uppercase'>
    <span>
    If not now, then when? Your best self is waiting to shine.
    </span>
</div>
<button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-5 w-[210px] h-[60px]">
Limited Spots Available
  </button>


</div>



<img src='./model4.png' className='ml-16'/>
</div>
</div>
</main>
  )
}

export default Hero3