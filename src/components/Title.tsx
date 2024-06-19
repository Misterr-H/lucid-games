import React from "react";

const Title = ({ name }) => {
  return (
    <div className="flex w-full mx-auto py-1">
      <h1 className="text-[24px] font-[600px] text-white mr-3">{name}</h1>
      <div className="w-4/5 mt-5 h-[1px] bg-gradient-to-r from-[#AAFFA9] to-transparent"></div>
    </div>
  );
};

export default Title;
