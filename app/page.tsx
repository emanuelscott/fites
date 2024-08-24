import Footer from "./Footer/page";
import Blog from "./Home/Blog/page";
import Hero from "./Home/Hero/page";
import HeroContinue from "./Home/Hero2/page";
import Hero3 from "./Home/Hero3/page";
import Rating from "./Home/Rating/page";
import Reprogram from "./Home/Reprogram/page";

export default function Home() {
 
  return (
   <main className="2xl:w-screen xl:w-screen h-screen bg-black sm:w-[800px] ">
    <div className="flex flex-col">
    <div className="flex flex-row flexCenter">
    <div className="flex flex-col 2xl:ml-36 sm:ml-5 md:ml-10 lg:ml-20 xl:ml-28">
    <span className="font-regular font-oswald text-[#D80000] text-[28px] sm:text-[10px] md:text-[16px] lg:text-[28px] xl:text-[28px] mt-30">
      UNLOCK YOUR POTENTIAL WITH 
      </span>
   
    <p className="font-semibold font-oswald bg-gradient-to-r from-[#FFFFFF] to-[#999999] inline-block text-transparent bg-clip-text 2xl:text-[78px] sm:text-[14px] md:text-[48px] lg:text-[64px]">
      EMANUEL SCOTT
      </p>
    <span className="font-semibold font-oswald bg-gradient-to-r from-[#FFFFFF] to-[#999999] inline-block text-transparent bg-clip-text text-[78px] 2xl:text-[78px] sm:text-[14px] md:text-[48px] lg:text-[64px]">
      FITNESS & COACH
      </span>

   <div className="border border-black bg-black  h-[132px] sm:w-[150px] sm:h-[150px] md:w-[500px] xl:w-[600px] 2xl:w-[700px]  "> 
    <article className="text-balance text-[#ECECEC] text-[16px] sm:text-[8px] md:text-[12px] lg:text-[16px] xl:text-[16px] font-oswald font-extralight">
      <p>
        At Emanuel Scott Fitness, we believe that greatness lies within each of us. Our mission is to empower you to discover your inner strength and achieve the extraordinary. We embrace the whole person concept, recognizing that true fitness begins with the physical and transcends to encompass spiritual, mental, emotional, social, and financial well-being. By guiding you into your destiny and serving your higher purpose, we support you through every step of your transformative journey.
        </p>
    </article>
    </div>

    <a href="#">
    <button type="button" className="font-oswald text-white bg-[#BF0A0A] font-medium 2xl:text-[16px] xl:text-[16px]  sm:text-[8px] px-4 py-2 text-center mr-20 2xl:w-[200px] 2xl:h-[60px]  xl:w-[200px] xl:h-[60px] sm:w-[100px] sm:h-[30px]">LET'S START NOW</button>
    </a>

    </div>

    <div className="flex flex-row ">
      <img src="./homelanding.png" className="2xl:h-[667.37px] 2xl:w-screen xl:w-screen xl:h-[667.37px] sm:w-[350px] sm:h-[350px] "/>
  
  </div>

    </div>
     
    <div className="flex flex-col text-center gap-y-2 bg-black">
        <h1 className="text-[#D80000] text-[38px] sm:text-[12px] md:text-[16px] lg:text-[30px] xl:text-[38px] font-medium uppercase">
        Are You Stuck in Survival Mode?
        </h1>

        <div className="flex flex-row flexCenter mt-4 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-light">
            Do you find yourself constantly starting and stopping tasks,  
            </span>
            <p className="text-white ml-1 font-medium">
            unable to maintain momentum?           
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-light">
            Do you struggle with organization and 
              </span>
            <p className="text-white ml-1 font-medium">
            feel overwhelmed by daily responsibilities         
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-medium">
            Do you know what you want in life,   
            </span>
            <p className="text-white ml-1 font-light">
            but can’t seem to get there?           
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-medium">
            Have you lost your sense of self in your relationship   
            </span>
            <p className="text-white ml-1 font-light">
            or after a breakup?           
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-medium">
            What does the healed version of you look like?   
            </span>
            <p className="text-white ml-1 font-light">
            Can you imagine it?         
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-light">
            What does it feel like to walk in abundance, 
              </span>
            <p className="text-white ml-1 font-medium">
            free from financial stress and full of opportunities?      
             </p>
             </div>

             <div className="flex flex-row flexCenter 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            <span className="text-white font-light">
            What does it feel like to truly love yourself, 
              </span>
            <p className="text-white ml-1 font-medium">
            to wake up each day with confidence and joy?        
             </p>
             </div>

             
             <div className="flex flex-row flexCenter mt-3 ">
            <span className="text-white font-light 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px]">
            If you answered
              </span>
            <p className="text-[#D80000] 2xl:text-[31px] sm:text-[16px] md:text-[16px] lg:text-[28px] xl:text-[31px] ml-1 font-medium uppercase">
            yes        
             </p>
             <span className="text-white font-light 2xl:text-[22px] sm:text-[12px] md:text-[16px] lg:text-[22px] xl:text-[22px] ml-1">
             to any of these questions,
              </span>
              <p className="text-[#D80000] 2xl:text-[31px] sm:text-[16px] md:text-[16px] lg:text-[28px] xl:text-[31px] ml-1 font-medium uppercase">
              let us help you!        
             </p>
             </div>
             
             <img src="./landingline.png" className="2xl:w-screen h-[81px] sm:w-[800px] mt-2"/>

      </div>
      
    
  
   </div>

      <Hero />
      <HeroContinue/>
      <Hero3/>
      <Reprogram/>
      <Rating />
      <Blog/>

     
     <Footer/>
     
   </main>
  );
}
