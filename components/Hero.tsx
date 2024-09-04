import React from "react";
import { HeroHighlight } from "./ui/HeroHighlight";
import { FaLocationArrow } from "react-icons/fa";
import ImageSlider from "./ui/ImageSlider";
import { heroPhotos } from "@/data";
import { TypewriterEffect } from "./ui/TypewriterEffect";

const Hero = () => {
  const enWords = [
    {
      text: "...and",
    },
    {
      text: "let's",
    },
    {
      text: "get",
    },
    {
      text: "to",
    },
    {
      text: "work!",
    },
  ];

  const koWords = [
    {
      text: "일을",
    },
    {
      text: "시작해",
    },
    {
      text: "볼까요?",
    },
  ];

  return (
    <section className="w-full h-screen overflow-hidden">
      <HeroHighlight className="max-h-screen flex lg:flex-row flex-col justify-between">
        <div className="lg:h-full flex flex-col justify-center align-middle px-1 lg:px-10 text-center lg:text-left lg:gap-8 gap-4 pt-4 lg:pt-0 lg:max-w-[50%] flex-grow">
          <div className="lg:text-3xl text-2xl">
            <h1 lang="en">Hello, I&apos;m Rob.</h1>
            <h1 className="none" lang="ko">
              안녕하세요! Rob입니다.
            </h1>
          </div>
          <div className="lg:text-xl text-sm">
            <p lang="en">
              I&apos;m a growing developer with{" "}
              <span className="text-customBlue">marketing</span> and{" "}
              <span className="text-customBlue">international relations</span>{" "}
              experience in a Seoul start-up!
            </p>
            <p className="none" lang="ko">
              저는 서울 스타트업에서 국내 및 국제{" "}
              <span className="text-customBlue">마케팅</span> 경력을 갖고 있는
              신입 <span className="text-customBlue">개발자</span>입니다!
            </p>
          </div>
          <div className="text-sm lg:text-base">
            <p lang="en">
              I am diving deep into in-demand frameworks and libraries like{" "}
              <span className="text-2xl text-customBlue font-extrabold">
                React, Next.js, Chakra UI,
              </span>{" "}
              and{" "}
              <span className="text-2xl text-customBlue font-extrabold">
                Tailwind CSS
              </span>{" "}
              so that I'm ready for whatever the project needs!
            </p>
            <p className="none" lang="ko">
              개발에 필요한
              <span className="text-2xl text-customBlue font-extrabold">
                {" "}
                React, Next.js, Chakra UI
              </span>{" "}
              및
              <span className="text-2xl text-customBlue font-extrabold">
                {" "}
                Tailwind CSS
              </span>
              와 같은 주문형 프레임워크 및 라이브러리 등 모든 것에 대응이
              가능합니다.
            </p>
          </div>
          <a href="#projects" className="self-center">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-customBlue rounded-lg" />
              <div className="lg:px-8 px-4 py-4 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                <p lang="en" className="flex items-center gap-3">
                  Check out my progress! <FaLocationArrow />
                </p>
                <p lang="ko" className="none flex items-center gap-3">
                  제 진행 상황을 보세요! <FaLocationArrow />
                </p>
              </div>
            </button>
          </a>
          <div className="self-center">
            <h1 lang="en">
              <TypewriterEffect words={enWords} />
            </h1>
            <h1 lang="ko" className="none">
              <TypewriterEffect words={koWords} />
            </h1>
          </div>
        </div>
        <ImageSlider pics={heroPhotos} />
      </HeroHighlight>
    </section>
  );
};

export default Hero;
