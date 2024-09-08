import React from 'react'


const Blog = () => {
   
    
  return (
   <main className='bg-black 2xl:w-screen 2xl:h-[900px] xl:w-screen xl:h-[840px] sm:w-[1150px] sm:h-[950px] mt-48 mx-auto'>
        <img src='./line4.png' className='min-w-screen'/>

    <div className='flex flex-col mt-8'>
        <span className='text-white uppercase font-bold text-center text-[38px] '>
            blog
        </span>
        
        <div className='flex flex-row flexBetween 2xl:gap-x-20 xl:gap-x-20 mt-10 sm:overflow-auto gap-x-2 sm:flexCenter'>

            <div className='flex flex-col 2xl:ml-20 mb-10'>
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
                <img src='./es2.png' className='2xl:w-[]' />
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

            <div className='flex flex-col mb-10'>
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

        <div className='flexCenter'>
        <a href='/Blog'>
    <button type="button" className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase w-[210px] h-[60px] 
    2xl:invisible xl:invisible lg:invisible sm:visible">
        explore all blogs
  </button>
    </a>
        </div>
    </div>
   </main>
  )
}

export default Blog