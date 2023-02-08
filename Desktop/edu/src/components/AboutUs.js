import React from 'react'

function AboutUs() {
  return (
    
    <div>
    <div className="max-w-[1024px] mx-auto">
      <h1 className="text-4xl font-bold">
        The Children’s Foundation has helped thousands of children since
        1957
      </h1>
      <p>
        In the late 1940’s and early 1950’s a group of citizens lead by
        Esther Irwin had grown concerned about children who were not being
        successful at school and who often did not attend. They realized
        that without support and assistance, these children were not likely
        to have a successful outcome as they grew to adulthood. Over a
        period of ten years they met and planned how to address this issue.
        In 1957 they incorporated a charitable, non-profit society from the
        current location in Vancouver and began to help these children and
        their families. Since that time, The Children’s Foundation has
        helped thousands of vulnerable children and their families to better
        lives.
      </p>
      <div className="grid lg:grid-cols-2 ">
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
    <div className=" bg-[#2e8bc4]">
      <div className="max-w-[1024px] mx-auto grid lg:grid-cols-2 justify-center items-center">
        <img
          src="https://childrens-foundation.org/wp-content/uploads/2022/11/childrens-foundation_logo-01-1.png"
          alt=""
        />
        <div className="text-white flex flex-col gap-6 items-start">
          <h1 className="text-3xl font-bold self-center text-center max-w-[80%]">
            Get updates straight to your inbox
          </h1>
          <p className="self-center text-center">
            Sign up to get updates and stay current on what’s happening at
            the Children’s Foundation.
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
            By submitting this form you are granting The Children’s
            Foundation permission to email you. You may unsubscribe via the
            link found at the bottom of every email.
          </p>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 justify-center items-center">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold">Capital campaign program</h1>
        <p>
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
      </div>
      <img
        className="object-cover"
        alt=""
        src="https://childrens-foundation.org/wp-content/uploads/2022/11/TRW_6928-scaled.jpeg"
      />
    </div>
  </div>
  )
}

export default AboutUs