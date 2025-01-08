import React from "react";
import Details from "./Details/page";
import Customer from "./Customer/page";
import Transform from "./Transform/page";
import Footer from "../Footer/page";
import Landing from "@/components/Landing";

const GluteMaximizer = () => {
  return (
    <main className="2xl:w-screen xl:w-screen h-screen bg-black sm:w-[390px] overflow-x-hidden relative">
      <Landing
        heading="Women's program"
        title="Glute Maximizer Program"
        details="Enhance and sculpt your glutes with targeted workouts designed to build strength and shape. The program offers a comprehensive approach, including lower body exercises, nutritional guidance, and personalized coaching to help you achieve a fuller, more defined backside."
        image="womenlanding.png"
      />
      <Details />
      <Customer />
      <Transform />
      <Footer />
    </main>
  );
};

export default GluteMaximizer;
