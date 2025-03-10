import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import b5 from "../assets/images/b5.png";
import b6 from "../assets/images/b6.png";

const slideImages = [b1, b2, b3, b4, b5, b6];

const Slider = () => {
  return (
    <div className="slide-container">
      <Fade duration={1000} transitionDuration={800}>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              className="flex h-40 sm:h-60 md:h-80 lg:h-180 bg-contain bg-no-repeat bg-center bg-black"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slider;
