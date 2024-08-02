import React from 'react'

const Functional = () => {
  return (
    <main className='w-screen h-[673px] bg-black'>
        <div className='flex flex-col '>

        <div className='flex flex-row flexBetween mt-20 '>
        <img src='./es5.png' className='ml-80'/>

             <div className='flex flex-col mr-40'>
            <span className='uppercase text-[38px] font-medium text-white'>
            Functional Training            </span>
            <div className='box w-[440px] h-[108px] mt-2 font-light text-[18px] text-white mb-8 mr-40'>
                <span>
                Functional training exercises are designed to improve your overall body functionality and reduce the risk of injury. These exercises mimic real-life movements and enhance strength, flexibility, and coordination. Key exercises include:                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' />
                <p className='uppercase text-[16px] text-white ml-2 '>Kettlebell Swings</p>
                 </div>
           
            <p className=' font-light text-white'>Improve strength and</p>
            <p className=' font-light text-white'>cardiovascular fitness.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row text-white'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2 text-white'>Medicine Ball Slams</p>
                 </div>
           
            <p className='ml-20 font-light text-white'>Enhance power and core </p>
            <p className='ml-20 font-light text-white'>strength.</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className=''/>
                <p className='uppercase text-[16px] ml-2 text-white'>TRX Rows</p>
                 </div>
           
            <p className='mr-40 font-light text-white'>Develop upper body and core</p>
            <p className='mr-40 font-light text-white'>strength.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className=''/>
                <p className='uppercase text-[16px] ml-2 text-white'>Farmer's Walk</p>
                 </div>
           
            <p className='mr-40 font-light text-white'>Build grip strength and</p>
            <p className='mr-40 font-light text-white'>overall stability.</p>
                 
            </div>
                </div>
            </div>

           
        </div>


           <img src='./line6.png' className='h-[180px] mt-6 '/>
        </div>
    </main>
  )
}

export default Functional