import React from 'react'

const Metabolic = () => {
  return (
    <main className='w-screen h-[673px] bg-black'>
        <div className='flex flex-col '>

        <div className='flex flex-row flexBetween mt-20 '>
        <img src='./es5.png' className='ml-80'/>

             <div className='flex flex-col mr-40'>
            <span className='uppercase text-[38px] font-medium text-white'>
            Metabolic Training
            </span>
            <div className='box w-[440px] h-[108px] mt-2 font-light text-[18px] text-white mb-8 mr-40'>
                <span>
                Achieving physical fitness requires mental toughness and focus. Our Mastermind Package includes mindset coaching to help you develop the mental resilience needed to push through challenges and stay motivated. Key components include:                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' />
                <p className='uppercase text-[16px] text-white ml-2 '>Kettlebell Circuits</p>
                 </div>
           
            <p className=' font-light text-white'>Full-body workouts that boost</p>
            <p className=' font-light text-white'>metabolism and burn fat.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row text-white'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2 text-white'>Battle Ropes</p>
                 </div>
           
            <p className='ml-20 font-light text-white'>High-intensity exercises that</p>
            <p className='ml-20 font-light text-white'>enhance cardiovascular health and </p>
            <p className='ml-20 font-light text-white'>build muscle endurance.</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className=''/>
                <p className='uppercase text-[16px] ml-2 text-white'>Tabata Training</p>
                 </div>
           
            <p className='font-light text-white'>A form of HIIT with 20 seconds of</p>
            <p className='font-light text-white'>work followed by 10 seconds of</p>
            <p className='font-light text-white'>rest, repeated for multiple rounds.</p>

            </div>

            <div className='flex flex-col'>
            <div className='flex flex-row text-white'>
                <img src='./vector.png' className='ml-14 mt-5'/>
                <p className='uppercase text-[16px] ml-2 text-white mt-5 '>Bodyweight Circuits</p>
                 </div>
           
            <p className='ml-14 font-light text-white'>Effective routines using your </p>
            <p className='ml-14 font-light text-white'>own body weight to improve</p>
            <p className='ml-14 font-light text-white'>strength and metabolic rate.</p>

            </div>
                </div>
                
            </div>

           
        </div>


           <img src='./line6.png' className='h-[180px] mt-6 '/>
        </div>
    </main>
  )
}

export default Metabolic