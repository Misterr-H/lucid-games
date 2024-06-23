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
    isMobileView: boolean;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, isMobileView, isSidebarOpen, toggleSidebar }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={`bg-[#AAFFA9] bg-opacity-5 text-white w-full md:w-64 flex flex-col ${isMobileView ? 'md:fixed md:left-0 md:top-0' : ''} md:h-full md:border-r border-gray-700 mt-4 md:mt-0`}>
            {/* Hamburger Icon */}
            {isMobileView && (
                <button onClick={toggleSidebar} className="p-2 text-white bg-gray-800 z-50 flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-4 h-0.5 bg-white mb-1"></div>
                    <div className="w-3 h-0.5 bg-white"></div>
                </button>
            )}

            {/* Company Name */}
            <div className="p-2 text-center">
                <h1 className="text-4xl font-bold mt-4">Strive</h1>
            </div>

            {/* Horizontal line above profile */}
            <hr className="border-t border-gray-700 mx-4 mt-2" />

            {/* Profile Section */}
            <div 
                className={`p-2 flex items-center cursor-pointer rounded-lg mt-3 ${isDropdownOpen ? 'bg-[#FFFFFF] bg-opacity-10' : 'bg-transparent'}`} 
                onClick={handleToggleDropdown}
            >
                {/* Profile Photo */}
                <div className="h-10 w-10 bg-gray-300 mr-2"></div>
                {/* Hello message */}
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">Hello👋</p>
                    <h2 className="text-lg font-semibold">{userName|| ""}</h2>
                </div>
                <div className="ml-auto">
                    {isDropdownOpen ? <FiChevronDown className="h-6 w-6 text-white" /> : <FiChevronRight className="h-6 w-6 text-white" />}
                </div>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <ul className="pl-8">
                    <li className="py-1 cursor-pointer relative pl-4 flex items-center hover:text-[#AAFFA9]">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoWalletOutline className="mb-2 h-6 w-6 mr-1" style={{ fill: "currentColor" }} />
                        <span className="ml-2">Wallet</span>
                    </li>
                    <li className="py-1 cursor-pointer relative pl-4 flex items-center hover:text-[#AAFFA9]">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoStatsChartOutline className="mb-2 h-6 w-6 mr-1" style={{ fill: "currentColor" }} />
                        <span className="ml-2">Statistics</span>
                    </li>
                    <li className="py-1 cursor-pointer relative pl-4 flex items-center hover:text-[#AAFFA9]">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <FaReceipt className="mb-2 h-6 w-6 mr-1" style={{ fill: "currentColor" }} />
                        <span className="ml-2">Transactions</span>
                    </li>
                    <li className="py-1 cursor-pointer relative pl-4 flex items-center hover:text-[#AAFFA9]">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <SiBitcoinsv className="mb-2 h-6 w-6 mr-1" style={{ fill: "currentColor" }} />
                        <span className="ml-2">My Bets</span>
                    </li>
                    <li className="py-1 cursor-pointer relative pl-4 flex items-center hover:text-[#AAFFA9]">
                        <span className="absolute left-0 w-1 h-full bg-gray-700"></span>
                        <IoSettingsOutline className="mb-2 h-6 w-6 mr-1" style={{ fill: "currentColor" }} />
                        <span className="ml-2">Settings</span>
                    </li>
                </ul>
            )}

            {/* Horizontal line below profile */}
            <hr className="border-t border-gray-700 mx-4 my-2 mt-3" />

            {/* Menu Options */}
            <ul className="py-2">
                <li className="px-2 py-1 flex flex-row cursor-pointer group text-white">
                    <TbAffiliate className="mb-2 h-6 w-6 text-white opacity-70 mr-1 group-hover:text-[#AAFFA9]" />
                    <span className="group-hover:text-[#AAFFA9]">Affiliate</span>
                </li>
                <li className="px-2 py-1 flex flex-row cursor-pointer group text-white">
                    <FaNoteSticky className="mb-2 h-6 w-6 text-white opacity-70 mr-1 group-hover:text-[#AAFFA9]" />
                    <span className="group-hover:text-[#AAFFA9]">Blog</span>
                </li>
                <li className="px-2 py-1 flex flex-row cursor-pointer group text-white">
                    <SiSpringsecurity className="mb-2 h-6 w-6 text-white opacity-70 mr-1 group-hover:text-[#AAFFA9]" />
                    <span className="group-hover:text-[#AAFFA9]">Responsible Gambling</span>
                </li>
                <li className="px-2 py-1 flex flex-row cursor-pointer group text-white">
                    <MdOutlineSupportAgent className="mb-2 h-6 w-6 text-white opacity-70 mr-1 group-hover:text-[#AAFFA9]" />
                    <span className="group-hover:text-[#AAFFA9]">Help & Support</span>
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
