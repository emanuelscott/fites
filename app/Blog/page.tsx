import React from 'react'


const Blog = () => {
   
    
  return (
   <main className='bg-black w-screen h-screen mt-48'>
        <img src='./line4.png' className='w-screen '/>

    <div className='flex flex-col mt-8'>
        <span className='text-white uppercase font-bold text-center text-[38px]'>
            blog
        </span>
        
        <div className='flex flex-row flexBetween mt-10'>

            <div className='flex flex-col ml-20 mb-10'>
                <img src='./es.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[297px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                Top 5 Cardio Workouts to Boost Stamina and Burn Fat
                </span>
                </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                    </p>

             `<p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='flex flex-col mb-10'>
                <img src='./es2.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[364px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                Strength Training for Beginners: Your First Steps to an Ideal Body                </span>
                </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                </p>
                <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='flex flex-col mr-20 mb-10'>
                <img src='./es3.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                <div className='box w-[389px] h-[58px]'>
                <span className='text-white uppercase text-[24px]'>
                How to Effectively Combine Yoga and Fitness for Optimal Results
                </span>
                    </div>
                <div className='flex flex-row mt-8'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                </p>
                <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>
        </div>
    </div>
   </main>
  )
}

export default Blog