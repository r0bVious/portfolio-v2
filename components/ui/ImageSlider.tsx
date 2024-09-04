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
  let [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    let picNum = Math.floor(Math.random() * pics.length);
    setCurrentPic(picNum);
  }, [pics.length]);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentPic]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (currentPic === null) {
    return <Spinner />;
  }

  return (
    <div
      className={`relative lg:w-[50%] flex items-center justify-center overflow-hidden ${containerClassName}`}
      style={{ minHeight: "600px" }}
    >
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <img
        src={pics[currentPic].img}
        alt={pics[currentPic].imgAlt}
        className={`object-contain object-top transition-opacity duration-500 ${
          pics[currentPic].imgClassName
        } ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageSlider;
