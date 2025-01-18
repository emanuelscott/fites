import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type ContentSliderProps = {
  children: React.ReactNode;
};

const ContentSlider = ({ children }: ContentSliderProps) => {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <Slide indicators={true} responsive={responsiveSettings} duration={500}>
      {children}
    </Slide>
  );
};

export default ContentSlider;
