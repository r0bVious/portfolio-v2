import React from "react";

const Spinner = () => {
  return (
    <div className="h-[50%] w-full lg:h-full lg:w-[50%] flex items-center justify-center">
      <div className="relative size-28">
        <div className="absolute size-28 rounded-full border-[5px] border-customGranite border-t-transparent border-b-transparent animate-spin-slow"></div>
        <div className="absolute size-28 rounded-full border-[5px] border-customBlue border-t-transparent border-b-transparent animate-spin-slower"></div>
      </div>
    </div>
  );
};

export default Spinner;
