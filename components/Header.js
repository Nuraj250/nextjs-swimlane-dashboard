import { Bell, Plus, Search, Settings2, SlidersHorizontal } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full px-6 py-4 border-b flex items-center justify-between bg-white">
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 p-1.5 rounded-full">
          <img src="/logo.svg" alt="Logo" className="w-4 h-4" />
        </div>
        <h1 className="font-semibold text-gray-800">
          Board <span className="text-blue-600">App</span>
        </h1>
      </div>

      {/* Right - Controls */}
      <div className="flex items-center gap-4">
        {/* Create new board */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium">
          Create new board
          <Plus size={16} />
        </button>

        {/* Search input */}
        <div className="bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks ..."
            className="bg-transparent outline-none text-sm text-gray-700"
          />
        </div>

        {/* Icons */}
        <SlidersHorizontal className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
        <div className="relative">
          <Bell className="text-gray-400 hover:text-gray-600 cursor-pointer" size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-orange-500 rounded-full"></span>
        </div>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <img src="/profile-icon.svg" alt="User" className="w-4 h-4" />
        </div>
      </div>
    </header>
  )
}

export default Header