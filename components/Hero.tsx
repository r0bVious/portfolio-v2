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
    <section className="w-full overflow-hidden">
      <HeroHighlight className="h-dvh flex lg:flex-row flex-col justify-between">
        <div className="lg:h-full flex flex-col justify-center align-middle lg:px-10 lg:text-left lg:gap-8 gap-4 pt-4 lg:pt-0 lg:max-w-[50%] flex-grow px-4">
          <div className="lg:text-3xl text-2xl">
            <h1 lang="en">Hello, I&apos;m Rob.</h1>
            <h1 className="none" lang="ko">
              안녕하세요! Rob입니다.
            </h1>
          </div>
          <div className="lg:text-xl text-sm">
            <p lang="en" className="indent-8 text-justify">
              I&apos;m a quickly growing web developer with marketing and
              international relations experience in both Seoul start-ups and
              remote international teams!
            </p>
            <p className="none indent-8 text-justify" lang="ko">
              저는 서울의 스타트업과 해외 원격 팀에서 마케팅 경력을 갖고 있는
              신입 개발자입니다!
            </p>
          </div>
          <div className="text-sm lg:text-xl">
            <p lang="en" className="indent-8 text-justify">
              I am staying busy working on multiple projects using in-demand
              frameworks and libraries like{" "}
              <span className="lg:text-2xl text-customBlue font-extrabold">
                React, Next.js, Ruby on Rails,
              </span>{" "}
              and{" "}
              <span className="lg:text-2xl text-customBlue font-extrabold">
                Tailwind CSS
              </span>{" "}
              - I'm always ready for whatever your project needs!
            </p>
            <p className="none indent-8 text-justify" lang="ko">
              현재{" "}
              <span className="lg:text-2xl text-customBlue font-extrabold">
                React, Next.js, Ruby on Rails,
              </span>{" "}
              그리고{" "}
              <span className="lg:text-2xl text-customBlue font-extrabold">
                Tailwind CSS
              </span>
              와 같은 수요가 높은 프레임워크와 라이브러리를 활용하여 다양한
              프로젝트를 진행하고 있습니다. 귀하의 프로젝트가 어떤 것이든,
              언제든 준비되어 있습니다!
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
