import React from 'react'

const Hero = () => {
  return (
    <div className='mt-10 bg-white w-screen h-screen'>
     
        <div className='text-center flex flex-col items-center'>
            
                <p className='mt-20 text-[#D80000] text-[26px] font-oswald font-medium uppercase'>
                    Start  from where  you  are at  to  get  to  where  you  want  to  be
                </p>
            
            <div className='border border-white h-[236px]'>
                <p className='font-oswald font-medium uppercase text-[48px] text-center'>
                    our mission is to help you unlock your 
                </p>
                <p className='font-oswald font-medium uppercase text-[48px] text-center'>
                full potential and achieve greatness 
                </p>
                <p className='font-oswald font-medium uppercase text-[48px] text-center'>
                through a holistic approach to
                </p>
                <p className='font-oswald font-medium uppercase text-[48px] text-center'>
                fitness and well-being.
                </p>
                </div>

                <p className='mt-14 font-oswald font-light'>
                  True fitness encompasses physical strength, mental clarity, spiritual growth, and financial stability. Our programs
                  </p>
                  <p className='font-oswald font-light'>
                  are designed to guide you on a transformative journey that addresses all these aspects.
                  </p>

                  <p className='mt-3 font-oswald font-light'>
                  We provide personalized fitness plans to achieve optimal health, techniques to enhance mental resilience, 
                  </p>
                  <p className='font-oswald font-light'>
                  guidance for spiritual growth, and tools for financial stability. We am dedicated to supporting you every step of                  
                  </p>
                  <p className='font-oswald font-light'>
                  the way, ensuring you receive the resources and motivation needed to transform your life.
                  </p>

                  <p className='mt-16 text-[#D80000] text-[48px] font-oswald font-medium uppercase'>
                  Programs We Offer                
                  </p>
            
       
        </div>
        <div className="flex flex-row flexBetween">
    <div className="flex flex-col ml-40">
    <span className="font-semibold font-oswald text-[38px]  uppercase">Women  Unleash  Your </span>
    <span className="font-semibold font-oswald text-[38px] uppercase"> Potential Within </span>

    <div className="border border-white bg-white w-[381px] h-[108px]"> 
    <article className="text-wrap text-[18px] font-oswald font-light">
      <p>
      At Emanuel Scott Fitness, we understand that women have unique fitness goals. Our specialized programs are designed to help you grow your Glutes and tighten your waist, enhancing your natural curves and boosting your confidence.        </p>
    </article>
    </div>
   
    <p className='text-[#D80000] text-[18px] font-oswald uppercase mt-8 '>
    Glute  Maximizer  Program:
    </p>

      <div className='flex flex-row mt-2 ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Targeted exercises to sculpt and lift your glutes.</p>
      </div>
      <div className='flex flex-row  ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Support muscle growth and recovery with tailored meal plans.</p>
      </div>
      <div className='flex flex-row  ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Progress tracking and personalized adjustments.</p>
      </div>


      <p className='text-[#D80000] text-[18px] font-oswald uppercase mt-5 '>
      Waist  Wellness  Program    
      </p>

      <div className='flex flex-row mt-2 ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Strengthen and define your waist with planks and more</p>
      </div>
      <div className='flex flex-row  ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Cardio routines to burn fat and reveal your abs.</p>
      </div>
      <div className='flex flex-row  ml-3 space-x-2 items-center'>
        <img src='./arrow.png' className='w-[10px] h-[15px]'/>
        <p className='font-oswald text-[18px] font-light '>Flexible meal plans for optimal results.</p>
      </div>

      <button type="button" className=" font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-20 mr-20 w-[210px] h-[60px]">Start Women's program</button>

         </div>

         <div className="flex flex-row ">
      <img src='./max.png' className='h-[360px] mt-80 ' />
      <img src="./woman.png" className="h-[676px] w-[324px] mt-10 "/>

      <img src="./woman2.png" className="h-[676px] mb-2 "/>
      <img src='./circle.png' className='w-[133.42px] h-[133.47px] mt-80 mr-4'/>
      </div>
  
       </div>
    

    </div>
  )
}

export default Hero