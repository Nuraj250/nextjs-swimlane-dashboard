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

  useEffect(() => {
    if (typeof window === 'undefined') return; // ✅ Ensure we're in the browser

    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      fetch('/data/tasks.json')
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage)

  }, [tasks]);

  const columns = ['To Do', 'In Progress', 'Approved', 'Reject'];

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      moveTask(active.id, over.id); // Over.id = status column ID
    }
    setActiveId(null);
  };

  const activeTask = tasks.find((t) => t.id === activeId);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* ✅ Sidebar */}
        <Sidebar />

        {/* ✅ Board Area */}
        <main className="flex-1 overflow-x-auto p-4 flex gap-4">
          <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {columns.map((column) => (
              <BoardColumn
                key={column}
                status={column}
                tasks={tasks.filter((task) => task.status === column)}
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
