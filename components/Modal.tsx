import React, { useEffect } from "react";
import { HeroHighlight } from "./ui/HeroHighlight";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 backdrop-blur-sm grayscale"
        onClick={onClose}
      />
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="border-2 border-customBlue border-dotted lg:h-[75%] h-[60%] w-[90%] mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <HeroHighlight className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="text-lg lg:text-2xl my-5">
              Which style do you prefer?
            </h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center w-full h-full lg:py-10 py-5 gap-5">
              <a
                href="media/Robert J Spano 2024 Standard CV.pdf"
                target="_blank"
                className="h-full max-h-full flex justify-center w-full lg:w-1/2 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/media/standardcvimg.png')" }}
              />
              <a
                href="media/Robert J Spano 2024 Visual CV.pdf"
                target="_blank"
                className="h-full max-h-full flex justify-center w-full lg:w-1/2 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/media/visualcvimg.png')" }}
              />
            </div>
          </HeroHighlight>
        </div>
      </div>
    </>
  );
};

export default Modal;
