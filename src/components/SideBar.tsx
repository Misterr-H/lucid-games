import React, { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { IoWalletOutline, IoStatsChartOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaReceipt } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';
import { TbAffiliate } from 'react-icons/tb';
import { FaNoteSticky } from 'react-icons/fa6';
import { SiSpringsecurity } from 'react-icons/si';
import { MdOutlineSupportAgent } from 'react-icons/md';

interface SidebarProps {
    userName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-gray-900 text-white w-full md:w-64 flex flex-col md:fixed md:left-0 md:top-0 md:h-full md:border-r border-gray-700 mt-4 md:mt-0">
            {/* Company Name */}
            <div className="p-2 text-center">
                <h1 className="text-4xl font-bold mt-4">Strive</h1>
            </div>

            {/* Horizontal line above profile */}
            <hr className="border-t border-gray-700 mx-4 mt-2" />

            {/* Profile Section */}
            <div className="p-2 flex items-center cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-lg mt-3" onClick={toggleDropdown}>
                {/* Profile Photo */}
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-2"></div>
                {/* Hello message */}
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">Hello👋</p>
                    <h2 className="text-lg font-semibold">{userName}</h2>
                </div>
                <div className="ml-auto">
                    {isDropdownOpen ? <FiChevronDown className="h-6 w-6 text-white" /> : <FiChevronRight className="h-6 w-6 text-white" />}
                </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <ul className="pl-8">
                    <li className="py-1 cursor-pointer hover:bg-gray-800 relative pl-4 flex items-center">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoWalletOutline className="h-6 w-6 text-white mr-1" style={{ fill: "#FFFFFF" }} />
                        <span className="ml-2">Wallet</span>
                    </li>
                    <li className="py-1 cursor-pointer hover:bg-gray-800 relative pl-4 flex items-center">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoStatsChartOutline className="h-6 w-6 text-white mr-1" />
                        <span className="ml-2">Statistics</span>
                    </li>
                    <li className="py-1 cursor-pointer hover:bg-gray-800 relative pl-4 flex items-center">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <FaReceipt className="h-6 w-6 text-white mr-1" />
                        <span className="ml-2">Transactions</span>
                    </li>
                    <li className="py-1 cursor-pointer hover:bg-gray-800 relative pl-4 flex items-center">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <SiBitcoinsv className="h-6 w-6 text-white mr-1" />
                        <span className="ml-2">My Bets</span>
                    </li>
                    <li className="py-1 cursor-pointer hover:bg-gray-800 relative pl-4 flex items-center">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoSettingsOutline className="h-6 w-6 text-white mr-1" />
                        <span className="ml-2">Settings</span>
                    </li>
                </ul>
            )}

            {/* Horizontal line below profile */}
            <hr className="border-t border-gray-700 mx-4 my-2 mt-3" />

            {/* Menu Options */}
            <ul className="py-2">
                <li className="px-2 py-1 flex flex-row cursor-pointer hover:bg-gray-800 text-white">
                    <TbAffiliate className="h-6 w-6 text-white mr-1" />
                    Affiliate
                </li>
                <li className="px-2 flex flex-row py-1 cursor-pointer hover:bg-gray-800 text-white">
                    <FaNoteSticky className="h-6 w-6 text-white mr-1" />
                    Blog
                </li>
                <li className="px-2 py-1 flex flex-row cursor-pointer hover:bg-gray-800 text-white">
                    <SiSpringsecurity className="h-6 w-6 text-white mr-1" />
                    Responsible Gambling
                </li>
                <li className="px-2 py-1 flex flex-row cursor-pointer hover:bg-gray-800 text-white">
                    <MdOutlineSupportAgent className="h-6 w-6 text-white mr-1" />
                    Help & Support
                </li>
            </ul>

            {/* Horizontal line below Help & Support */}
            <hr className="border-t border-gray-700 mx-4 my-2" />

            {/* Logout Option */}
            <div className="p-2 flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
                <button className="bg-transparent text-purple-600">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
