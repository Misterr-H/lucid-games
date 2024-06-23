import React from "react";
import Title from "../components/Title";

const Settings = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 h-full">
      <div className="wallet-line">
        <Title name="Settings" />
      </div>
      <div className="setting-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4 rounded-lg py-4 px-4 border border-white-opacity-15">
        <div className="mb-4">
          <label className="text-[#FFFFFF] text-sm font-medium mb-2 block">
            Email
          </label>
          <div className="inputs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-2">
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="shadow appearance-none rounded-md w-full sm:w-1/2 h-[38px] py-3 px-3 bg-[#07030C] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="flex items-center gap-2 sm:gap-4 justify-end mt-2 sm:mt-0">
              <p className="text-[#11FFBD] w-fit mr-2">
                <a href="/register">Resend link</a>
              </p>
              <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] w-[76px] h-[38px] rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="setting-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4 rounded-lg py-4 px-4 border border-white-opacity-15">
        <div className="mb-4">
          <label className="text-[#FFFFFF] text-sm font-medium mb-2 block">
            Phone Number
          </label>
          <div className="inputs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-2">
            <input
              type=""
              id="phone"
              placeholder="Enter phone"
              className="shadow appearance-none rounded-md w-full sm:w-1/2 h-[38px] py-3 px-3 bg-[#07030C] text-[#9094A6] leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="flex gap-2 sm:gap-4 justify-end mt-2 sm:mt-0">
              <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] w-[76px] h-[38px] rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
