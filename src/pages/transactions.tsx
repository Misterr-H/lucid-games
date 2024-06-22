import React, { useState } from "react";
import Card from "../components/CardDW";
import Card2 from "../components/CardB";
import Title from "../components/Title";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "Deposits" },
    { id: 1, name: "Withrawals" },
    { id: 2, name: "Best archieve" },
  ];

  return (
    <div className="w-[80%] mx-auto mt-4">
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
                ? "border-b-2 border-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
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
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <Card />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Card2 />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
