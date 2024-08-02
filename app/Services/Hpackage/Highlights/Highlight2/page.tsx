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
            Cardio and Conditioning
            </span>
            <div className='box w-[462px] h-[108px] ml-64 mt-2 font-light text-[18px] mb-6'>
                <span>
                Our Heating Up Package includes a variety of intense cardio workouts designed to elevate your heart rate and maximize calorie burn. These sessions are tailored to improve cardiovascular health and enhance endurance. Key exercises include:                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>High-Intensity Interval </p>
                 </div>
           
            <p className='ml-64 font-light'>Short bursts of intense activity followed</p>
            <p className='ml-64 font-light'>by rest periods to burn fat efficiently</p>
            <p className='ml-64 font-light'>and improve cardiovascular fitness.</p>

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
                <p className='uppercase text-[16px] ml-2'>Cycling</p>
                 </div>
           
            <p className='ml-64 font-light'>Engage in high-energy cycling session</p>
            <p className='ml-64 font-light'>to boost cardiovascular endurance and</p>
            <p className='ml-64 font-light'>burn calories.</p>
    
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Rowing</p>
                 </div>
           
            <p className='ml-24 font-light'>Full-body cardio workouts that</p>
            <p className='ml-24 font-light'>strengthen muscles and improve</p>
            <p className='ml-24 font-light'>heart health.</p>

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