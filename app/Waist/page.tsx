import React from "react";
import Details from "./Details/page";
import Customer from "./Customer/page";
import Transform from "./Transform/page";
import Footer from "../Footer/page";
import Landing from "@/components/Landing";

const WaistWellness = () => {
  return (
    <main className=" bg-black overflow-x-hidden relative">
      <Landing
        heading="Women's program"
        title="Waist Wellness Program"
        details="Strengthen and define your waistline with core-focused exercises and fat-burning cardio routines. This program includes comprehensive core workouts, flexible meal plans, and personalized coaching, ensuring a balanced approach to achieving a slimmer, more toned waist."
        image="womenlanding.png"
      />
      <Details />
      <Customer />
      <Transform />
      <Footer />
    </main>
  );
};

export default WaistWellness;
