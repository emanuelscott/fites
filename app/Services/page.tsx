"use client";
import React from "react";
import Footer from "../Footer/page";
import ContentSlider from "@/components/Slider/ContextSlder";

const Services = () => {
  return (
    <main className="h-screen bg-black overflow-x-hidden ">
      <div className="flex flex-col bg-black">
        <div className="flex flex-row 2xl:text-[48px] xl:text-[48px] sm:text-[38px] font-medium uppercase flexCenter ">
          <p className="text-white mt-16">our</p>
          <p className="text-[#D80000] ml-2 mt-16">service</p>
        </div>

        <div className="block sm560:hidden">
          <ContentSlider>
            <div className="box text-white bg-[#0C0C0C] w-full flex flex-col text-[18px] ">
              <img
                src="./tone.png"
                className="w-[46.12px] h-[60px] mx-auto mt-10"
              />

              <span className="uppercase mt-4 ml-10">
                Sculpt & Tone Program (Base Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Achieve a lean and toned physique.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  High-energy, on-demand workout videos.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Strength training and flexibility exercises.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Basic custom meal plans from a library.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Simple progress tracking (weight, measurements, etc.).
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Weekly live group check-ins via Zoom.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  24/7 support through the app.
                </p>
              </div>

              <a href="/Scuplt">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-16 ml-10 
   w-[210px] h-[60px]  "
                >
                  learn more
                </button>
              </a>
            </div>

            <div className="box text-white bg-[#0C0C0C] w-full flex flex-col text-[18px] ">
              <img
                src="./waist.png"
                className="w-[46.12px] h-[60px] mt-6 mx-auto"
              />

              <span className="uppercase  mt-6 ml-10">
                Waist Wellness Program (Mid-Tier Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Includes the Sculpt & Tone Program
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Waist-specific workouts.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Detox and bloat reduction tips.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Waist-centric, customizable meal plans.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Daily waist-whittling tips and tricks.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Core-strengthening sessions.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Access to a private support group.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Exclusive waist-specific challenges
                </p>
              </div>

              <a href="/Waist">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-10 ml-10 
  w-[210px] h-[60px] "
                >
                  learn more
                </button>
              </a>
            </div>

            <div className="box text-white bg-[#0C0C0C] w-full flex flex-col text-[18px] ">
              <img
                src="./glute.png"
                className="w-[46.12px] h-[60px] mt-6 mx-auto"
              />

              <span className="uppercase mt-6 ml-10">
                Glute Maximizer Program (Premium Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2 mt-5">
                  Includes the Sculpt & Tone & Waist Wellness Programs
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Exclusive Booty Building Kit.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Advanced glute-focused workout routines
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Monthly 1-on-1 coaching sessions.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Weekly personalized video check-ins.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Glute-focused meal plans.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  VIP access to private support.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Access to an exclusive video library.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Achievement rewards for milestones.
                </p>
              </div>

              <a href="/Glute">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-4 ml-10 
   w-[210px] h-[60px] "
                >
                  learn more
                </button>
              </a>
            </div>
          </ContentSlider>
        </div>

        <div className="hidden sm560:block">
          <div className="flex flex-row flexCenter mt-8 sm:mt-12 gap-x-3 flex-wrap sm:gap-y-16">
            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px] ">
              <img
                src="./tone.png"
                className="w-[46.12px] h-[60px] mt-6 ml-10"
              />

              <span className="uppercase mt-4 ml-10">
                Sculpt & Tone Program (Base Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Achieve a lean and toned physique.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  High-energy, on-demand workout videos.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Strength training and flexibility exercises.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Basic custom meal plans from a library.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Simple progress tracking (weight, measurements, etc.).
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Weekly live group check-ins via Zoom.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  24/7 support through the app.
                </p>
              </div>

              <a href="/Scuplt">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-16 ml-10 
   w-[210px] h-[60px]  "
                >
                  learn more
                </button>
              </a>
            </div>

            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px]">
              <img
                src="./waist.png"
                className="w-[46.12px] h-[60px] mt-6 ml-10"
              />

              <span className="uppercase  mt-6 ml-10">
                Waist Wellness Program (Mid-Tier Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Includes the Sculpt & Tone Program
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Waist-specific workouts.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Detox and bloat reduction tips.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Waist-centric, customizable meal plans.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Daily waist-whittling tips and tricks.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Core-strengthening sessions.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Access to a private support group.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Exclusive waist-specific challenges
                </p>
              </div>

              <a href="/Waist">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-10 ml-10 
  w-[210px] h-[60px] "
                >
                  learn more
                </button>
              </a>
            </div>

            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px]">
              <img
                src="./glute.png"
                className="w-[46.12px] h-[60px] mt-6 ml-10"
              />

              <span className="uppercase mt-6 ml-10">
                Glute Maximizer Program (Premium Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2 mt-5">
                  Includes the Sculpt & Tone & Waist Wellness Programs
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Exclusive Booty Building Kit.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Advanced glute-focused workout routines
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Monthly 1-on-1 coaching sessions.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Weekly personalized video check-ins.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Glute-focused meal plans.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  VIP access to private support.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Access to an exclusive video library.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Achievement rewards for milestones.
                </p>
              </div>

              <a href="/Glute">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] 2xl:text-[16px] px-4 py-2 text-center uppercase mt-4 ml-10 
   w-[210px] h-[60px] "
                >
                  learn more
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="block sm560:hidden">
          <ContentSlider>
            <div className="box text-white bg-[#0C0C0C] w-full h-[480px] flex flex-col text-[18px]">
              <img
                src="./heart.png"
                className="w-[45px] h-[60px] mt-4 mx-auto"
              />

              <span className="uppercase mt-4 ml-10">
                Cardio Blitz Program (Base Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2 mt-5">
                  Ignite your cardiovascular health and burn fat
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Intense cardio workouts.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Metabolic conditioning.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Expert nutrition advice.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">High-energy cardio sessions.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Weekly live check-ins.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">24/7 support via app.</p>
              </div>

              <a href="/Cardio">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-12 ml-10 
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>
            <div className="box text-white bg-[#0C0C0C] w-full h-[480px] flex flex-col text-[18px]">
              <img
                src="./muscle.png"
                className="w-[60px] h-[60px] mt-2 mx-auto"
              />

              <span className="uppercase  mt-4 ml-10">
                Endurance Elite Program (Mid-Tier Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Boost stamina and overall functionality
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Dynamic stamina routines.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Functional fitness exercises.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Recovery optimization.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Video-guided exercises.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Custom nutrition plans.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Progress tracking.</p>
              </div>

              <a href="/Endurance">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-16 ml-10 
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>
            <div className="box text-white bg-[#0C0C0C] w-full h-[480px] flex flex-col text-[18px]">
              <img
                src="./strength.png"
                className="w-[46.12px] h-[60px]  mt-5 mx-auto"
              />

              <span className="uppercase mt-4 ml-10">
                Peak Performance Program (Premium Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />

                <p className=" font-light ml-2 mt-5 text-balance">
                  Unlock your full potential with strength and mental toughness
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Strength and muscle growth routines.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Mental toughness techniques.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  12-week structured workout plan.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Weekly live check-ins.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Progress tracking.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">24/7 support via app.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Access to a private community.
                </p>
              </div>
              <a href="/Peak">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-8 ml-10
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>
          </ContentSlider>
        </div>

        <div className="hidden sm560:block">
          <div className="flex flex-row flexCenter mt-20 gap-x-3 flex-wrap sm:gap-y-12">
            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px]">
              <img src="./heart.png" className="w-[45px] h-[60px] mt-4 ml-10" />

              <span className="uppercase mt-4 ml-10">
                Cardio Blitz Program (Base Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2 mt-5">
                  Ignite your cardiovascular health and burn fat
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Intense cardio workouts.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Metabolic conditioning.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Expert nutrition advice.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">High-energy cardio sessions.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Weekly live check-ins.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">24/7 support via app.</p>
              </div>

              <a href="/Cardio">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-12 ml-10 
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>
            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px]">
              <img
                src="./muscle.png"
                className="w-[60px] h-[60px] mt-2 ml-10"
              />

              <span className="uppercase  mt-4 ml-10">
                Endurance Elite Program (Mid-Tier Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 mt-5 w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2 mt-5">
                  Boost stamina and overall functionality
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">Dynamic stamina routines.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Functional fitness exercises.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Recovery optimization.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Video-guided exercises.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Custom nutrition plans.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Progress tracking.</p>
              </div>

              <a href="/Endurance">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-16 ml-10 
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>

            <div className="box text-white bg-[#0C0C0C] w-[307px] h-[480px] flex flex-col text-[18px]">
              <img
                src="./strength.png"
                className="w-[46.12px] h-[60px]  mt-5 ml-10"
              />

              <span className="uppercase mt-4 ml-10">
                Peak Performance Program (Premium Package)
              </span>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10 w-[4.54px] h-[10.08px]"
                />

                <p className=" font-light ml-2 mt-5 text-balance">
                  Unlock your full potential with strength and mental toughness
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">
                  Strength and muscle growth routines.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Mental toughness techniques.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Personalized life coaching.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  12-week structured workout plan.
                </p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Weekly live check-ins.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">Progress tracking.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className="font-light ml-2">24/7 support via app.</p>
              </div>

              <div className="flex flex-row items-center ">
                <img
                  src="./arrow.png"
                  className="ml-10  w-[4.54px] h-[10.08px]"
                />
                <p className=" font-light ml-2">
                  Access to a private community.
                </p>
              </div>
              <a href="/Peak">
                <button
                  type="button"
                  className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase mt-8 ml-10
   w-[210px] h-[60px]"
                >
                  learn more
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Services;
