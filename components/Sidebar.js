import { useState } from 'react'
import { ChevronDown, ChevronRight, LogOut, MessageCircle, Calendar, Users, Info, Folder, LayoutDashboard } from 'lucide-react'
import clsx from 'clsx'

const Sidebar = () => {
  const [boardsOpen, setBoardsOpen] = useState(true)

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6 flex flex-col justify-between">
      <div>
        {/* Workspace Dropdown */}
        <div className="border rounded-xl p-4 mb-6">
          <div className="text-xs text-gray-400">workspace</div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">Root folder</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-4 text-gray-600">
          <div className="flex items-center gap-2 font-medium">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          {/* Boards Dropdown */}
          <div>
            <button
              onClick={() => setBoardsOpen(!boardsOpen)}
              className="flex items-center gap-2 font-medium text-blue-600 w-full"
            >
              <Folder size={18} />
              <span>Boards</span>
              {boardsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {boardsOpen && (
              <div className="mt-2 ml-6 flex flex-col gap-2 text-sm">
                <span className="text-gray-400">› Create routes</span>
                <span className="text-gray-400">› Delepment React App</span>
                <span className="text-blue-600 font-semibold">› Sport Xi Project</span>
                <span className="text-gray-400">› Wordpress theme</span>
              </div>
            )}
          </div>

          {/* Other Links */}
          <div className="flex items-center gap-2">
            <MessageCircle size={18} />
            <span className="flex justify-between w-full">
              Messages
              <span className="bg-orange-500 text-white rounded-full px-2 text-xs">3</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>Calendar</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>Team members</span>
          </div>
        </nav>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Support */}
        <div className="flex items-center gap-2 mt-6 text-gray-500">
          <Info size={18} />
          <span>Support</span>
        </div>
      </div>

      {/* Logout Button */}
      <button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white w-full py-3 rounded-xl flex items-center justify-center gap-2">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
