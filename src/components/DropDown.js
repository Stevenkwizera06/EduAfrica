import React, { useState } from "react";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import items from "@/data/menuItems";

const DropDown = ({ showMenu }) => {
  const [activeTab, setActiveTab] = useState();
  const [activeSubTab, setActiveSubTab] = useState();

  return (
    <>
      <div className="flex w-full md:hidden  justify-center text-white">
        <div className="md:flex absolute w-full mt-14 ">
          {items.map((item, index) => (
            <div key={index} className={` ${showMenu ? "show" : "hidden"}`}>
              <div
                className={`bg-darkBlue flex justify-between w-full px-5 py-4`}
              >
                <p>{item.title}</p>
                {item.title === activeTab ? (
                  <IoIosClose
                    className="cursor-pointer"
                    onClick={() => setActiveTab()}
                  />
                ) : (
                  <IoIosAdd
                    className="cursor-pointer"
                    onClick={() => setActiveTab(item.title)}
                  />
                )}
              </div>
              {activeTab === item.title
                ? item.subItems.map((subItem, index) => (
                    <div
                      key={index}
                      className={`${item.bgColor} bg-darkBlue w-full pl-6 cursor-pointer`}
                    >
                      <span
                        onClick={() =>
                          activeSubTab === subItem.title
                            ? setActiveSubTab()
                            : setActiveSubTab(subItem.title)
                        }
                      >
                        {subItem.title}
                      </span>

                      {activeSubTab === subItem.title ? (
                        <p>{subItem.contents}</p>
                      ) : (
                        ""
                      )}
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
