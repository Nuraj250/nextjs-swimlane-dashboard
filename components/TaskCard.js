import { FaBolt, FaPaperclip, FaComments } from 'react-icons/fa';

export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-3 border hover:shadow-md transition">
      {/* Tag */}
      <div className="flex items-center space-x-2 text-xs">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-gray-500 font-medium">{task.category}</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm text-gray-800">{task.title}</h3>

      {/* Avatars + Manage */}
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {task.assigned?.slice(0, 3).map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              className="w-6 h-6 rounded-full border-2 border-white"
              alt=""
            />
          ))}
          {task.assigned?.length > 3 && (
            <div className="w-6 h-6 bg-gray-200 text-xs flex items-center justify-center rounded-full border-2 border-white">
              +{task.assigned.length - 3}
            </div>
          )}
        </div>
        <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg flex items-center space-x-1">
          <span>Manage</span>
          <FaPaperclip className="w-3 h-3" />
        </button>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1">
            <FaPaperclip className="w-3 h-3" />
            <span>{task.attachments}</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaComments className="w-3 h-3" />
            <span>{task.comments}</span>
          </span>
        </div>
        {task.reports > 0 && (
          <span className="text-red-500 font-semibold">{task.reports} Reports</span>
        )}
      </div>
    </div>
  );
}
