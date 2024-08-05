import Footer from "./Footer/page";
import Blog from "./Blog/page";
import Hero from "./Hero/page";
import HeroContinue from "./Hero2/page";
import Rating from "./Hero3/page";

export default function Home() {
 
  return (
   <main className="w-screen h-screen bg-black ">
    <div className="flex flex-col">
    <div className="flex flex-row flexBetween">
    <div className="flex flex-col ml-36">
    <span className="font-regular font-oswald text-[#D80000] text-[28px] mt-30">UNLOCK YOUR POTENTIAL WITH </span>
   
    <p className="font-semibold font-oswald bg-gradient-to-r from-[#FFFFFF] to-[#999999] inline-block text-transparent bg-clip-text text-[78px]">EMANUEL SCOTT</p>
    <span className="font-semibold font-oswald bg-gradient-to-r from-[#FFFFFF] to-[#999999] inline-block text-transparent bg-clip-text text-[78px]">FITNESS & COACH</span>

   <div className="border border-black bg-black w-[700px] h-[132px]"> 
    <article className="text-balance text-[#ECECEC] text-[16px] font-oswald font-extralight">
      <p>At emanuel scott fitness, we believe that greatness lies within each of us. Our mission is to empower you to discover your inner strength and achieve the extraordinary. We focus on the whole person concept, recognizing that true fitness is not just physical but also encompasses spiritual, mental, and financial well-being. By pushing you into your destiny and serving your higher purpose, we guide you through every step of your transformative journey.</p>
    </article>
    </div>

    <button type="button" className="font-oswald text-white bg-[#BF0A0A] font-medium text-[16px] px-4 py-2 text-center mr-20 w-[200px] h-[60px]">LET'S START NOW</button>

    </div>

     <div className="flex flex-row relative">
      <img src="./model2.png" className="h-[667.37px] w-[504px] absolute top-16 right-60"/>
      <img src="./model.png" className="h-[643.73px] mr-4 mt-10"/>
      </div>
  
    </div>
     
    <div className="flex flex-col text-center gap-y-2 bg-black">
        <h1 className="text-[#D80000] text-[38px] font-medium mt-40 uppercase">
        Are You Stuck in Survival Mode?
        </h1>

        <div className="flex flex-row flexCenter mt-4 text-[22px]">
            <span className="text-white font-light">
            Do you find yourself constantly starting and stopping tasks,  
            </span>
            <p className="text-white ml-1 font-medium">
            unable to maintain momentum?           
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-light">
            Do you struggle with organization and 
              </span>
            <p className="text-white ml-1 font-medium">
            feel overwhelmed by daily responsibilitie         
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-medium">
            Do you know what you want in life,   
            </span>
            <p className="text-white ml-1 font-light">
            but can’t seem to get there?           
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-medium">
            Have you lost your sense of self in your relationship   
            </span>
            <p className="text-white ml-1 font-light">
            or after a breakup?           
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-medium">
            What does the healed version of you look like?   
            </span>
            <p className="text-white ml-1 font-light">
            Can you imagine it?         
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-light">
            What does it feel like to walk in abundance, 
              </span>
            <p className="text-white ml-1 font-medium">
            free from financial stress and full of opportunities?      
             </p>
             </div>

             <div className="flex flex-row flexCenter text-[22px]">
            <span className="text-white font-light">
            What does it feel like to truly love yourself, 
              </span>
            <p className="text-white ml-1 font-medium">
            to wake up each day with confidence and joy?        
             </p>
             </div>

             
             <div className="flex flex-row flexCenter mt-3 ">
            <span className="text-white font-light text-[22px]">
            If you answered
              </span>
            <p className="text-[#D80000] text-[31px] ml-1 font-medium uppercase">
            yes        
             </p>
             <span className="text-white font-light text-[22px] ml-1">
             to any of these questions,
              </span>
              <p className="text-[#D80000] text-[31px] ml-1 font-medium uppercase">
              let us help you!        
             </p>
             </div>
             
             <img src="./line7.png" className="w-screen h-[136.66px]"/>

      </div>
      
    
  
   </div>

      <Hero />
      <HeroContinue/>
      <Rating />
      <Blog/>

     
     
      <Footer/>
   </main>
  );
}
