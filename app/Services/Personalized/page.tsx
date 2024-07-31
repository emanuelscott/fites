import React from 'react'

const Personalized = () => {
  return (
    <main className="w-screen h-[591px]">
    <div className='flex flex-col '>

    <div className='flex flex-row flexBetween mt-20 ml-14 '>
         <div className='flex flex-col '>
        <span className='uppercase text-[38px] font-medium ml-64'>
        Personalized Nutrition Plans
                </span>
        <div className='box w-[476px] h-[81px] ml-64 mt-2 font-light text-[18px] mb-6'>
            <span>
            Nutrition is a crucial component of muscle growth and overall health. Our Mastermind Package includes customized meal plans designed to support your fitness goals. These plans focus on:            </span>
        </div>

    
        <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>protein-rich diet</p>
                 </div>
           
            <p className='ml-64 font-light'>Promotes muscle growth and repair.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2'>balanced macronutrients</p>
                 </div>
           
            <p className='ml-20 font-light'>Ensures you get the right mix of </p>
            <p className='ml-20 font-light'>proteins, carbohydrates, and fats</p>

            </div>
            </div>


            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>hydration tips</p>
                 </div>
           
            <p className='ml-64 font-light'>Keeps you hydrated and supports </p>
            <p className='ml-64 font-light'>overall health.</p>
                 
            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row mt-4'>
                <img src='./vector.png' className='ml-24'/>
                <p className='uppercase text-[16px] ml-2'>Supplement Guidance</p>
                 </div>
           
            <p className='ml-24 font-light'>Recommendations on supplements </p>
            <p className='ml-24 font-light'>that can enhance your results.</p>


                </div>
            </div>
        </div>

        <img src='./es6.png' className='mr-80 '/>
    </div>


       
    </div>
</main>
  )
}

export default Personalized