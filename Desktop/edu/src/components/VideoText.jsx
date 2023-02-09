import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoText = () => {
  let [play, setPlay] = useState(false);
  var src = "https://www.youtube.com/embed?v=6hkDkKOAGZY&t=2s";
  return (
    <div className="max-w-[1080px] mx-auto mt-24 mb-24">
      <div className="flex flex-col gap-12">
        <h1 className="font-bold text-3xl opacity-80">
          Our impact on the community
        </h1>
        <div>
          <div
            className={`bg-[url('https://i.ytimg.com/vi/eVlnSDb_knk/maxresdefault.jpg')] bg-cover max-w-[1080px] h-[608px]  flex flex-col justify-center items-center ${
              play === true ? "hidden" : "block"
            }`}
          >
            <button
              className={`border-[6px] border-gray-300 opacity-60 w-24 h-24 rounded-full flex justify-center items-center  `}
              onClick={() => {
                return setPlay(true);
              }}
            >
              <FaPlay className="text-4xl text-gray-300" />
            </button>
          </div>
          <iframe
            className={` ${
              play === true
                ? "block w-[1080px] h-[608px] transition-all 2s"
                : "hidden"
            }`}
            src={
              play
                ? "https://www.youtube.com/embed/qObSFfdfe7I?autoplay=1"
                : "https://www.youtube.com/embed/qObSFfdfe7I"
            }
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* document.querySelector("button").click(function () {
    document.querySelector("#content").hide();
    document.querySelector("#yt")[0].src += "?autoplay=1";
    document.querySelector("#yt").show();
  }); */}

        {/*  */}
        {/* 
        <iframe frameborder="1" key={1}></iframe> */}
      </div>
    </div>
  );
};

export default VideoText;
