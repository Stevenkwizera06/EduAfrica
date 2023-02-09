import React from "react";

function AboutUs() {
  return (
    <div>
      {" "}
      <div className="flex p-16 gap-24">
        <div className="flex flex-col gap-4 ml-14 w-[404px]">
          <h1 className="flex  text-3xl font-bold">What we do</h1>
          <p className="w-[470px] h-[192px]">
            The Children’s Foundation provides specialized treatment,
            counselling and attentive care to children, youth, and families with
            complex challenges through a variety of programs and services. Some
            of the challenges our clients face ranges from ASD, FASD, severe
            social, emotional, and developmental disorders and disabilities, and
            challenges that stem from a history of trauma, among many others.
          </p>
          <div className="flex  ">
            <a
              className="px-8 text-white font-semibold py-4 bg-pink-500"
              href=""
            >
              DONATE
            </a>
          </div>
        </div>
        <div className="w-[478px] h-[258px] ">
          <img
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_7098-scaled.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-3xl font-bold leading-10 w-10/12">
          The Children’s Foundation has helped thousands of children since 1957
        </h1>
        <p className="mt-4 w-11/12">
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
        <div className="grid lg:grid-cols-2 mt-4">
          <img
            className="object-cover"
            alt=""
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_6977-scaled.jpeg"
          />
          <div className="flex flex-col gap-6 bg-yellow-300">
            <h1 className="text-5xl font-bold">Our mission</h1>
            <p className="text-gray-600">
              Improving lives by helping children and their families navigate
              complex challenges.
            </p>
            <hr className="w-[70%] h-[1px]" />
            <h1 className="text-5xl font-bold">Our vision</h1>
            <p className="text-gray-600">
              Communities in which each child has the opportunity for optimum
              growth and development, and each family is able to provide the
              best for its children.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#2e8bc4] mt-8 mb-8 h-[600px]">
        <div className="max-w-[1024px] mx-auto grid lg:grid-cols-2 justify-center items-center text-center">
          <img
            className="mt-12"
            src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo-01-1.png"
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
              className="w-[90%] p-2 placeholder:text-center bg-transparent placeholder:text-lg border-2 border-[#e85c41] focus:outline-none"
              placeholder="what is your email"
            />
            <div className="flex justify-center ">
              <a
                className="px-8 text-white font-semibold py-4 bg-pink-500"
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
        </div>
      </div>
      <div className="grid lg:grid-cols-2 justify-center items-center max-w-[1024px] mx-auto space-x-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-bold">Capital campaign program</h1>
          <p>
            The Children’s Foundation is working to secure our future in Surrey.
            Help us make sure that we are there for children and families for
            years to come. Owning our facility out right will provide greater
            predictability and control over our occupancy costs and help us
            focus resources and energy on the services children, families, and
            community need.
          </p>
          <p>
            We need your help and support to raise $5,000,000 in the next 5
            years.
          </p>
        </div>

        <img
          className="object-cover    w-[478px] h-[293px]"
          alt=""
          src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_6928-scaled.jpeg"
        />
      </div>
      <div className="m-12 relative">
        <img
          className="object-cover h-11/12 relative"
          src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_7027-scaled.jpeg"
          alt=""
        />

        <div className="flex justify-center">
          <div
            className="px-8  text-white font-semibold -mt-24 text-center py-8 text-xl bg-[#072951] w-[504px] h-[238px] relative z-40"
            href=""
          >
            <div className="flex flex-col">
              <p>
                We improve the lives of children and families with your support
              </p>
              <a
                className="px-8 w-36 justify-center ml-36 mt-10  text-white font-semibold py-4 bg-pink-500"
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
