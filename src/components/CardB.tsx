// import React from "react";
import "../app/globals.css";

const Card = () => {
  return (
    <div className="deposits-info flex justify-between bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-8 px-4 border border-white-opacity-15">
      <div className="left">
        <p className="text-white">$ 0.546342003</p>
        <p className="text-white">12345</p>
      </div>
      <div className="right">
        <button className="border border-green-500 px-2 py-2 rounded-lg text-green-500 font-normal">
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
