import React from "react";

const GridMenu = () => {
  return (
    <div>
      <div className="gap-[20px] -mt-20 w-fit mx-auto lg:hidden flex flex-col">
        <a
          className=" text-white font-semibold text-center py-[28px] text-2xl bg-brightYellow px-10"
          href=""
        >
          Ways to give
        </a>

        <a
          className=" text-white font-semibold  text-center py-[28px] text-2xl bg-darkBlue px-10"
          href=""
        >
          Our programme
        </a>

        <a
          className=" text-white font-semibold  text-center py-[28px] text-2xl bg-pink px-10"
          href=""
        >
          Stories
        </a>
      </div>
    </div>
  );
};

export default GridMenu;
