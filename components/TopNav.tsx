"use client";
import React, { useState } from "react";

type TopNavProps = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const TopNav: React.FC<TopNavProps> = ({ language, setLanguage }) => {
  const changeLanguage = () => {
    document
      .querySelectorAll("html [lang='en'], html [lang='ko']")
      .forEach((elem) => {
        elem.classList.toggle("none");
      });
    document.querySelectorAll(".flag").forEach((elem) => {
      elem.classList.toggle("grayscale");
      elem.classList.toggle("lg:opacity-50");
    });
    language === "en" ? setLanguage("ko") : setLanguage("en");
  };

  return (
    <>
      <nav className="sticky top-0 lg:relative w-full bg-customBlue flex justify-between min-h-10 items-center font-extrabold z-50">
        <ul className="flex justify-evenly w-full">
          <li>
            <a
              className="hover:text-customBlack transition-colors duration-200"
              href="/media/Robert_J_Spano_Web_Developer_Resume.pdf"
              target="_blank"
            >
              <p lang="en">-Get Resume-</p>
              <p lang="ko" className="none">
                -이력서-
              </p>
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-customBlack">
              <p lang="en">-Contact-</p>
              <p lang="ko" className="none">
                -연락-
              </p>
            </a>
          </li>
        </ul>
        <button
          className="flex lg:fixed lg:bottom-5 lg:right-5 lg:m-0 mr-2 w-24 rounded-lg overflow-hidden z-50"
          onClick={changeLanguage}
          type="button"
        >
          <div className="flex w-full">
            <img
              className="flag w-1/2 h-full"
              src="media/us.svg"
              alt="English"
            />
            <img
              className="flag w-1/2 h-full grayscale lg:opacity-50"
              src="media/kr.svg"
              alt="Korean"
            />
          </div>
        </button>
      </nav>
    </>
  );
};

export default TopNav;
