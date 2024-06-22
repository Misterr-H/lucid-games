import React from "react";
import Title from "../components/Title";

const Statistics = () => {
  return (
    <div className="flex flex-col w-4/5 mx-auto mt-4 h-full">
      <div className="stats-line">
        <Title name="Statistics" />
      </div>
      <div className="statistics-info bg-gradient-to-r from-[#171C1C] to-transparent w-full mx-auto mt-2 rounded-s py-5 px-4 border-r border-white-opacity-15">
        <div className="username font-jakarta text-white">Akash</div>
        <div className="date font-jakarta text-white">12 Jan 2023</div>
        <div className="stats grid grid-cols-1 sm:grid-cols-2 mt-2 gap-4">
          <div className="bg-gray-800 p-4 rounded flex-col">
            <p>Total Bets</p>
            <h1>355</h1>
          </div>
          <div className="bg-gray-800 p-4 rounded flex-col">
            <p>Total Bets</p>
            <h1>355</h1>
          </div>
          <div className="bg-gray-800 p-4 rounded flex-col">
            <p>Total Bets</p>
            <h1>355</h1>
          </div>
          <div className="bg-gray-800 p-4 rounded flex-col">
            <p>Total Bets</p>
            <h1>355</h1>
          </div>
        </div>
        <div className="buttons w-full md:w-1/2  bg-slate-400 mt-4 py-2 rounded text-center">
          Request Statistics
        </div>
      </div>
    </div>
  );
};

export default Statistics;
