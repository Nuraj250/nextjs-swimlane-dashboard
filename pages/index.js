import React, { useEffect } from 'react';
import { useTaskStore } from '../store/useTaskStore';
import Header from '../components/Header';

export default function Home() {
  const { tasks, setTasks } = useTaskStore();

  // Load data from localStorage or mock JSON
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      fetch('/data/tasks.json')
        .then(res => res.json())
        .then(data => setTasks(data));
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const columns = ['To Do', 'In Progress', 'Approved', 'Reject'];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column}>
            <h2 className="font-bold text-lg mb-2">{column}</h2>
            <div className="space-y-2">
              {tasks
                .filter(task => task.status === column)
                .map(task => (
                  <div
                    key={task.id}
                    className="bg-white rounded-lg shadow p-4"
                  >
                    <h3 className="font-semibold">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
