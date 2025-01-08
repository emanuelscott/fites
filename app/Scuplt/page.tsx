import React from "react";
import Details from "./Details/page";
import Customer from "./Customer/page";
import Footer from "../Footer/page";
import Transform from "./Transform/page";
import Landing from "@/components/Landing";

const ScupltProgram = () => {
  return (
    <main className=" bg-black overflow-x-hidden relative">
      {/* <Landing/> */}
      <Landing
        heading="Women's program"
        title="Sculpt & Tone Program"
        details="Transform your body with a focus on achieving a lean, toned physique through high-energy workouts, strength training, and flexibility exercises. Our program includes personalized life coaching, custom meal plans, and progress tracking, with weekly live check-ins and 24/7 app support."
        image="womenlanding.png"
      />
      <Details />
      <Customer />
      <Transform />
      <Footer />
    </main>
  );
};

export default ScupltProgram;
