import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Paperclip, MessageCircle, AlertCircle, CalendarDays } from 'lucide-react';

export default function TaskCard({ task, onClick }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    transition,
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="task-card"
        style={style}
      >
        <div className="task-card__top">
          <span className={`task-card__tag ${task.tagColor || 'default'}`}>{task.tag}</span>
          <button className="task-card__options">•••</button>
        </div>

        <h4 className="task-card__title">{task.title}</h4>

        <div className="task-card__meta">
          <div className="task-card__avatars">
            {task.avatars?.map((url, index) => (
              <img key={index} src={url} alt="avatar" className="task-card__avatar" />
            ))}
          </div>
          {task.priority && <span className={`task-card__priority ${task.priority.toLowerCase()}`}>{task.priority}</span>}
        </div>

        <div className="task-card__footer">
          {task.attachments !== undefined && (
            <span className="task-card__icon">
              <Paperclip size={14} /> {task.attachments}
            </span>
          )}
          {task.comments !== undefined && (
            <span className="task-card__icon">
              <MessageCircle size={14} /> {task.comments}
            </span>
          )}
          {task.reports && (
            <span className="task-card__reports">
              <AlertCircle size={14} className="text-red-500" /> {task.reports}
            </span>
          )}
          {task.due && (
            <span className="task-card__due">
              <CalendarDays size={14} /> Due: {task.due}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
