import Footer from "./Footer/page";
import Blog from "./Blog/page";
import Hero from "./Hero/page";
import HeroContinue from "./Hero2/page";
import Rating from "./Hero3/page";

export default function Home() {
 
  return (
   <main className="w-screen h-screen bg-black flex flex-col">
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
      <img src="./model2.png" className="h-[667.37px] w-[504px] absolute top-20 right-60"/>
      <img src="./model.png" className="h-[643.73px] mr-4 mt-10"/>
      </div>
  
    </div>

    <div className="absolute z-10 bottom-80">
    <img src="./line.png" className="w-screen h-[136px]"/>
    </div>
   
    

      <Hero />
      <HeroContinue />
      <Rating />
      <Blog />
      <Footer/>
   </main>
  );
}
