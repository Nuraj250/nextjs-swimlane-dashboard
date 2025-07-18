import { create } from 'zustand';
import tasks from '../data/tasks.json';

export const useTaskStore = create((set) => ({
  tasks: tasks,
  setTasks: (updatedTasks) => set({ tasks: updatedTasks }),
  moveTask: (taskId, newStatus) => set((state) => {
    const updated = state.tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    return { tasks: updated };
  })
}));
