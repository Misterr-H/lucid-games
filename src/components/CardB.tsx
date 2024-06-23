// import React from "react";
import "../app/globals.css";

const Card = () => {
  return (
    <div className="deposits-info flex justify-between bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-8 px-4 border border-white-opacity-15">
      <div className="left">
        <p className="text-white py-1 text-[14px] font-semibold">
          5 April, 2023
        </p>
        <p className="text-[#a3a5a3] text-[14px] font-medium">7 bets</p>
      </div>
      <div className="right">
        <button className="border border-[#59845b] px-2 py-1 rounded-3xl text-[#abffa8] text-[12px] font-normal h-[38px] w-[92px]">
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
