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
            High-Intensity Workouts
                        </span>
            <div className='box w-[462px] h-[108px] ml-64 mt-2 font-light text-[18px] mb-6'>
                <span>
                Our Vigor Package includes a variety of high-intensity workouts designed to challenge your body and elevate your fitness level. These workouts are tailored to increase stamina, endurance, and overall athleticism. Key exercises include:                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>High-Intensity Interval </p>
                 </div>
           
            <p className='ml-64 font-light'>Short bursts of intense activity followed</p>
            <p className='ml-64 font-light'>by rest periods to maximize calorie burn</p>
            <p className='ml-64 font-light'>and improve cardiovascular health.</p>

            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2'>Circuit Training</p>
                 </div>
           
            <p className='ml-20 font-light'>Series of exercises performed in</p>
            <p className='ml-20 font-light'>succession with minimal rest to keep you</p>
            <p className='ml-20 font-light'>heart rate elevated and enhance endurance</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Plyometrics</p>
                 </div>
           
            <p className='ml-24 font-light'>Explosive movements like jump squats</p>
            <p className='ml-24 font-light'>and burpees to build power and speed.</p>

                    </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Sprint Intervals</p>
                 </div>
           
            <p className='ml-24 font-light'>Short, intense sprints followed by recovery</p>
            <p className='ml-24 font-light'>periods to boost cardiovascular and</p>
            <p className='ml-24 font-light'>muscular endurance.</p>

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