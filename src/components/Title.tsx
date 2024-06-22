// import React from "react";
import "../app/globals.css";

const Title = ({ name }) => {
  return (
    <div className="flex w-full mx-auto py-1">
      <h1 className="roboto text-[24px] font-[600px] text-[#ffffff] mr-3 tracking-wide">
        {name}
      </h1>
      <div className="w-4/5 mt-5 h-[1.5px] bg-gradient-to-r from-[#AAFFA9] to-transparent"></div>
    </div>
  );
};


export default Title;
