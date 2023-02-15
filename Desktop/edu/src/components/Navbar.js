import React from "react";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <div className="h-screen relative overflow-hidden">
      <video
        loop
        autoPlay
        muted
        className="absolute object-cover top-0 left-0 w-full h-[90%]"
        src="https://childrens-foundation.org/wp-content/uploads/2022/11/BANNER_Compressed.mp4"
      ></video>

      <div className="relative max-w-[1426px] mx-auto flex flex-col justify-items-start justify-between h-[90%] pt-6 px-20 lg:px-0 ">
        <div className="flex items-center w-full justify-between mx-auto py-6">
          <a href="">
            <img
              className="h-[61px] max-w-[240px]"
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo_white_letters.png"
              alt=""
            />
          </a>
          <div className=" w-full flex justify-center group items-center text-2xl">
            <a
              className="px-8 text-white font-semibold py-4 bg-darkBlue "
              href=""
            >
              Menu
            </a>
            <div className="w-[80%] hidden absolute items-center  bottom-0 translate-y-full group-hover:flex">
              {[
                { title: "Programs", color: "yellow" },
                { title: "About", color: "blue" },
                { title: "Learn More", color: "orange" },
              ].map((e, i) => {
                return (
                  <a
                    key={i}
                    style={{ backgroundColor: e.color }}
                    className="px-8 w-full text-center text-white font-semibold py-4"
                    href=""
                  >
                    DONATE
                  </a>
                );
              })}
            </div>
          </div>
          <div className="text-2xl">
            <a className="px-8 text-white font-semibold py-4 bg-pink" href="">
              Donate
            </a>
          </div>
        </div>
        <div className="flex items-center justify-start w-[1229px] mx-auto">
          <h4 className="font-bold text-white text-[100px] leading-[120px]">
            CHANGING <br /> LIVES <br /> EVERY{" "}
            <span className="text-brightYellow">DAY</span>
          </h4>
        </div>
        <div className="max-w-[1080px] mx-auto w-[330px] lg:w-full xl:gap-12 mt-8 lg:grid lg:gap-6 grid-cols-3 lg:-mb-12 lg:px-28 flex flex-col ">
          <a
            className=" xl:px-14 text-white font-semibold text-center py-8 text-2xl bg-brightYellow "
            href=""
          >
            Ways to give
          </a>

          <a
            className=" xl:px-14 text-white font-semibold  text-center py-8 text-2xl bg-darkBlue"
            href=""
          >
            Our programme
          </a>

          <a
            className=" xl:px-14 text-white font-semibold  text-center py-8 text-2xl bg-pink"
            href=""
          >
            Stories
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
