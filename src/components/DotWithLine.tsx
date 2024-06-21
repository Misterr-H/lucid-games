import React from 'react';

const DotWithLine: React.FC = () => {
  return (
    <div className="flex items-center mt-4">
      {/* Dot with drop shadow */}
      <div className="w-4 h-4 bg-[#AAFFA9] rounded-full shadow-dot"></div>
      {/* Horizontal line */}
      {/* <div className="w-4/5 mt-5 h-[1.5px] bg-gradient-to-r from-[#AAFFA9] to-transparent"></div> */}
      <div className="flex-1 h-[2px] bg-gradient-to-r from-[#AAFFA9] to-transparent "></div>
    </div>
  );
};

export default DotWithLine;