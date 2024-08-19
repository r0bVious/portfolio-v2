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
          className="border-2 border-customBlue border-dotted lg:mx-0 mx-5"
          onClick={(e) => e.stopPropagation()}
        >
          <HeroHighlight className="flex flex-col justify-center items-center py-10 px-5">
            <h1>Which style do you prefer?</h1>
            <div className="flex justify-evenly items-center p-10 gap-10">
              <a
                href="media/Robert J Spano 2024 Standard CV.pdf"
                target="_blank"
                className="inline-block"
              >
                <img
                  src="/media/standardcvimg.png"
                  className="lg:h-80 object-cover object-top"
                />
              </a>
              <a
                href="media/Robert J Spano 2024 Visual CV.pdf"
                target="_blank"
                className="inline-block"
              >
                <img
                  src="/media/visualcvimg.png"
                  className="lg:h-80 object-cover object-top"
                />
              </a>
            </div>
          </HeroHighlight>
        </div>
      </div>
    </>
  );
};
export default Modal;
