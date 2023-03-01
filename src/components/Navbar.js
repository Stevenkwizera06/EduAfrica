import React, { useState } from "react";
import items from "@/data/menuItems";
import DropDown from "./DropDown";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [activeTab, setActiveTab] = useState();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="h-max relative">
      <video
        loop
        autoPlay
        muted
        className="absolute object-cover top-0 left-0 w-full h-[95%]"
        src="https://childrens-foundation.org/wp-content/uploads/2022/11/BANNER_Compressed.mp4"
      ></video>

      <div className=" relative max-w-[1024px] mx-auto gap-12 flex flex-col justify-items-start h-[95%] px-20 lg:px-0 ">
        <div className="flex items-center w-full justify-between mx-auto py-6">
          <a href="">
            <img
              className="h-[41px] max-w-[160px]"
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo_white_letters.png"
              alt=""
            />
          </a>
          <div className="group w-fit md:flex justify-center ">
            <a
              className="px-10 hidden md:flex text-white cursor-pointer font-semibold py-4 bg-darkBlue "
              href="#"
            >
              Menu
            </a>
            <FiMenu
              className="md:hidden"
              size={30}
              color="fff"
              onClick={() => setShowMenu(!showMenu)}
            />

            <div
              className="hidden absolute md:group-hover:block mt-14"
              onMouseLeave={() => setActiveTab()}
            >
              <div className="grid grid-cols-4 max-w-[592px] w-[592px]">
                {items.map((item, index) => (
                  <ul
                    key={index}
                    onMouseEnter={() => setActiveTab(item.title)}
                    className="flex text-white font-medium text-sm"
                  >
                    <li
                      className={`${item.bgColor} w-full py-4 hover:cursor-default`}
                    >
                      <a href="#" className="hover:text-gray-400">
                        {item.title}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
              <div>
                {items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: item.bgColor,
                    }}
                    className={` flex`}
                  >
                    {activeTab === item.title
                      ? item.subItems.map((subItem, index) => (
                          <div
                            key={index}
                            className={`${item.bgColor} text-white w-full`}
                          >
                            {subItem.title === "" ? (
                              <br />
                            ) : (
                              <a href={subItem.title.href}>
                                {subItem.title.name}
                              </a>
                            )}
                            {subItem.contents.map((content, index) => (
                              <div key={index}>
                                <a href={content.href}>{content.name}</a>
                              </div>
                            ))}
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
        <DropDown showMenu={showMenu} />
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-start md:w-[819px] mx-auto">
            <h4 className="font-bold text-white text-[100px] leading-[99px]">
              CHANGING <br /> LIVES <br />
              <p className="-space-x-[0.2px]">
                <span>EVERY</span>
                <span className="text-brightYellow ">DAY</span>
              </p>
            </h4>
          </div>
          <div className="max-w-[1024px] mx-auto w-full gap-[17px] grid grid-cols-3 pt-24">
            <a
              className="px-14 text-white font-semibold text-center py-[35px] text-2xl bg-brightYellow "
              href=""
            >
              Ways to give
            </a>

            <a
              className="px-14 text-white font-semibold  text-center py-[35px] text-2xl bg-darkBlue "
              href=""
            >
              Our programme
            </a>

            <a
              className="px-14 text-white font-semibold  text-center py-[35px] text-2xl bg-pink "
              href=""
            >
              Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
