import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Wrapper from "./Wrapper";
import cheif from "../Images/chief.jpeg";
import cheif2 from "../Images/chief2.jpeg";


const VideoText = () => {
  let [play, setPlay] = useState(false);
  let [playTwo, setPlayTwo] = useState(false);
  var src = "https://www.youtube.com/embed?v=6hkDkKOAGZY&t=2s";
  return (
    <Wrapper>
      <div className="max-w-6xl mx-auto mt-24 mb-24 flex flex-col 24 pl-">
        {/* First video text */}
        <div className="flex flex-col gap-14 mb-14 flex-shrink max-w-[1080px]">
          <h1 className="font-bold text-3xl opacity-80">
            Our impact on the community
          </h1>
          <div className="flex-shrink">
            <div
              className={` max-w-[1080px] max-max-h-[608px] flex flex-col justify-center items-center ${
                play === true ? "hidden transition-all 0s" : " block "
              }`}
            >
             
              <Image alt="" src={cheif} />
              <button
                className={`border-[6px] absolute border-gray-300 opacity-60 w-24 h-24 rounded-full flex justify-center items-center `}
                onClick={() => {
                  return setPlay(true);
                }}
              >
                <FaPlay className="text-4xl text-gray-300" />
              </button>
            </div>
            <div
              className={`aspect-w-4 aspect-h-[2.2] md::aspect-none ${
                play === true ? "block" : "hidden "
              }`}
            >
              <iframe
                className={`w-full h-full `}
                src="https://www.youtube.com/embed/6hkDkKOAGZY"
                title="3 CHANGING LIVES"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* Second video text */}
        <div className="flex flex-col gap-14 mb-14 flex-shrink max-w-[1080px]">
          <h1 className="font-bold text-3xl opacity-80">Our Surrey Campus</h1>
          <div className="flex-shrink max-w-[1080px] max-h-[608px]">
            <div
              className={`max-w-[1080px] max-h-[608px] flex flex-col justify-center items-center ${
                playTwo === true ? "hidden transition-all 0s" : " block "
              }`}
            >
              {" "}
              
              <Image alt="" src={cheif2} />
              <button
                className={`border-[6px] absolute border-gray-300 opacity-60 w-24 h-24 rounded-full flex justify-center items-center  `}
                onClick={() => {
                  return setPlayTwo(true);
                }}
              >
                <FaPlay className="text-4xl text-gray-300" />
              </button>
            </div>
            <div
              className={`aspect-w-4 aspect-h-[2.2] md::aspect-none ${
                playTwo === true ? "block" : "hidden "
              }`}
            >
              <iframe
                className={`w-full h-full `}
                src="https://www.youtube.com/embed/6hkDkKOAGZY"
                title="3 CHANGING LIVES"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>{" "}
    </Wrapper>
  );
};

export default VideoText;
