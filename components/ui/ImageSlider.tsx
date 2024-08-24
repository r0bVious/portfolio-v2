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
  let [currentPic, setCurrentPic] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPic((prevPic) => (prevPic + 1) % pics.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [pics.length]);

  return (
    <div
      className={`min-w-[50%] min-h-screen-50 flex items-center overflow-hidden ${containerClassName}`}
    >
      <img
        src={pics[currentPic].img}
        alt={pics[currentPic].imgAlt}
        className={`object-contain ${pics[currentPic].imgClassName}`}
      />
    </div>
  );
};

export default ImageSlider;
