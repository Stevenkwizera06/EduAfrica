import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Wrapper from "./Wrapper";

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
              <img
                src="https://i.ytimg.com/vi/eVlnSDb_knk/maxresdefault.jpg"
                alt="bg"
              />
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
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
              <img
                src="https://childrens-foundation.org/wp-content/uploads/2023/02/Screen-Shot-2023-02-02-at-13.25.05.png"
                alt=""
              />
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>{" "}
    </Wrapper>
  );
};

export default VideoText;
