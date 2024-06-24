import React, { useState } from "react";
import Card from "../components/CardDW";
import Card2 from "../components/CardB";
import Card3 from "../components/CardMB";
import Title from "../components/Title";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "Deposits" },
    { id: 1, name: "Withrawals" },
    { id: 2, name: "Best archieve" },
  ];

  return (
    <div className="w-[80%] mx-auto mt-4 min-h-screen">
      <div className="transaction-line">
        <Title name="Transaction" />
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
            <Card3 />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
