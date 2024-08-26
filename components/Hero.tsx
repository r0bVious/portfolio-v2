import React from "react";
import { HeroHighlight } from "./ui/HeroHighlight";
import { FaLocationArrow } from "react-icons/fa";
import ImageSlider from "./ui/ImageSlider";
import { heroPhotos } from "@/data";

const Hero = () => {
  const studyTimeSpent = () => {
    const firstDay = new Date(2023, 10, 1);
    const currentDate = new Date();
    const diffMonths =
      (currentDate.getFullYear() - firstDay.getFullYear()) * 12 +
      (currentDate.getMonth() - firstDay.getMonth());
    return diffMonths;
  };

  return (
    <section className="w-full overflow-hidden">
      <HeroHighlight className="h-dvh flex lg:flex-row flex-col justify-between">
        <div className="lg:h-full flex flex-col justify-center align-middle px-1 lg:px-10 text-center lg:text-left lg:gap-8 gap-4 pt-4 lg:pt-0 lg:max-w-[50%] flex-grow">
          <div className="lg:text-3xl text-2xl">
            <h1 lang="en">Hello, I&apos;m Rob.</h1>
            <h1 className="none" lang="ko">
              안녕하세요! 저는 Rob입니다.
            </h1>
          </div>
          <div className="lg:text-xl text-sm">
            <p lang="en">
              I&apos;m a new and <span className="underline">growing</span>{" "}
              developer with <span className="text-customBlue">marketing</span>{" "}
              and{" "}
              <span className="text-customBlue">international relations</span>{" "}
              experience in a Seoul start-up!
            </p>
            <p className="none" lang="ko">
              저는 서울의 스타트업에서{" "}
              <span className="text-customBlue">마케팅</span>과{" "}
              <span className="text-customBlue">국제 관계</span> 경험을 가진
              신입 개발자입니다!
            </p>
          </div>
          <div className="text-sm lg:text-base">
            <p lang="en">
              Just {studyTimeSpent()} short months ago, I barely knew what
              JavaScript was... Now, I&apos;m diving deep into in-demand
              frameworks and libraries like{" "}
              <span className="text-2xl text-customBlue font-extrabold">
                React, Next.js, Chakra UI,
              </span>{" "}
              and{" "}
              <span className="text-2xl text-customBlue font-extrabold">
                Tailwind CSS.
              </span>{" "}
            </p>
            <p className="none" lang="ko">
              {studyTimeSpent()}개월전에는 제가 JavaScript 하나도 몰랐는데...
              이제는{" "}
              <span className="text-2xl text-customBlue font-extrabold">
                React, Next.js, Chakra UI
              </span>{" "}
              및
              <span className="text-2xl text-customBlue font-extrabold">
                {" "}
                Tailwind CSS
              </span>
              와 같은 주문형 프레임워크 및 라이브러리로 깊이 빠져들고 있습니다.
            </p>
          </div>
          <a href="#projects">
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
          <div className="">
            <h1 lang="en" className="text-sm lg:text-base blinking-cursor">
              ...and imagine what I&apos;ll be able to do next
            </h1>
            <h1 lang="ko" className="none text-sm lg:text-base blinking-cursor">
              ...그리고 제가 다음에 무엇을 할 수 있을지 상상해 보세요
            </h1>
          </div>
        </div>
        <ImageSlider pics={heroPhotos} />
      </HeroHighlight>
    </section>
  );
};

export default Hero;
