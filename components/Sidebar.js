import {
    FiGrid,
    FiFolder,
    FiMessageSquare,
    FiCalendar,
    FiUsers,
    FiInfo,
    FiLogOut,
    FiChevronDown,
} from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState(true);

    return (
        <div className="sidebar-container">
            <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0">
                <div>
                    {/* Workspace Box */}
                    <div className="px-4 py-4 border-b border-gray-200">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <Image
                                    src="/placeholder.png"
                                    alt="workspace"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-400">workspace</p>
                                <p className="text-sm font-medium text-gray-700">Root folder</p>
                            </div>
                            <FiChevronDown className="text-gray-500" />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <nav className="mt-4 text-sm text-gray-700">
                        <ul className="space-y-1">
                            <li className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 cursor-pointer">
                                <FiGrid className="text-xl" />
                                Dashboard
                            </li>

                            {/* Dropdown */}
                            <li>
                                <div
                                    onClick={() => setOpenDropdown(!openDropdown)}
                                    className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 cursor-pointer justify-between"
                                >
                                    <span className="flex items-center gap-3">
                                        <FiFolder className="text-xl" />
                                        Dropdown
                                    </span>
                                    <FiChevronDown
                                        className={`transition-transform duration-200 ${openDropdown ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {openDropdown && (
                                    <ul className="ml-14 text-sm text-gray-500 space-y-1">
                                        <li className="cursor-pointer hover:text-gray-700">
                                            Create routes
                                        </li>
                                        <li className="cursor-pointer hover:text-gray-700">
                                            Delepment React App
                                        </li>
                                        <li className="text-blue-600 font-medium">
                                            Sport Xi Project
                                        </li>
                                        <li className="cursor-pointer hover:text-gray-700">
                                            Wordpress theme
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li className="relative flex items-center px-6 py-3 gap-3 hover:bg-gray-100 cursor-pointer">
                                <FiMessageSquare className="text-xl" />
                                Messages
                                <span className="absolute right-6 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                                    3
                                </span>
                            </li>

                            <li className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 cursor-pointer">
                                <FiCalendar className="text-xl" />
                                Calendar
                            </li>

                            <li className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 cursor-pointer">
                                <FiUsers className="text-xl" />
                                Team members
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Footer */}
                <div className="mb-4 space-y-1">
                    <div className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer text-gray-600">
                        <FiInfo className="text-lg" />
                        Support
                    </div>
                    <div className="mx-4 mt-1 px-4 py-3 flex items-center gap-3 text-white bg-gray-800 hover:bg-gray-700 cursor-pointer rounded-xl">
                        <FiLogOut className="text-lg" />
                        Logout
                    </div>
                </div>
            </aside>
        </div>
    );
}
