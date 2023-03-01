import React, { useState } from "react";
import items from "@/data/menuItems";
import DropDown from "./DropDown";
import { FiMenu } from "react-icons/fi";
import Wrapper from "./Wrapper";

function Navbar() {
  const [activeTab, setActiveTab] = useState();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full relative">
      <video
        loop
        autoPlay
        muted
        className="absolute object-cover top-0 left-0 w-full h-[90%] lg:h-[91%] "
        src="https://childrens-foundation.org/wp-content/uploads/2022/11/BANNER_Compressed.mp4"
      ></video>
<<<<<<< HEAD

      <div className="relative max-w-[1426px] mx-auto flex flex-col justify-items-start justify-between h-[90%] pt-6 lg:px-0 ">
        <div className="flex items-center w-full justify-between mx-auto py-6">
          <a href="">
            <img
              className="h-[45px] lg:h-[61px] "
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo_white_letters.png"
              alt=""
            />
          </a>
          <div className="group w-fit items-center md:flex justify-center ">
            <a
              className="px-10 hidden lg:flex text-white cursor-pointer font-semibold py-4 bg-darkBlue "
              href="#"
            >
              Menu
            </a>
            <FiMenu
              className="w-7 h-7 lg:w-12 lg:h-12 lg:hidden "
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
=======
      <Wrapper>
        <div className="relative mx-auto flex flex-col justify-items-start justify-between  pt-6 lg:px-0 ">
          <div className="flex items-center w-full justify-between mx-auto py-6">
            <a href="">
              <img
                className="h-[45px] lg:h-[61px] "
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
                <div className="flex">
                  {items.map((item, index) => (
                    <ul
                      key={index}
                      onMouseEnter={() => setActiveTab(item.title)}
                      className="flex text-white font-medium text-sm"
                    >
                      <li
                        className={`${item.bgColor} w-full px-20 py-4 hover:cursor-default`}
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
                      className={`flex ${
                        item.title === "Learn More"
                          ? "text-black"
                          : "text-white"
                      } font-semibold`}
                    >
                      {activeTab === item.title
                        ? item.subItems.map((subItem, index) => (
                            <div
                              key={index}
                              className={`${item.bgColor} w-full`}
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
>>>>>>> 74b3cab (fixing navbar)
              </div>
            </div>

            <DropDown />

            <a
              className="bg-pink px-4 lg:px-8 py-2 lg:py-4 w-fit text-center text-white font-semibold "
              href=""
            >
              Donate
            </a>
          </div>
<<<<<<< HEAD

          <DropDown />
=======
          <DropDown showMenu={showMenu} />
>>>>>>> 74b3cab (fixing navbar)

          <div className="flex items-center justify-start md:w-[1229px]  mx-auto">
            <h4 className="font-[700] lg:font-bold text-white text-[40px] leading-[36px] lg:text-[100px] lg:leading-[120px]">
              CHANGING <br /> LIVES <br />
              <span className="tracking">
                EVERY <span className="text-brightYellow ">DAY</span>
              </span>
            </h4>
          </div>
          <div className="max-w-[1080px] mx-auto w-full gap-12 mt-8 invisible md:visible  md:grid lg:grid-cols-3 ">
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
<<<<<<< HEAD
        <DropDown showMenu={showMenu} />

        <div className="flex items-center justify-start md:w-[1229px]  mx-auto">
          <h4 className="font-[700] lg:font-bold text-white text-[40px] leading-[36px] lg:text-[100px] lg:leading-[120px]">
            CHANGING <br /> LIVES <br />
            <p className="-space-x-[0.2px]">
              <span>EVERY</span>
              <span className="text-brightYellow ">DAY</span>
            </p>
          </h4>
        </div>
        <div className="max-w-[1080px] mx-auto w-full gap-12 mt-8 grid lg:grid-cols-3 ">
          <a
            className=" text-white font-semibold text-center py-[32px] text-2xl bg-brightYellow "
            href=""
          >
            Ways to give
          </a>

          <a
            className=" text-white font-semibold  text-center py-[32px] text-2xl bg-darkBlue "
            href=""
          >
            Our programme
          </a>

          <a
            className=" text-white font-semibold  text-center py-[32px] text-2xl bg-pink "
            href=""
          >
            Stories
          </a>
        </div>
      </div>
=======
      </Wrapper>
>>>>>>> 74b3cab (fixing navbar)
    </div>
  );
}

export default Navbar;
