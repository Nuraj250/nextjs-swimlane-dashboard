import React, { useEffect, useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useTaskStore } from '../store/TaskStore';
import BoardColumn from '../components/BoardColumn';
import TaskCard from '../components/TaskCard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TaskModal from '../components/TaskModal';

export default function Home() {
  const [search, setSearch] = useState('');
  const { tasks, setTasks, moveTask } = useTaskStore();
  const [activeId, setActiveId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
);
  // Load tasks from localStorage or fetch from JSON
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem('tasks');
    if (saved && JSON.parse(saved).length > 0) {
      setTasks(JSON.parse(saved));

    } else {
      fetch('/data/tasks.json')
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched JSON:", data);
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
      <Header search={search} setSearch={setSearch} />

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
              <br></br>

            </div>
            <p className="project-subtitle text-gray-500 mb-2px">event production</p>
            <div className="project-meta flex items-center justify-between flex-wrap gap-4">
              <div className="assigned flex items-center gap-2">
                <p className="label font-medium">Assigned</p>
                <div className="avatars flex items-center">
                  <img src="https://i.pravatar.cc/40?img=1" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <img src="https://i.pravatar.cc/40?img=2" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <img src="https://i.pravatar.cc/40?img=3" alt="Avatar" className="w-8 h-8 rounded-full -ml-2" />
                  <div className="avatar-more bg-gray-200 text-sm w-8 h-8 rounded-full flex items-center justify-center -ml-2">+2</div>
                </div>
                <button className="manage-btn ml-4 bg-background border rounded-full px-4 py-1 flex items-center gap-1 shadow-sm hover:shadow-md transition">
                  Manage <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.34842 12.2652L1.83152 10.0913C1.94154 9.59623 2.19045 9.14279 2.54907 8.78417L9.11435 2.21889C10.1558 1.17749 11.8442 1.17748 12.8856 2.21888L13.781 3.11431C14.8224 4.15571 14.8224 5.84415 13.781 6.88555L7.21573 13.4508C6.85712 13.8095 6.40368 14.0584 5.9086 14.1684L3.73466 14.6515C2.30566 14.969 1.03087 13.6942 1.34842 12.2652ZM3.1331 10.3805L2.65 12.5545C2.54415 13.0308 2.96908 13.4558 3.44542 13.3499L5.61936 12.8668C5.85742 12.8139 6.07623 12.6968 6.25213 12.5284L3.47153 9.74777C3.30314 9.92367 3.18601 10.1425 3.1331 10.3805ZM4.41412 8.80474L7.19517 11.5858L10.919 7.86193L8.13798 5.08088L4.41412 8.80474ZM12.8382 5.94274L11.8618 6.91912L9.08078 4.13807L10.0572 3.16169C10.5779 2.64099 11.4221 2.64099 11.9428 3.16169L12.8382 4.05712C13.3589 4.57782 13.3589 5.42204 12.8382 5.94274Z" fill="#B1B5C4" />
                  </svg>

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
                  tasks={filteredTasks.filter((task) => task.status === col.status)}
                  onTaskClick={(task) => setSelectedTask(task)}
                />
              ))}
              <DragOverlay>
                {activeTask ? <TaskCard task={activeTask} /> : null}
              </DragOverlay>
            </DndContext>
                      {selectedTask && (
            <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
          )}
          </main>
        </div>
      </div>
    </div>
  );
}
