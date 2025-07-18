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

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Drag start
  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  // Drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      moveTask(active.id, over.id); // over.id is column (status)
    }
    setActiveId(null);
  };

  const activeTask = tasks.find((t) => t.id === activeId);

  // Define board columns
  const columns = [
    { status: 'To Do', color: '#d1d5db' },        // Light Gray
    { status: 'In Progress', color: '#f59e0b' },  // Orange
    { status: 'Approved', color: '#84cc16' },     // Green
    { status: 'Reject', color: '#ef4444' }        // Red
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-x-auto p-4 flex gap-4">
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
  );
}
