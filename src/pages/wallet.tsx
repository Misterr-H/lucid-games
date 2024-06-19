import React from "react";
import Title from "../components/Title";
import { IoEyeOutline } from "react-icons/io5";

const Wallet = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 h-full">
      <div className="wallet-line">
        <Title name="Wallet" />
      </div>
      <div className="wallet-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-8 px-4">
        <div className="flex">
          <div className="left flex flex-col">
            <p className="flex gap-2 text-[#FFFFFF] opacity-80 text-[12px] font-medium">
              Estimated balance <IoEyeOutline style={{ marginTop: "5px" }} />
            </p>
            <h1 className="text-white text-[42px] font-extrabold">
              $0.0002 USD
            </h1>
            <div className="buttons flex gap-2 mt-4">
              <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-white font-bold w-full py-2 px-4 rounded-full">
                Deposit
              </button>
              <button className="bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-white font-bold w-full py-2 px-4 rounded-full">
                Withdraw
              </button>
            </div>
          </div>
          {/* <div className="right ">
            <img src="" alt="loading..." />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
