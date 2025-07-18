import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Plus, MoreHorizontal } from 'lucide-react';
import TaskCard from './TaskCard';

export default function BoardColumn({ status, color, tasks }) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className={`board-column ${isOver ? 'board-column--over' : ''}`}
    >
      <div className="board-column__header">
        <span
          className="board-column__badge"
          style={{ backgroundColor: color }}
        >
          {status}
        </span>
        <div className="board-column__controls">
          <Plus size={16} className="board-column__icon" />
          <MoreHorizontal size={16} className="board-column__icon" />
        </div>
      </div>

      <div className="board-column__list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
