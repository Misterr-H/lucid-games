import React from 'react';

interface SidebarProps {
    userName: string; // Assuming userName is passed as props
}

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white w-64 flex flex-col mr-2">
            {/* Company Name */}
            <div className="p-2 text-center">
                <h1 className="text-2xl font-bold mt-4">Strive</h1> {/* Added mt-4 for top margin */}
            </div>

            {/* Horizontal line above profile */}
            <hr className="border-t border-gray-700" />

            {/* Profile Section */}
            <div className="p-2 flex items-center">
                {/* Profile Photo */}
                <div className="h-10 w-10 rounded-full bg-gray-300 mr-2"></div>
                {/* Hello message */}
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">Hello</p>
                    <h2 className="text-lg font-semibold">User Name</h2>
                    {/* Your Role */}
                </div>
            </div>

            {/* Horizontal line below profile */}
            <hr className="border-t border-gray-700" />

            {/* Menu Options */}
            <ul className="py-2">
                <li className="px-2 py-1 cursor-pointer hover:bg-gray-800 text-white">
                    Affiliate
                </li>
                <li className="px-2 py-1 cursor-pointer hover:bg-gray-800 text-white">
                    Blog
                </li>
                <li className="px-2 py-1 cursor-pointer hover:bg-gray-800 text-white">
                    Responsible Gambling
                </li>
                <li className="px-2 py-1 cursor-pointer hover:bg-gray-800 text-white">
                    Help & Support
                </li>
            </ul>

            {/* Horizontal line below Help & Support */}
            <hr className="border-t border-gray-700" />

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