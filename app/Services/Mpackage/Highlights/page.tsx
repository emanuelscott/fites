import React from 'react'

const Highlights = () => {
  return (
    <main className="w-screen h-[673px] ">
        <div className='flex flex-col '>
            <span className='text-[#D80000] text-[48px] font-medium uppercase text-center'>
                program Highlights
            </span>

        <div className='flex flex-row flexBetween mt-20 ml-14 '>
             <div className='flex flex-col'>
            <span className='uppercase text-[38px] font-medium ml-64'>
            Intensive Strength Training
            </span>
            <div className='box w-[462px] h-[108px] ml-64 mt-2 font-light text-[18px] mb-6'>
                <span>
                Our Mastermind Package includes a variety of strength training exercises designed to maximize muscle growth and overall strength. These exercises are tailored to challenge every muscle group, ensuring balanced development and optimal results. Key exercises include:
                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>Bench Press</p>
                 </div>
           
            <p className='ml-64 font-light'>Develop upper body strength and</p>
            <p className='ml-64 font-light'>muscle mass.</p>

            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2'>Squats</p>
                 </div>
           
            <p className='ml-20 font-light'>Increase lower body strength an</p>
            <p className='ml-20 font-light'>muscle size.</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>Deadlifts</p>
                 </div>
           
            <p className='ml-64 font-light'>Enhance overall strength and </p>
            <p className='ml-64 font-light'>muscle activation.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Pull-Ups</p>
                 </div>
           
            <p className='ml-24 font-light'>Build upper body strength and </p>
            <p className='ml-24 font-light'>endurance.</p>

                    </div>
                </div>
            </div>

            <img src='./es4.png' className='mr-80'/>
        </div>


           
        </div>
    </main>
  )
}

export default Highlights