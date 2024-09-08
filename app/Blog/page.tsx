import React from 'react';


const Blog = () => {
  return(
    <main className='bg-black 2xl:w-screen min-h-screen xl:w-screen lg:w-screen n md:w-screen  sm:w-[1150px] sm:h-[2500px]'>
          <div className='flex flex-col text-white text-center uppercase 2xl:text-[48px] xl:text-[48px] sm:text-[38px] font-medium'>
              <h1 className='mt-20 sm:ml-5'>blog</h1>


              <div className='flex flex-row flexCenter gap-x-2 2xl:visible xl:visible lg:visible md:invisible sm:invisible'>
              <a href="#">
          <button type="button" className="font-oswald text-white uppercase bg-[#BF0A0A] font-medium 2xl:text-[16px] xl:text-[16px]  px-4 py-2 text-center  mt-2 2xl:w-[111px] 2xl:h-[45px] xl:w-[111px] xl:h-[45px] ">fitnesss</button>
              </a>
              <a href="#">
          <button type="button" className="font-oswald text-white uppercase bg-[#1E1E1E] hover:bg-[#BF0A0A] font-medium 2xl:text-[16px] xl:text-[16px]  text-center mt-2 2xl:w-[150px] 2xl:h-[45px] xl:w-[150px] xl:h-[45px] ">strength training</button>
              </a>
              <a href="#">
          <button type="button" className="font-oswald text-white uppercase bg-[#1E1E1E] hover:bg-[#BF0A0A] font-medium 2xl:text-[16px] xl:text-[16px] text-center mt-2 2xl:w-[150px] 2xl:h-[45px] xl:w-[150px] xl:h-[45px] ">nuttrition and diet</button>
              </a>
              <a href="#">
          <button type="button" className="font-oswald text-white uppercase bg-[#1E1E1E] hover:bg-[#BF0A0A] font-medium 2xl:text-[16px] xl:text-[16px]  px-4 py-2 text-center mt-2 2xl:w-[150px] 2xl:h-[45px] xl:w-[150px] xl:h-[45px] ">home workouts</button>
              </a>
              </div>



              <div className='flex flex-row flexBetween mt-10 sm:flex-wrap sm:flexCenter sm:ml-1 sm:gap-y-10'>

            <div className='box w-[380px] h-[462px] sm:w-[320px] flex flex-col sm:ml-5'>
                <img src='./es.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                
                  <span className='text-white text-[20px] text-left mt-1'>
                  Top 5 Cardio Workouts to Boost Stamina and Burn Fat
                  </span>
             
             

                <div className='flex flex-row mt-6'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                    </p>

             <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='box w-[380px] h-[462px] sm:w-[320px]  flex flex-col sm:ml-5'>
                <img src='./es2.png' />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                
                <span className='text-white text-[20px] text-left mt-1'>
                Strength Training for Beginners: Your First Steps to an Ideal Body               
                 </span>
               
                <div className='flex flex-row mt-6'>
                <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
                <p className='text-[#CCCCCC] text-[14px] ml-2'>
                    Emanuel Scott
                </p>
                <p className='text-[#CCCCCC] text-[14px] ml-48'>
                    July 18. 2024
                </p>
                </div>            
            </div>

            <div className='box w-[380px] h-[462px] sm:w-[320px]  flex flex-col sm:ml-5'>
                <img src='./es3.png'  />
                <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
                
                <span className='text-white text-[20px] text-left mt-1'>
                Strength Training for Beginners: Your First Steps to an Ideal Body               
                 </span>
                    
                <div className='flex flex-row mt-6'
                
                
                >
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



          <div className='flex flex-row flexBetween mt-10 sm:flex-wrap sm:flexCenter '>

<div className='box w-[380px] h-[462px] sm:w-[320px]  flex flex-col sm:ml-5'>
    <img src='./es.png'  />
    <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
    
      <span className='text-white text-[20px] text-left mt-1'>
      Top 5 Cardio Workouts to Boost Stamina and Burn Fat
      </span>
 
 

    <div className='flex flex-row mt-6'>
    <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
    <p className='text-[#CCCCCC] text-[14px] ml-2'>
        Emanuel Scott
        </p>

 <p className='text-[#CCCCCC] text-[14px] ml-48'>
        July 18. 2024
    </p>
    </div>            
</div>

<div className='box w-[380px] h-[462px] sm:w-[320px] flex flex-col sm:ml-5'>
    <img src='./es2.png' />
    <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
    
    <span className='text-white text-[20px] text-left mt-1'>
    Strength Training for Beginners: Your First Steps to an Ideal Body               
     </span>
   
    <div className='flex flex-row mt-6'>
    <img src='./emmanuel.png' className='w-[25px] h-[25px] '/>
    <p className='text-[#CCCCCC] text-[14px] ml-2'>
        Emanuel Scott
    </p>
    <p className='text-[#CCCCCC] text-[14px] ml-48'>
        July 18. 2024
    </p>
    </div>            
</div>

<div className='box w-[380px] h-[462px] sm:w-[320px]  flex flex-col sm:ml-5'>
    <img src='./es3.png'  />
    <img src='./fitness.png ' className='w-[74px] h-[30px] mt-4'/>
    
    <span className='text-white text-[20px] text-left mt-1'>
    Strength Training for Beginners: Your First Steps to an Ideal Body               
     </span>
        
    <div className='flex flex-row mt-6'
    
    
    >
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
<a href="#">
          <button type="button" className="font-oswald text-white uppercase bg-[#BF0A0A] font-medium text-[16px] px-4 py-2 text-center mt-20 w-[184px] h-[50px] 
          2xl:invisible xl:invisible lg:invisible sm:visible ">
            Explore all blogs
            </button>
              </a>
          </div>
         
    </main>
  )
};

export default Blog;
