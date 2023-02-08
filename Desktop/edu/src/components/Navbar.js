import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-screen relative">
    <video
      loop
      autoPlay
      className="absolute object-cover  top-0 left-0 w-full h-[90%]"
      src="https://childrens-foundation.org/wp-content/uploads/2022/11/BANNER_Compressed.mp4"
    ></video>
    <div className="relative z-40">
      <div className="flex items-center justify-between max-w-5xl mx-auto py-6">
        <a href="">
          <img
            className="h-14"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo_white_letters.png"
            alt=""
          />
        </a>
        <div className="relative w-full flex justify-center group items-center">
          <a
            className="px-8 text-white font-semibold py-4 bg-gray-900 "
            href=""
          >
            MENU
          </a>
          <div className="w-[80%] hidden absolute items-center  bottom-0 translate-y-full group-hover:flex">
            {[
              { title: "Programs", color: "yellow" },
              { title: "About", color: "blue" },
              { title: "Learn More", color: "orange" },
            ].map((e, i) => {
              return (
                <a
                  key={i}
                  style={{ backgroundColor: e.color }}
                  className="px-8 w-full text-center text-white font-semibold py-4"
                  href=""
                >
                  DONATE
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <a
            className="px-8 text-white font-semibold py-4 bg-pink-500"
            href=""
          >
            DONATE
          </a>
        </div>
      </div>
      <div className="w-full flex items-center justify-center max-w-3xl mx-auto">
        <h4 className="font-bold text-white text-[100px] leading-[120px] text-center">
          CHANGING LIVES EVERYDAY
        </h4>
      </div>
      <div className="max-w-5xl mx-auto gap-3 mt-8 grid grid-cols-3">
        <a
          className="px-8 text-white font-semibold text-center py-8 text-xl bg-blue-500 w-full"
          href=""
        >
          Ways to give
        </a>

        <a
          className="px-8 text-white font-semibold  text-center py-8 text-xl bg-red-500 w-full"
          href=""
        >
          Our programme
        </a>

        <a
          className="px-8 text-white font-semibold  text-center py-8 text-xl bg-green-500 w-full"
          href=""
        >
          Stories
        </a>
      </div>
    </div>
  </div>
  )
}

export default Navbar