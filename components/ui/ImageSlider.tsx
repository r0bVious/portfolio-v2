"use client";
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

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
  let [currentPic, setCurrentPic] = useState<null | number>(null);

  useEffect(() => {
    let picNum = Math.floor(Math.random() * 3);
    setCurrentPic(picNum);
  }, [pics.length]);

  if (currentPic === null) {
    return <Spinner />;
  }

  return (
    <div
      className={`lg:max-w-[50%] flex items-center overflow-hidden flex-shrink-0 ${containerClassName}`}
    >
      <img
        src={pics[currentPic].img}
        alt={pics[currentPic].imgAlt}
        className={`object-contain object-top ${pics[currentPic].imgClassName}`}
      />
    </div>
  );
};

export default ImageSlider;
