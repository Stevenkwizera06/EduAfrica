import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#072951] text-white pb-8 pt-20">
      <Wrapper style="">
        <div className="grid lg:grid-cols-3 gap-10">
          <img
            className="self-center object-cover"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo-01-1.png"
            alt=""
          />
          <div>
            <div>
              <h2 className="text-[20px] font-[700] leading-[24px] text-left py-[10px]">
                Surrey Office
              </h2>
              <div className="py-[10px]">
                <p className="font-[500] leading-[28.8px] text-left">
                  #1000 – 10th Floor, 13737 96th Avenue,
                </p>
                <p className="font-[500] leading-[28.8px] text-left">
                  (City Centre 1 Building across
                </p>
                <p className="font-[500] leading-[28.8px] text-left">
                  from Surrey Memorial Hospital)
                </p>
              </div>
            </div>
            <div>
              <p className="font-[500] leading-[28.8px] text-left">
                Surrey, B.C. V3V 0C6
              </p>
              <p className="font-[500] leading-[28.8px] text-left">
                (604) 434 9101
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-[700] leading-[24px] text-left pt-[40px]">
                Office Hours
              </h2>
              <p className="font-[500] leading-[28.8px] text-left">
                Monday – Friday 8:30am to 12:00pm
              </p>
              <p className="font-[500] leading-[28.8px] text-left">
                1:00pm to 4:30pm
              </p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[20px] font-[700] leading-[24px] text-left py-[10px]">
                Vancouver Office
              </h2>
              <div className="py-4">
                <p className="font-[500] leading-[28.8px] text-left">
                  2750 East 18th Avenue, Vancouver, BC
                </p>
                <p className="font-[500] leading-[28.8px] text-left">V5M 4W8</p>
                <p className="font-[500] leading-[28.8px] text-left">
                  (604) 434 9101
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[20px] font-[700] leading-[24px] text-left pt-[40px]">
                Office Hours
              </h2>
              <p className="font-[500] leading-[28.8px] text-left py-4">
                Monday – Friday 8:30am to 4:30pm
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-[700] leading-[24px] text-left py-[10px]">
                Follow us
              </h2>
              <div className="flex items-center gap-6">
                <ImLinkedin2 className="h-5 w-5 font-[500]leading-[26px] inline-block ml-2 text-center" />
                <FiInstagram className="h-5 w-5 font-[500]leading-[26px] inline-block ml-2 text-center" />
                <FaFacebookF className="h-5 w-5 font-[500]leading-[26px] inline-block ml-2 text-center" />
                <BsTwitter className="h-5 w-5 font-[500]leading-[26px] inline-block ml-2 text-center" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-[14px] leading-[28.8px] font-[500] text-center py-10">
          {
            "The Children’s Foundation is located on the traditional and unceded territories of the Musqueam (xʷməθkʷəy̓əm), Squamish (Sḵwx̱wú7meshÚxwumixw), Tsleil-Waututh (səl̓ilw̓ətaʔɬ), Semiahmoo, Katzie, Kwikwetlem (kʷikʷəƛ̓əm), Kwantlen, Qayqayt and Tsawwassen First Nations."
          }
        </p>
        <ul className="grid grid-cols-2 lg:grid-cols-5 justify-between items-center mx-16 lg:divide-x-2 my-10">
          {[
            { title: "Donate", link: "donate" },
            { title: "Staff Portal", link: "staff" },
            { title: "Careers", link: "careers" },
            { title: "Privacy", link: "privacy" },
            { title: "Terms of Use", link: "terms" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-[12px] ml-[30%] lg:ml-20 font-[500] leading-[28.8px] text-center"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="font-[500] leading-[28.8px]  py-4 text-center">
          Designed by Burst Creative Group
        </p>
      </Wrapper>
    </div>
  );
};

export default Footer;
