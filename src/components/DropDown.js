// import React, { useState } from "react";
// import { IoIosClose, IoIosAdd } from "react-icons/io";
// import items from "@/data/menuItems";

// const DropDown = ({ showMenu }) => {
//   const [activeTab, setActiveTab] = useState();
//   const [activeSubTab, setActiveSubTab] = useState();

//   return (
//     <>
//       <div className="flex w-full md:hidden  justify-center text-white">
//         <div className="md:flex absolute w-full mt-14 ">
//           {items.map((item, index) => (
//             <div key={index} className={` ${showMenu ? "show" : "hidden"}`}>
//               <div
//                 className={`bg-darkBlue flex justify-between w-full px-5 py-4`}
//               >
//                 <p>{item.title}</p>
//                 {item.title === activeTab ? (
//                   <IoIosClose
//                     className="cursor-pointer"
//                     onClick={() => setActiveTab()}
//                   />
//                 ) : (
//                   <IoIosAdd
//                     className="cursor-pointer"
//                     onClick={() => setActiveTab(item.title)}
//                   />
//                 )}
//               </div>
//               {activeTab === item.title
//                 ? item.subItems.map((subItem, index) => (
//                     <div
//                       key={index}
//                       className={`${item.bgColor} bg-darkBlue w-full pl-6 cursor-pointer`}
//                     >
//                       <span
//                         onClick={() =>
//                           activeSubTab === subItem.title
//                             ? setActiveSubTab()
//                             : setActiveSubTab(subItem.title)
//                         }
//                       >
//                         {subItem.title}
//                       </span>

//                       {activeSubTab === subItem.title ? (
//                         <p>{subItem.contents}</p>
//                       ) : (
//                         ""
//                       )}
//                     </div>
//                   ))
//                 : ""}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DropDown;

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function DropDown({ showMenu }) {
  const [isOpen, setIsOpen] = useState(showMenu);
  const [subElements, setSubElements] = useState({
    heading1: false,
    heading2: false,
    heading3: false,
  });

  const toggleSubElements = (heading) => {
    const newSubElements = { ...subElements };
    newSubElements[heading] = !newSubElements[heading];
    setSubElements(newSubElements);
  };

  return (
    <div className={`${showMenu ? "block" : "hidden"} relative`}>
      <button
        className="block w-full py-2 px-4 text-lg text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 duration-700  ease-in-out "
        onClick={() => setIsOpen(!isOpen)}
      >
        Click Me
        {isOpen ? (
          <FiMinus className="inline-block ml-2" />
        ) : (
          <FiPlus className="inline-block ml-2" />
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 rounded-md shadow-lg bg-white overflow-hidden w-full">
          {/* First heading */}
          <div>
            <div
              className="text-gray-500 uppercase tracking-wide font-semibold px-4 py-2 cursor-pointer"
              onClick={() => toggleSubElements("heading1")}
            >
              Heading 1
              {subElements.heading1 ? (
                <FiMinus className="inline-block ml-2" />
              ) : (
                <FiPlus className="inline-block ml-2" />
              )}
            </div>
            {subElements.heading1 && (
              <ul className="bg-white divide-y divide-gray-200">
                <li className="px-4 py-2">Sub-element 1</li>
                <li className="px-4 py-2">Sub-element 2</li>
                <li className="px-4 py-2">Sub-element 3</li>
              </ul>
            )}
          </div>

          {/* Second heading */}
          <div>
            <div
              className="text-gray-500 uppercase tracking-wide font-semibold px-4 py-2 cursor-pointer"
              onClick={() => toggleSubElements("heading2")}
            >
              Heading 2
              {subElements.heading2 ? (
                <FiMinus className="inline-block ml-2" />
              ) : (
                <FiPlus className="inline-block ml-2" />
              )}
            </div>
            {subElements.heading2 && (
              <ul className="bg-white divide-y divide-gray-200">
                <li className="px-4 py-2">Sub-element 1</li>
                <li className="px-4 py-2">Sub-element 2</li>
              </ul>
            )}
          </div>

          {/* Third heading */}
          <div>
            <div
              className="text-gray-500 uppercase tracking-wide font-semibold px-4 py-2 cursor-pointer"
              onClick={() => toggleSubElements("heading3")}
            >
              Heading 3
              {subElements.heading3 ? (
                <FiMinus className="inline-block ml-2" />
              ) : (
                <FiPlus className="inline-block ml-2" />
              )}
            </div>
            {subElements.heading3 && (
              <ul className="bg-white divide-y divide-gray-200">
                <li className="px-4 py-2">Sub-element 1</li>
                <li className="px-4 py-2">Sub-element 2</li>
                <li className="px-4 py-2">Sub-element 3</li>
                <li className="px-4 py-2">Sub-element 4</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
