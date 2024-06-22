import React from "react";
import "../app/globals.css";

const Card = () => {
  return (
    <div className="deposits-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4 rounded-lg py-4 px-4 border border-white-opacity-15">
      <div className="grid grid-cols-2 gap-4">
        {/* row1 */}
        <div className="col-span-1 flex items-center">
          <p className="text-white text-[14px] font-semibold tracking-wider">
            Game name
          </p>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <p className="text-[#a3a5a3] text-[12px] font-normal">01:15 PM</p>
        </div>

        {/* //row2 */}
        <div className="col-span-1 flex items-center">
          <div>
            <p className="text-[#a3a5a3] text-[12px] font-normal">Username</p>
            <p className="text-white text-[14px] font-normal">username</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <button className="border border-[#59845b] px-2  rounded-3xl text-[#abffa8] text-[12px] font-normal">
            0.02X
          </button>
        </div>
        {/* //row3 */}
        <div className="col-span-1 flex items-center">
          <div>
            <p className="text-[#a3a5a3] text-[12px] font-normal">Bet Amount</p>
            <p className="text-white text-[12px] font-normal">$ 0.23423434</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-end justify-center">
          <p className="text-[#b5b4b6] text-[12px] font-normal">Payout</p>
          <p className="text-white  text-[12px] font-normal">$ 0.23423434</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
