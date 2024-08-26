"use client";
import React, { useState } from "react";
import { projects } from "@/data";
import { Rubik } from "next/font/google";
import { FaGithub, FaBolt } from "react-icons/fa";

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const Projects = () => {
  const [clickedProjectID, setClickedProjectID] = useState<number | null>(null);
  const handleClick = (id: number) => {
    if (clickedProjectID === id) {
      setClickedProjectID(null);
    } else setClickedProjectID(id);
  };

  const timeDifference = (dateString: string) => {
    const projectDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - projectDate.getTime();
    const monthsDifference = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24 * 30)
    );

    if (monthsDifference < 1) {
      return (
        <>
          <span lang="en">less than a month ago</span>
          <span lang="ko" className="none">
            최근 1개월 이내에
          </span>
        </>
      );
    } else if (monthsDifference === 1) {
      return (
        <>
          <span lang="en">1 month ago</span>
          <span lang="ko" className="none">
            1달전에
          </span>
        </>
      );
    } else {
      return (
        <>
          <span lang="en">{monthsDifference} months ago</span>
          <span lang="ko" className="none">
            {monthsDifference}개월전
          </span>
        </>
      );
    }
  };

  return (
    <section
      id="projects"
      className="lg:h-screen py-20 border-y-2 border-customBlue border-dotted bg-gradient-to-b from-customBlue/[0.2] via-customBlack to-customBlue/[0.2] "
    >
      <h1 className="text-center">
        some of my <span className="text-customBlue">project timeline</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly mt-10 lg:max-h-[40rem] w-full gap-2">
        <p className="m-5">2023-10</p>
        {projects.map(
          ({
            id,
            title,
            description,
            img,
            iconLists,
            gitLink,
            demoLink,
            skills,
            date,
          }) => (
            <div
              key={id}
              className={`relative cursor-pointer bg-cover bg-top lg:bg-center overflow-hidden w-[95%] lg:w-[20rem] lg:h-[30rem] lg:max-h-full flex flex-col justify-between transition-all ease-in-out duration-300 border border-customGranite ${
                clickedProjectID === id ? "lg:scale-125 z-10" : "project-size"
              }`}
              onClick={() => handleClick(id)}
              style={{ backgroundImage: `url(${img})` }}
            >
              <div
                className={`absolute inset-0 bg-black transition-colors duration-300 ${
                  clickedProjectID === id ? "bg-opacity-80" : "bg-opacity-60"
                }`}
              ></div>
              <h1
                className={`relative z-10 ${
                  rubik.className
                } font-extrabold lg:absolute lg:transform lg:-rotate-90 lg:origin-top-left lg:-translate-y-1/3 lg:-bottom-10 lg:left-0 lg:tracking-[0.3rem] m-2 whitespace-nowrap ${
                  clickedProjectID === id
                    ? "lg:opacity-10 lg:transition-all lg:text-4xl"
                    : "lg:text-2xl"
                }`}
              >
                {title}
              </h1>
              <span className="relative z-10 text-right font-mono tracking-wide mr-2">
                ...{timeDifference(date)}
              </span>
              {clickedProjectID === id ? (
                <div className="relative z-10 flex flex-col justify-evenly h-full">
                  <div className="">
                    <p className="indent-5 lg:text-xs p-2 font-bold">
                      {description}
                    </p>
                  </div>
                  <ul className="p-2 rounded-lg list-disc lg:text-xs">
                    <h2 className="text-sm">Skills Learned:</h2>
                    {skills.map((skill, index) => (
                      <li className="ml-10" key={index}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="lg:p-0 p-12 lg:gap-0 gap-5 flex flex-row justify-evenly text-xs w-full z-10">
                    <a
                      href={gitLink}
                      target="_blank"
                      className="relative bg-customBlack border border-customBlue hover:bg-customBlue font-bold rounded lg:h-12 lg:w-20 w-full h-24 flex justify-center items-center overflow-hidden"
                    >
                      Github
                      <FaGithub className="absolute lg:size-14 size-32 mt-2 lg:ml-8 ml-12 opacity-20" />
                    </a>
                    <a
                      href={demoLink}
                      target="_blank"
                      className="relative bg-customBlack border border-customBlue hover:bg-customBlue font-bold rounded lg:h-12 lg:w-20 w-full h-24 flex justify-center items-center overflow-hidden"
                    >
                      Demo
                      <FaBolt className="absolute lg:size-14 size-32 mt-5 lg:ml-12 ml-16 opacity-20" />
                    </a>
                  </div>
                </div>
              ) : null}
              <div className="relative z-10 flex justify-end mb-1">
                <span
                  className={`text-end self-end text-[0.5rem] ${
                    clickedProjectID === id ? "inline" : "hidden"
                  }`}
                >
                  powered by
                </span>
                {iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[0.2] rounded-full bg-black lg:size-8 size-10 flex justify-center items-center"
                    title={icon.replace(".svg", "")}
                  >
                    <img
                      src={`/media/logos/${icon}`}
                      alt={icon}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
        <div className="m-5 w-28 flex justify-center">
          <span lang="en" className="">
            Present
          </span>
          <span lang="ko" className="none whitespace-nowrap">
            현재
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
