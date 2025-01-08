import React from "react";

type LandingProps = {
  heading: string;
  title: string;
  details: string;
  image: string;
};

const Landing = ({ heading, title, details, image }: LandingProps) => {
  return (
    <div className="h-[800px] relative">
      <img src={`./${image}`} className="h-full w-full" />

      <div className="absolute top-0 w-full h-full text-center">
        <div className="w-[90%] md:w-[600px] mx-auto h-full flex flex-col justify-center">
          <h2 className="text-[#D80000] 2xl:text-[28px] xl:text-[28px] sm:text-[40px] pb-5">
            {heading}
          </h2>
          <p className="text-white text-[48px] uppercase font-medium text-center pb-5">
            {title}
          </p>

          <h3 className="px-14 md:px-5 text-white font-light pb-5">
            {details}
          </h3>

          <a href="/Contact">
            <button
              type="button"
              className="font-oswald text-white bg-[#BF0A0A] text-[16px] px-4 py-2 text-center uppercase  w-[210px] h-[60px] sm:mt-4 "
            >
              let's start now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
