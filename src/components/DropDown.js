import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import items from "@/data/menuItems";

const DropDown = ({ showMenu }) => {
  const [activeTab, setActiveTab] = useState();
  return (
    <>
      <div className="flex w-full md:hidden justify-center text-white">
        <div className="md:flex absolute w-full mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                activeTab !== item.title
                  ? setActiveTab(item.title)
                  : setActiveTab()
              }
              className={` ${
                showMenu
                  ? "show"
                  : "hidden"
              }`}
            >
              <div
                className={`bg-darkBlue flex justify-between w-full px-5 py-4`}
              >
                <p>{item.title}</p>
                {item.title === activeTab ? <IoIosClose /> : <IoIosAdd />}
              </div>
              {activeTab === item.title
                ? item.subItems.map((subItem, index) => (
                    <div key={index} className={`bg-darkBlue w-full pl-16`}>
                      <a href={subItem.title.href}>{subItem.title.name}</a>
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
    </>
  );
};

export default DropDown;
