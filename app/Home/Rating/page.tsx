import React from 'react'

const Rating = () => {
  return (
    <main className='bg-white w-screen h-[400px] '>
        <div className='flex flex-col'>
        <div className='text-[#D80000] text-[38px] font-medium font-oswald text-center uppercase mt-20'>
        What do they say about Emanuel Scott Fitness ?
          </div>
          <div className='flex flex-row flexCenter gap-5 justify-center items-center mt-20'>
       <img src='./previous.png' className=' '/>

    
       <div className='box w-[513px] h-[284px] bg-[#F6F6F6] '>
       <div className='flex flex-col flexCenter'>
       <img src='./stars.png' className='mt-4'/>
          <span className='text-balance text-center text-[22px] indent-4'>
          Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me
          </span>
        
          <img src='./profile.png' className='mt-5  w-[31px] h-[31px]' />
          <span className='uppercase text-[14px]'>
            breyana k
          </span>
       </div>
       
       </div>

     
       <div className='box w-[513px] h-[284px] bg-[#F6F6F6]'>
       <div className='flex flex-col flexCenter'>
       <img src='./stars.png' className='mt-4'/>

          <span className='text-balance text-center text-[22px]'>
          Emanuel Scott Fitness transformed my body! I never thought I could achieve such amazing results. The booty builder program was a game-changer for me
          </span>  
          
          <img src='./profile2.png' className='mt-5 w-[31px] h-[31px]' />
          <span className='uppercase text-[14px]'>
            alex m
          </span>
       </div>
</div>
       <img src='./next.png' className=''/>
    </div>
</div>
  

    
    


     

       
    </main>
  )
}

export default Rating