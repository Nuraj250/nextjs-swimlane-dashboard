import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),

  moveTask: (taskId, newStatus) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      return { tasks: updatedTasks };
    }),
}));
