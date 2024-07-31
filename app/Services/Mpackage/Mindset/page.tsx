import React from 'react'

const Mindset = () => {
  return (
    <main className='w-screen h-[673px] bg-black'>
        <div className='flex flex-col '>

        <div className='flex flex-row flexBetween mt-20 '>
        <img src='./es5.png' className='ml-80'/>

             <div className='flex flex-col mr-40'>
            <span className='uppercase text-[38px] font-medium text-white'>
            mindset coaching
            </span>
            <div className='box w-[440px] h-[108px] mt-2 font-light text-[18px] text-white mb-8 mr-40'>
                <span>
                Achieving physical fitness requires mental toughness and focus. Our Mastermind Package includes mindset coaching to help you develop the mental resilience needed to push through challenges and stay motivated. Key components include:                </span>
            </div>

        
            <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' />
                <p className='uppercase text-[16px] text-white ml-2 '>goal setting</p>
                 </div>
           
            <p className=' font-light text-white'>Define clear, achievable goals and </p>
            <p className=' font-light text-white'>create a roadmap to success</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row text-white'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2 text-white'>Mental Toughness Training</p>
                 </div>
           
            <p className='ml-20 font-light text-white'>Techniques to enhance focus, </p>
            <p className='ml-20 font-light text-white'>discipline, and perseverance.</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className=''/>
                <p className='uppercase text-[16px] ml-2 text-white'>Motivational Support</p>
                 </div>
           
            <p className='mr-40 font-light text-white'>Continuous encouragement and</p>
            <p className='mr-40 font-light text-white'>upport to keep you inspired</p>
                 
            </div>
            
                </div>
            </div>

           
        </div>


           <img src='./line6.png' className='h-[180px] mt-6 '/>
        </div>
    </main>
  )
}

export default Mindset