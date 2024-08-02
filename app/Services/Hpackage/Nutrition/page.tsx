import React from 'react'

const Nutrition = () => {
  return (
    <main className="w-screen h-[591px]">
    <div className='flex flex-col '>

    <div className='flex flex-row flexBetween mt-20 ml-14 '>
         <div className='flex flex-col '>
        <span className='uppercase text-[38px] font-medium ml-64'>
        Expert Nutritional Guidance                
        </span>
        <div className='box w-[476px] h-[81px] ml-64 mt-2 font-light text-[18px] mb-6'>
            <span>
            Nutrition is crucial for boosting metabolism and supporting fat loss. Our Heating Up Package includes customized meal plans designed to complement your workout routine and enhance your results. These plans focus on:        
            </span>
            </div>
        <div className='flex flex-row '>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-64'/>
                <p className='uppercase text-[16px] ml-2'>Metabolism-Boosting Foods</p>
                 </div>
           
            <p className='ml-64 font-light'>Incorporate foods that naturally</p>
            <p className='ml-64 font-light'>increase your metabolic rate.</p>

            </div>
            <div className='flex flex-col'>
            <div className='flex flex-row'>
                <img src='./vector.png' className='ml-20'/>
                <p className='uppercase text-[16px] ml-2'>balanced macronutrients</p>
                 </div>
           
            <p className='ml-20 font-light'>Ensures you get the right mix of </p>
            <p className='ml-20 font-light'>proteins, carbohydrates, and fats for</p>
            <p className='ml-20 font-light'>optimal energy and health.</p>

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

export default Nutrition