import React from "react";
// import Landing from "./Landing/page";
import Details from "./Details/page";
import Achieve from "./Achieve/page";
import Footer from "../Footer/page";
import Customer from "./Customer/page";
import Landing from "@/components/Landing";

const PeakProgram = () => {
  return (
    <main className="bg-black overflow-x-hidden relative">
      {/* <Landing /> */}
      <Landing
        heading="Men's Program"
        title="Peak Performance Program"
        details="Unlock your full potential with a blend of strength training and
            mental toughness techniques. This program features a 12-week
            structured workout plan, personalized coaching, and tools to enhance
            both physical and mental resilience, supported by weekly live
            check-ins and continuous app support."
            image="landing.png"
      />
      <Details />
      <Customer />
      <Achieve />
      <Footer />
    </main>
  );
};

export default PeakProgram;
