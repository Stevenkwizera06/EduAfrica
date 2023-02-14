import React, { useState, useEffect } from "react";
import items from "@/data/menuItems";
import DropDown from "./DropDown";

function Navbar() {
  const [activeTab, setActiveTab] = useState();

  return (
    <div className="w-full h-screen relative">
      <video
        loop
        autoPlay
        className="absolute object-cover top-0 left-0 w-full h-[90%]"
        src="https://childrens-foundation.org/wp-content/uploads/2022/11/BANNER_Compressed.mp4"
      ></video>
      <div className="relative z-40">
        <div className="flex items-center justify-between max-w-5xl mx-auto py-6">
          <a href="">
            <img
              className="h-14"
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo_white_letters.png"
              alt=""
            />
          </a>
          <div className="hidden group w-full md:flex justify-center ">
            <a
              className="px-8 text-white font-semibold py-4 bg-gray-900 "
              href=""
            >
              MENU
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
        <DropDown />

          <div>
            <a
              className="px-8 text-white font-semibold py-4 bg-pink-500"
              href=""
            >
              DONATE
            </a>
          </div>
        </div>
        <div className="w-full flex items-center justify-center max-w-3xl mx-auto">
          <h4 className="font-bold text-white text-[100px] leading-[120px] text-center">
            CHANGING LIVES EVERYDAY
          </h4>
        </div>
        <div className="max-w-5xl mx-auto gap-3 mt-8 grid grid-cols-3">
          <a
            className="px-8 text-white font-semibold text-center py-8 text-xl bg-blue-500 w-full"
            href=""
          >
            Ways to give
          </a>

          <a
            className="px-8 text-white font-semibold  text-center py-8 text-xl bg-red-500 w-full"
            href=""
          >
            Our programme
          </a>

          <a
            className="px-8 text-white font-semibold  text-center py-8 text-xl bg-green-500 w-full"
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
