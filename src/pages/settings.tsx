import React from "react";
import Title from "../components/Title";
import { IoEyeOutline } from "react-icons/io5";
import walletEllipse from "../assets/graphics/wallet-ellipse.png";

const Settings = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 h-full">
      <div className="wallet-line">
        <Title name="Settings" />
      </div>
      <div className="wallet-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-4 px-4 border border-white-opacity-15">
        <div className="mb-4">
          <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
            Email
          </label>
          <div className="inputs flex gap-2">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="shadow appearance-none rounded-md w-1/2 h-[38px] py-3 px-3 mt-2 bg-[#07030C] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className=" text-[#11FFBD] mt-4 w-fit m-auto">
              <a href="/register"> Resend link</a>
            </p>
            <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] px-2 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="wallet-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-4 px-4 border border-white-opacity-15">
        <div className="mb-4">
          <label className=" text-[#FFFFFF] text-sm font-medium mb-2">
            Phone
          </label>
          <div className="inputs flex gap-2">
            <input
              id="phone"
              placeholder="Enter Phone"
              className="shadow appearance-none rounded-md w-1/2 h-[38px] py-2 px-3 mt-2 bg-[#07030C] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] px-2 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
