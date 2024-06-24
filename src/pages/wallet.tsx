import React from "react";
import Title from "../components/Title";
import { IoEyeOutline } from "react-icons/io5";
import walletEllipse from "../assets/graphics/wallet-ellipse.png";

const Wallet = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 min-h-screen">
      <div className="wallet-line">
        <Title name="Wallet" />
      </div>
      <div className="wallet-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-4  rounded-s py-8 px-4 border border-white-opacity-15">
        <div className="flex">
          <div className="left flex flex-col">
            <p className="flex gap-2 text-[#FFFFFF] opacity-80 text-[12px] font-normal tracking-wider">
              Estimated balance <IoEyeOutline style={{ marginTop: "5px" }} />
            </p>
            <h1 className="text-white text-[42px] font-extrabold tracking-wider">
              $0.002 USD
            </h1>
          </div>
          <div className="right ">
            {/* <img src={walletEllipse} alt="loading..." /> */}
          </div>
        </div>
        <div className="buttons md:flex gap-2 mt-4">
          <button className="bg-gradient-to-r from-[#A370EF] to-[#772CE8] text-[#FFFFFF] tracking-wider font-semibold text-[14px] w-full py-4 px-4 mb-1 rounded-md">
            Deposit
          </button>
          <button className="bg-gradient-to-r from-[#AAFFA9] to-[#11FFBD] text-[#07030C] tracking-wider font-semibold text-[14px] w-full py-4 px-4 rounded-md">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
