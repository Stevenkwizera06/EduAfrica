/* eslint-disable @next/next/no-img-element */
import React from "react";
import Wrapper from "./Wrapper";

function AboutUs() {
  return (
    <div className="mt-20">
      {" "}
      <Wrapper>
        <div className="grid md:grid-cols-2 lg:p-16 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="flex text-3xl font-bold">
              Capital campaign program
            </h1>
            <p className="">
              The Children’s Foundation is working to secure our future in
              Surrey. Help us make sure that we are there for children and
              families for years to come. Owning our facility out right will
              provide greater predictability and control over our occupancy
              costs and help us focus resources and energy on the services
              children, families, and community need.
            </p>
            <p>
              We need your help and support to raise $5,000,000 in the next 5
              years.
            </p>
            <div className="self-center lg:self-start py-4">
              <a
                className="px-10 text-white bg-[#2E8BC4] hover:bg-[#B42886] text-xl font-semibold py-4 bg-pink-500"
                href=""
              >
                See more
              </a>
            </div>
          </div>
          <div>
            <img
              className=""
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_6928-scaled.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:p-16 gap-8 py-4">
          <div className="order-2 lg:order-1 py-4">
            <img
              src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_7098-scaled.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 order-1 md:order-2 ">
            <h1 className="flex text-3xl font-bold">What we do</h1>
            <p className="">
              The Children’s Foundation provides specialized treatment,
              counselling and attentive care to children, youth, and families
              with complex challenges through a variety of programs and
              services. Some of the challenges our clients face ranges from ASD,
              FASD, severe social, emotional, and developmental disorders and
              disabilities, and challenges that stem from a history of trauma,
              among many others.
            </p>
            <div className="self-center lg:self-start py-4">
              <a
                className="px-10 text-white  bg-[#B42886] hover:bg-[#ECDC01] text-xl font-semibold py-4 bg-pink-500"
                href=""
              >
                Donate now
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <h1 className="text-[30px] font-[700] leading-[36px] text-[#2e2e2e] max-w-[980px] px-[10px]  text-center">
          The Children’s Foundation has helped thousands of children since 1957
        </h1>
        <p className="mt-4 font-[500] leading-[28.8px] text-[16px] text-center text-[#707070]">
          In the late 1940’s and early 1950’s a group of citizens lead by Esther
          Irwin had grown concerned about children who were not being successful
          at school and who often did not attend. They realized that without
          support and assistance, these children were not likely to have a
          successful outcome as they grew to adulthood. Over a period of ten
          years they met and planned how to address this issue. In 1957 they
          incorporated a charitable, non-profit society from the current
          location in Vancouver and began to help these children and their
          families. Since that time, The Children’s Foundation has helped
          thousands of vulnerable children and their families to better lives.
        </p>
        <div className="grid lg:grid-cols-2 mt-4 ">
          <img
            className="object-cover h-full"
            alt=""
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_6977-scaled.jpeg"
          />
          <div className="flex flex-col items-center text-center gap-6 bg-[#ecdc01] p-[30px]">
            <h1 className="text-5xl text-[#2e2e2e] text-[30px] leading-[36px] text-center font-bold py-2.5">
              Our mission
            </h1>
            <p className="text-[#707070] max-w-[480px] leading-[28.8px] font-[500]">
              Improving lives by helping children and their families navigate
              complex challenges.
            </p>
            <div className="w-[70%] h-[1px] bg-[#2e2e2e]" />
            <h1 className="text-5xl text-[#2e2e2e] text-[30px] leading-[36px] text-center font-bold">
              Our vision
            </h1>
            <p className="text-[#707070] max-w-[480px] leading-[28.8px] font-[500]">
              Communities in which each child has the opportunity for optimum
              growth and development, and each family is able to provide the
              best for its children.
            </p>
          </div>
        </div>
      </Wrapper>
      <div className=" bg-[#2e8bc4] mt-8 lg:-mb-8 min-h-[600px] px-2">
        <div className="max-w-[1080px] mx-auto grid lg:grid-cols-2 gap-8 justify-center items-center">
          <img
            className="mt-12"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo-01-1.png"
            alt=""
          />
          <div className="text-white flex flex-col gap-6 items-start   mt-28 ">
            <h1 className="text-3xl font-bold">
              Get updates straight to your inbox
            </h1>
            <p className="self-start">
              Sign up to get updates and stay current on what’s happening at the
              Children’s Foundation.
            </p>
            <p className="text-lg font-semibold ">Email Address *</p>
            <input
              className="w-[90%] p-2 placeholder:text-white bg-transparent placeholder:text-lg border-2 border-gray-200 focus:outline-none"
              placeholder="what is your email"
            />
            <div className="flex justify-center ">
              <a
                className="text-white  bg-[#B42886] border-[1.6px] text-[20px] font-[500] leading-[32px] px-[35px] mr-5px] mb-[10px] border-none h-[50px] inline-flex items-center justify-center"
                href=""
              >
                Subscribe
              </a>
            </div>
            <p className="text-[14px] font-[300] leading-[28.8px]">
              By submitting this form you are granting The Children’s Foundation
              permission to email you. You may unsubscribe via the link found at
              the bottom of every email.
            </p>
          </div>
        </div>
      </div>
      {/* <div className=" relative">
          <img
            className="object-cover max-w-full lg:w-full h-11/12  relative"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_7027-scaled.jpeg"
            alt=""
          />
          <div className="text-white flex flex-col gap-6 items-start justify-center text-center mt-28 px-6">
            <h1 className="text-3xl font-bold self-center text-center max-w-[80%]">
              Get updates straight to your inbox
            </h1>
            <p className="self-center text-center">
              Sign up to get updates and stay current on what’s happening at the
              Children’s Foundation.
            </p>
            <p className="text-lg font-semibold self-center text-center">
              Email Address *
            </p>
            <input
              className="w-[90%] p-2 placeholder:text-white bg-transparent placeholder:text-lg border-2 border-gray-200 border-2 focus:outline-none"
              placeholder="what is your email"
            />
            <div className="flex justify-center ">
              <a
                className="text-white  bg-[#B42886] border-[1.6px] text-[20px] font-[500] leading-[32px] px-[35px] mr-5px] mb-[10px] border-none h-[50px] inline-flex items-center justify-center"
                href=""
              >
                Subscribe
              </a>
            </div>
            <p className="self-center text-center">
              By submitting this form you are granting The Children’s Foundation
              permission to email you. You may unsubscribe via the link found at
              the bottom of every email.
            </p>
          </div>
        </div> */}
      <div className=" relative  grid grid-cols-[20px_1fr_20px] lg:grid-cols-[1fr_1080px_1fr] grid-rows-[30px_1fr_30px] lg:grid-rows-[300px_150px_100px] ">
        <div className="col-start-1 col-end-4 row-start-1 row-end-3 w-full bg-green-300">
          <img
            className="object-cover  h-full w-full"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_7027-scaled.jpeg"
            alt=""
          />
        </div>
        <div className="flex justify-center mb-8 col-start-2 col-end-3 row-start-2 row-end-3 lg:row-end-4">
          <div
            className="lg:px-8  text-white font-semibold lg:-mt-24 text-center py-8 text-xl bg-[#072951] max-w-[504px] min-h-[238px] relative z-40"
            href=""
          >
            <div className="flex flex-col items-center">
              <p>
                We improve the lives of children and families with your support
              </p>
              <a
                className="px-8 w-36 justify-center  mt-10  text-white font-semibold py-4 bg-[#B42886]"
                href=""
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
