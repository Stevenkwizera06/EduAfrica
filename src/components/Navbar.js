import React, { useState } from "react";
import items from "@/data/menuItems";
import DropDown from "./DropDown";

function Navbar() {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="h-screen relative">
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
          <div className="hidden group w-fit md:flex justify-center ">
            <a
              className="px-8 text-white font-semibold py-4 bg-darkBlue "
              href=""
            >
              Menu
            </a>
            <div className="hidden absolute group-hover:block mt-14">
              <div className="flex">
                {items.map((item, index) => (
                  <ul
                    key={index}
                    onMouseEnter={() => setActiveTab(item.title)}
                    className="flex text-white font-semibold"
                  >
                    <li className={`${item.bgColor} w-full px-20 py-4`}>
                      {item.title}
                    </li>
                  </ul>
                ))}
              </div>
              <div>
                {items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: item.bgColor,
                    }}
                    className="flex text-white font-semibold"
                  >
                    {activeTab === item.title
                      ? item.subItems.map((subItem, index) => (
                          <div key={index} className={`${item.bgColor} w-full`}>
                            <div className="flex">
                              <p>{subItem.title}</p>
                            </div>
                            <div>
                              {subItem.contents.map((content, index) => (
                                <div key={index}>
                                  <p>{content}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a
            className="bg-pink px-8 w-fit text-center text-white font-semibold py-4"
            href=""
          >
            Donate
          </a>
        </div>
        <DropDown />

        <div className="flex items-center justify-start w-[1229px] mx-auto">
          <h4 className="font-bold text-white text-[100px] leading-[120px]">
            CHANGING <br /> LIVES <br />
            <span className="tracking">
              EVERY <span className="text-brightYellow ">DAY</span>
            </span>
          </h4>
        </div>
        <div className="max-w-[1080px] mx-auto w-full gap-12 mt-8 grid grid-cols-3 -mb-12">
          <a
            className="px-14 text-white font-semibold text-center py-8 text-2xl bg-brightYellow "
            href=""
          >
            Ways to give
          </a>

          <a
            className="px-14 text-white font-semibold  text-center py-8 text-2xl bg-darkBlue "
            href=""
          >
            Our programme
          </a>

          <a
            className="px-14 text-white font-semibold  text-center py-8 text-2xl bg-pink "
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
