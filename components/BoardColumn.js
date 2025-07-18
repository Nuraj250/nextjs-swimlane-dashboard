// components/TaskCard.js
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export default function TaskCard({ task }) {
      if (!task) return null; // Prevents crash when task is undefined

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="bg-white rounded-xl shadow p-4 space-y-3 border hover:shadow-md transition cursor-move"
    >
      <div className="flex items-center space-x-2 text-xs">
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-gray-500 font-medium">{task.tag || 'Design'}</span>
      </div>

      <h3 className="font-semibold text-sm text-gray-800">{task.title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {(task.avatars || []).map((url, i) => (
            <img
              key={i}
              src={url}
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
          ))}
        </div>
        <button className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg">
          Manage
        </button>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
        <span>{task.attachments || 0} Files</span>
        <span className="text-red-500 font-semibold">{task.reports || '2 Reports'}</span>
      </div>
    </div>
  );
}
