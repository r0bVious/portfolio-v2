"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const TopNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
  };

  return (
    <>
      <nav className="absolute top-0 z-40 w-full bg-customBlue flex justify-between min-h-10 items-center font-extrabold">
        <ul className="flex justify-evenly w-full">
          <button className="hover:text-customBlack" onClick={toggleModal}>
            <li lang="en">-Get Resume-</li>
            <li lang="ko" className="none">
              -이력서-
            </li>
          </button>
          <a href="#contact" className="hover:text-customBlack">
            <li lang="en">-Contact-</li>
            <li lang="ko" className="none">
              -연락-
            </li>
          </a>
        </ul>
        <button
          className="flex lg:fixed lg:bottom-5 lg:right-5 lg:m-0 mr-2 w-24 rounded-lg overflow-hidden"
          onClick={changeLanguage}
        >
          <img
            className="flag w-full h-full"
            src="media/us.svg"
            alt="English"
          />
          <img
            className="flag w-full h-full grayscale lg:opacity-50"
            src="media/kr.svg"
            alt="Korean"
          />
        </button>
      </nav>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default TopNav;
