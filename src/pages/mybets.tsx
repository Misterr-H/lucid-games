import React, { useState } from "react";
import Card from "../components/CardDW";
import Card2 from "../components/CardB";
import Title from "../components/Title";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "All bets" },
    { id: 1, name: "High rollers" },
    { id: 2, name: "Race leaderboard" },
  ];

  return (
    <div className="w-[80%] mx-auto mt-4 min-h-screen">
      <div className="transaction-line">
        <Title name="My Bets" />
      </div>
      <div className="flex space-x-4  bg-[#171c1c] border-gray-300 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-gray-600 transition-all duration-200 ${
              activeTab === tab.id
                ? "border-b-2 border-[#AAFFA9]  text-white text-[14px] font-medium"
                : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === 0 && (
          <div>
            <div className="overflow-x-auto">
              <table className="table table-xs w-full">
                <thead className="text-[#828184] text-left text-[12px]">
                  <tr className="py-10">
                    <th>Game</th>
                    <th>User</th>
                    <th>Time</th>
                    <th>Bet amount</th>
                    <th>Multiplier</th>
                    <th>Payout</th>
                  </tr>
                </thead>
                <tbody className="text-white text-[12px]">
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Specialist</td>
                    <td>Littel, and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                  </tr>
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Technician</td>
                    <td>Zemlak, Daniel and </td>
                    <td>United States</td>
                    <td>12/5/2020</td>
                    <td>Purple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 1 && <div></div>}
        {activeTab === 2 && <div></div>}
      </div>
    </div>
  );
};

export default Tabs;
