import React from "react";

const register = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="left md:w-1/2 w-full h-full bg-[#07030C] flex items-center justify-center">
        <form className="p-4 rounded md:w-1/2 w-4/5">
          <h2 className="text-3xl text-center font-semibold text-[#FFFFFF] mb-8">
            Register
          </h2>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
              Username
            </label>
            <input
              id="username"
              placeholder="Username"
              className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Date of Birth
            </label>
            <div className="flex gap-3">
              <input
                id="date"
                placeholder="DD"
                className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                id="month"
                placeholder="MM"
                className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />{" "}
              <input
                id="year"
                placeholder="YY"
                className="shadow appearance-none rounded-xl w-full h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="  text-[#FFFFFF] text-sm font-medium mb-2">
              Phone
            </label>
            <div className="flex gap-2">
              <input
                id="phonecode"
                placeholder="+91"
                className="shadow appearance-none rounded-xl w-1/4 h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                id="phone"
                placeholder=""
                className="shadow appearance-none rounded-xl w-3/4 h-[38px] py-2 px-3 bg-[#111111] text-[#9094A6] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>

          <p className="text-gray-100 my-3 w-fit m-auto">or</p>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Google
            </button>
          </div>
          <p className=" text-[#FFFFFF] mt-4 w-fit m-auto">
            Already registered?
            <span className="text-[#11FFBD]">
              <a href="">Sign in</a>
            </span>
          </p>
        </form>
      </div>
      <div className="right hidden md:flex w-1/2 h-full bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] items-center justify-center"></div>
    </div>
  );
};

export default register;
