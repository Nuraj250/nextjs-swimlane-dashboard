import { Pencil } from 'lucide-react'

const TaskCard = () => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm space-y-3">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <h2 className="font-semibold text-gray-800">Sport Xi Project</h2>
        <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-md">In progress</span>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500">event production</p>

      {/* Assigned section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500 mr-2">assigned</span>

          {/* Avatars */}
          <div className="flex -space-x-2">
            <img src="/avatar1.png" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src="/avatar2.png" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
            <img src="/avatar3.png" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
            <div className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center border-2 border-white">
              +2
            </div>
          </div>
        </div>

        {/* Manage Button */}
        <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
          Manage
          <Pencil size={14} />
        </button>
      </div>

      {/* Last Updated */}
      <p className="text-xs text-gray-400 pt-2 border-t">Last updated on: 04 April, 2022</p>
    </div>
  )
}

export default TaskCard