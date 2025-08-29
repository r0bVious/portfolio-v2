"use client";
import React, { useState } from "react";
import { HeroHighlight } from "./ui/HeroHighlight";
import { SocialIcon } from "react-social-icons";
import { socialMedia, email } from "@/data";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";

const Footer = () => {
  let [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  return (
    <footer id="contact">
      <HeroHighlight className="pt-10 pb-5">
        <p className="text-white-200 text-center mb-2" lang="en">
          Reach out!
        </p>
        <p className="none text-white-200 text-center mb-2" lang="ko">
          연락해주세요!
        </p>
        <div className="flex flex-col justify-between items-center gap-5">
          <button
            className="p-[3px] relative w-full lg:w-96"
            onClick={copyEmail}
          >
            <div className="absolute inset-0 bg-customBlue rounded-lg" />
            <div className="px-8 py-5 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex justify-center items-center gap-3">
              <p lang="en">
                {isCopied ? "Email Address Copied!" : "Copy Email Address"}
              </p>
              <p lang="ko" className="none">
                {isCopied
                  ? "메일 주소가 클립보드로 복사됨!"
                  : "이메일 주소 복사"}
              </p>
              {isCopied ? <FaEnvelopeOpen /> : <FaEnvelope />}
            </div>
          </button>
          <div>
            <div className="flex items-center gap-10">
              {socialMedia.map(({ id, url }) => (
                <SocialIcon
                  key={id}
                  target="_blank"
                  url={url}
                  className="lg:grayscale hover:grayscale-0 hover:scale-125 transition-all"
                />
              ))}
            </div>
          </div>

          <p className="md:text-base text-sm md:font-normal font-light mt-5">
            Copyright © 2024 - {new Date().getFullYear()} Robert J. Spano
          </p>
        </div>
      </HeroHighlight>
    </footer>
  );
};

export default Footer;
