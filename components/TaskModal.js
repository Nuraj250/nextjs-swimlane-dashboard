import React from 'react';

export default function TaskModal({ task, onClose }) {
  if (!task) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{task.title}</h2>
        <p>Status: <strong>{task.status}</strong></p>
        <div className="modal-section">
          <p>Attachments: {task.attachments}</p>
          <p>Reports: {task.reports}</p>
        </div>
        <div className="modal-section">
          <h4>Avatars:</h4>
          <div className="modal-avatars">
            {task.avatars?.map((url, i) => (
              <img key={i} src={url} alt="" className="avatar-large"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
