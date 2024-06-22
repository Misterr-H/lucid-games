import React from "react";
import Title from "../components/Title";

const Statistics = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 min-h-screen">
      <div className="stats-line">
        <Title name="Statistics" />
      </div>
      <div className="statistics-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-2 rounded-s py-5 px-4 border border-white-opacity-15">
        <div className="username font-jakarta text-white font-semibold text-[16px] tracking-wide">
          Akash
        </div>
        <div className="date font-jakarta text-[#8b8c8d] font-semibold text-[16px] tracking-wide">
          Joined on <span className="text-white">12 Jan 2023</span>
        </div>
        <div className="stats grid grid-cols-1 sm:grid-cols-2 mt-2 gap-4">
          <div className="bg-gray-800 p-6 rounded flex-col  border border-white-opacity-15">
            <p className="text-[#bdbdbe] font-semibold text-[16px] tracking-wide">
              Total Bets
            </p>
            <h1 className="text-white font-semibold text-[42px] tracking-wide">
              355
            </h1>
          </div>
          <div className="bg-gray-800 p-6 rounded flex-col  border border-white-opacity-15">
            <p className="text-[#bdbdbe] font-semibold text-[16px] tracking-wide">
              Total Bets
            </p>
            <h1 className="text-white font-semibold text-[42px] tracking-wide">
              355
            </h1>
          </div>
          <div className="bg-gray-800 p-6 rounded flex-col  border border-white-opacity-15">
            <p className="text-[#bdbdbe] font-semibold text-[16px] tracking-wide">
              Total Bets
            </p>
            <h1 className="text-white font-semibold text-[42px] tracking-wide">
              355
            </h1>
          </div>
          <div className="bg-gray-800 p-6 rounded flex-col  border border-white-opacity-15">
            <p className="text-[#bdbdbe] font-semibold text-[16px] tracking-wide">
              Total Bets
            </p>
            <h1 className="text-white font-semibold text-[42px] tracking-wide">
              355
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-[#FFFFFF] tracking-wider font-normal h-[54px] text-[14px] w-1/2 mt-4 py-2 rounded flex justify-center items-center">
          Request Statistics
        </div>
      </div>
    </div>
  );
};

export default Statistics;
