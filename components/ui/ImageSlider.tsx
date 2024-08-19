"use client";
import React, { useState, useEffect } from "react";

type HeroPhoto = {
  id: number;
  img: string;
  imgAlt: string;
  imgClassName: string;
};

type ImageSliderProps = {
  pics: HeroPhoto[];
  containerClassName?: string;
  delay?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  pics,
  containerClassName = "",
  delay = 5000,
}: ImageSliderProps) => {
  let [currentPic, setCurrentPic] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPic((prevPic) => (prevPic + 1) % pics.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [pics.length]);

  return (
    <div
      className={`flex justify-center items-center overflow-hidden lg:h-full h-1/2 min-w-[50%] ${containerClassName}`}
    >
      <img
        src={pics[currentPic].img}
        alt={pics[currentPic].imgAlt}
        className={`h-full w-full ${pics[currentPic].imgClassName}`}
      />
    </div>
  );
};

export default ImageSlider;
