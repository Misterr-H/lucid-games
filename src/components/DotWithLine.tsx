import React from 'react';

const DotWithLine: React.FC = ({ children }) => {
  return (
    <div className="flex items-center mt-4">
      {/* Dot with drop shadow */}
      <div className="w-4 h-4 bg-[#AAFFA9] rounded-full shadow-dot"></div>
      {/* Horizontal line */}
      <div className="flex-1 h-[2px] bg-gradient-to-r from-[#AAFFA9] to-transparent ml-2"></div>
      <div className="ml-2">{children}</div>
    </div>
  );
};

export default DotWithLine;
