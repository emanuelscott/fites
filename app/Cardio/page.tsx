import React from "react";
import Details from "./Details/page";
import Customer from "./Customer/page";
import Elevate from "./Elevate/page";
import Footer from "../Footer/page";
import Landing from "@/components/Landing";

const CardioProgram = () => {
  return (
    <main className="bg-black overflow-x-hidden relative">
      <Landing
        heading="Men's Program"
        title="Cardio Blitz Program"
        details="Boost your stamina and overall functionality with dynamic stamina
              routines and functional fitness exercises. The program emphasizes
              recovery optimization, personalized life coaching, and
              video-guided exercises, complemented by custom nutrition plans and
              detailed progress tracking."
        image="landing.png"
      />

      <Details />
      <Customer />
      <Elevate />
      <Footer />
    </main>
  );
};

export default CardioProgram;
