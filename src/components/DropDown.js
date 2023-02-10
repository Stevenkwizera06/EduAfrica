import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import items from "@/data/menuItems";

const DropDown = () => {
  const [activeTab, setActiveTab] = useState();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex w-full md:hidden justify-center text-white">
        <FiMenu size={30} color="fff" onClick={() => setShowMenu(!showMenu)} />
        <div className="md:flex absolute w-[98%] mt-14">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                activeTab !== item.title
                  ? setActiveTab(item.title)
                  : setActiveTab()
              }
              className={` ${!showMenu ? "hidden" : "block"}`}
            >
              <div className={`${item.bgColor} w-full px-5 py-4`}>
                <p>{item.title}</p>
              </div>
              {activeTab === item.title
                ? item.subItems.map((subItem, index) => (
                    <div key={index} className={`${item.bgColor} w-full`}>
                      <p>{subItem.title}</p>
                      {subItem.contents.map((content, index) => (
                        <div key={index}>
                          <p>{content}</p>
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
