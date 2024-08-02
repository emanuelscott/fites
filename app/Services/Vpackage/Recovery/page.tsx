import React from 'react'

const Recovery = () => {
  return (
    <main className="w-screen h-[591px]">
    <div className='flex flex-col '>

    <div className='flex flex-row flexBetween mt-20 ml-14 '>
         <div className='flex flex-col '>
        <span className='uppercase text-[38px] font-medium ml-64'>
        Recovery Strategies                
        </span>
        <div className='box w-[476px] h-[81px] ml-64 mt-2 font-light text-[18px] mb-6'>
            <span>
            Effective recovery is crucial for preventing burnout and ensuring continuous improvement. Our Vigor Package includes expert recovery strategies to help you recover faster and perform better. Key components include:
            </span>
                    </div>

    
        <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>Active Recovery</p>
                 </div>
           
            <p className='ml-64 font-light'>Light activities such as yoga or</p>
            <p className='ml-64 font-light'>stretching to enhance blood flow and </p>
            <p className='ml-64 font-light'>reduce muscle soreness.</p>

            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2'>Foam Rolling</p>
                 </div>
           
            <p className='ml-20 font-light'>Techniques to release muscle tension </p>
            <p className='ml-20 font-light'>and improve flexibility</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>Sleep Optimization</p>
                 </div>
           
            <p className='ml-64 font-light'>Guidance on improving sleep quality</p>
            <p className='ml-64 font-light'>for better recovery and performance</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Hydration and Nutrition Tips</p>
                 </div>
           
            <p className='ml-24 font-light'>Strategies to support recovery through</p>
            <p className='ml-24 font-light'>proper hydration and balanced nutrition</p>


                </div>
            </div>
        </div>

        <img src='./es6.png' className='mr-80 '/>
    </div>


       
    </div>
</main>
  )
}

export default Recovery;