"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { projects } from "@/data";
import { Rubik } from "next/font/google";
import { FaGithub, FaBolt } from "react-icons/fa";
import "./ui/tooltip.css";
import { Tooltip } from "react-tippy";
import { Project } from "next/dist/build/swc";

const rubik = Rubik({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

type ProjectsProps = {
  language: string;
};

const Projects: React.FC<ProjectsProps> = ({ language }) => {
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
      className={`w-screen border-y-2 py-10 border-customBlue border-dotted bg-gradient-to-b from-customBlue/[0.2] via-customBlack to-customBlue/[0.2] ${rubik.className}`}
    >
      <h1 lang="en" className="text-center lg:pb-5">
        some of my <span className="text-customBlue">project timeline</span>
      </h1>
      <h1 lang="ko" className="none text-center lg:pb-5">
        개발 프로젝트 <span className="text-customBlue">성장과정</span>
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:gap-y-20 px-5 lg:pt-5">
        <div className="relative arrowhead min-w-[10%] flex justify-center mt-10 lg:m-0">
          <p lang="en">Present</p>
          <p lang="ko" className="none whitespace-nowrap">
            현재
          </p>
        </div>
        {projects
          .slice()
          .reverse()
          .map(
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
                className="project-container flex justify-center items-center w-full lg:w-auto h-full lg:px-14 pt-10 lg:p-0"
              >
                <div
                  className={`relative rounded cursor-pointer bg-cover bg-top lg:bg-center overflow-hidden lg:w-[20rem] w-full min-h-32 lg:h-[30rem] lg:max-h-full flex flex-col justify-between transition-all ease-in-out duration-300 border-2 border-customGranite ${
                    clickedProjectID === id ? "lg:scale-125 z-10" : null
                  }`}
                  onClick={() => handleClick(id)}
                  style={{ backgroundImage: `url(${img})` }}
                >
                  <div
                    className={`absolute inset-0 bg-black transition-colors duration-300 ${
                      clickedProjectID === id
                        ? "bg-opacity-90"
                        : "bg-opacity-75"
                    }`}
                  ></div>
                  <div className="z-10 flex lg:flex-col justify-between lg:mx-2">
                    <h1 className="lg:text-3xl text-lg font-extrabold underline-offset-4 underline">
                      {title}
                    </h1>
                    <span className="self-end font-mono font-extralight tracking-widest lg:text-sm text-xs">
                      ...{timeDifference(date)}
                    </span>
                  </div>
                  {clickedProjectID === id ? (
                    <div className="relative z-10 flex flex-col justify-evenly h-full">
                      <div className="indent-5 lg:text-sm px-2 lg:font-bold pt-5 lg:pt-0">
                        <p
                          lang="en"
                          className={`${language === "en" ? "none" : null}`}
                        >
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  style={{
                                    color: "#3F65E3",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {props.children}
                                </a>
                              ),
                            }}
                          >
                            {description.eng}
                          </ReactMarkdown>
                        </p>
                        <p
                          lang="ko"
                          className={`${language === "en" ? null : "none"}`}
                        >
                          <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                <a
                                  {...props}
                                  style={{
                                    color: "#3F65E3",
                                    textDecoration: "underline",
                                  }}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {props.children}
                                </a>
                              ),
                            }}
                          >
                            {description.kor}
                          </ReactMarkdown>
                        </p>
                      </div>
                      <ul
                        lang="en"
                        className={`p-2 rounded-lg list-disc lg:text-xs ${
                          language === "en" ? "none" : null
                        }`}
                      >
                        <h2 className="text-sm">Skills Learned:</h2>
                        {skills.eng.map((skill, index) => (
                          <li className="ml-10" key={index}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                      <ul
                        lang="ko"
                        className={`p-2 rounded-lg list-disc lg:text-xs ${
                          language === "en" ? null : "none"
                        }`}
                      >
                        {skills.kor.map((skill, index) => (
                          <li className="ml-10" key={index}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-evenly text-xs w-full z-10 gap-10 px-10">
                        <a
                          href={gitLink}
                          target="_blank"
                          className="relative bg-customBlack border border-customBlue hover:bg-customBlue rounded lg:h-16 lg:w-24 w-full h-20 flex justify-center items-center overflow-hidden"
                        >
                          Github
                          <FaGithub className="absolute lg:size-14 size-32 mt-2 lg:ml-8 ml-12 opacity-20" />
                        </a>
                        <a
                          href={demoLink}
                          target="_blank"
                          className="relative bg-customBlack border border-customBlue hover:bg-customBlue rounded lg:h-16 lg:w-24 w-full h-20 flex justify-center items-center overflow-hidden"
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
                      <Tooltip
                        title={icon.replace(".svg", "")}
                        position="bottom"
                        trigger="mouseenter"
                        animation="scale"
                        arrow={true}
                        arrowSize="big"
                      >
                        <div className="border border-white/[0.2] rounded-full bg-black size-10 flex justify-center items-center">
                          <img
                            src={`/media/logos/${icon}`}
                            alt={icon}
                            className="p-2"
                          />
                        </div>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        <div className="tail relative min-w-[10%] text-center mt-8 lg:m-0">
          <p>2023-10</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
