import React, { useEffect, useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useTaskStore } from '../store/TaskStore';
import BoardColumn from '../components/BoardColumn';
import TaskCard from '../components/TaskCard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const { tasks, setTasks, moveTask } = useTaskStore();
  const [activeId, setActiveId] = useState(null);

  // Load tasks from localStorage or fetch from JSON
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      fetch('/data/tasks.json')
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
          localStorage.setItem('tasks', JSON.stringify(data));
        })
        .catch((err) => console.error('Failed to load tasks:', err));
    }
  }, [setTasks]);

  // Save tasks to localStorage when changed
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      moveTask(active.id, over.id);
    }
    setActiveId(null);
  };

  const activeTask = tasks.find((t) => t.id === activeId);

  const columns = [
    { status: 'To Do', color: '#d1d5db' },
    { status: 'In Progress', color: '#f59e0b' },
    { status: 'Approved', color: '#84cc16' },
    { status: 'Reject', color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Grid Layout */}
        <div className="grid grid-rows-[auto_1fr] flex-1 overflow-hidden">
          {/* Top Project Header */}
          <section className="project-header bg-white p-6 border-b">
            <div className="project-top mb-4">
              <h1 className="project-title text-2xl font-bold">
                Sport Xi Project <span className="status-badge in-progress">In progress</span>
              </h1>
              <p className="project-subtitle text-gray-500">event production</p>
            </div>

            <div className="project-meta flex items-center justify-between flex-wrap gap-4">
              <div className="assigned flex items-center gap-2">
                <p className="label font-medium">Assigned</p>
                <div className="avatars flex items-center">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <div className="avatar-more bg-gray-200 text-sm w-8 h-8 rounded-full flex items-center justify-center -ml-2">+2</div>
                </div>
                <button className="manage-btn ml-4 bg-white border rounded-full px-4 py-1 flex items-center gap-1 shadow-sm hover:shadow-md transition">
                  Manage <i className="icon-link" />
                </button>
              </div>

              <p className="last-updated text-sm text-gray-500">
                Last updated on: <strong>04 April, 2022</strong>
              </p>
            </div>
          </section>

          {/* Main Board Section */}
          <main className="main-section flex-1 overflow-x-auto p-4 flex gap-4 bg-white">
            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
              {columns.map((col) => (
                <BoardColumn
                  key={col.status}
                  status={col.status}
                  color={col.color}
                  tasks={tasks.filter((task) => task.status === col.status)}
                />
              ))}
              <DragOverlay>
                {activeTask ? <TaskCard task={activeTask} /> : null}
              </DragOverlay>
            </DndContext>
          </main>
        </div>
      </div>
    </div>
  );
}
