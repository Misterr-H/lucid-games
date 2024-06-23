// import React from "react";
import "../app/globals.css";

const Card = () => {
  return (
    <div className="deposits-info flex justify-between bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4 rounded-lg py-8 px-4 border border-white-opacity-15">
      <div className="left flex-col gap-2 items-center justify-center">
        <p className="text-white py-1 text-[14px] font-semibold">
          $ 0.546342003
        </p>
        <p className="text-[#a3a5a3] text-[14px] font-medium">12345</p>
      </div>
      <div className="right flex flex-col items-center justify-center gap-2">
        <button className="border border-[#59845b] px-2 py-1 rounded-3xl text-[#abffa8] text-[12px] font-normal">
          Successful
        </button>
        <p className=" text-[#b5b4b6] text-[10px] font-medium">
          2:55 AM 5 April, 2023
        </p>
      </div>
    </div>
  );
};

export default Card;
