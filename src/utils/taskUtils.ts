import type { FilterOptions, Task, TaskFormData } from "../types";

export function filterTasks(tasks: Task[], filters: FilterOptions) {
  return tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;

    const searchMatch = filters.search
      ? task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    return statusMatch && priorityMatch && searchMatch;
  });
}

export function sortTasks(tasks: Task[], sortBy?: FilterOptions["sortBy"]) {
  return [...tasks].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "dueDate") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }

    if (sortBy === "priority") {
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }

    return 0;
  });
}

export function validateTaskForm(formData : TaskFormData) {
  const errors: string[] =[];
  if(!formData.title.trim()) {
    errors.push("Title is required");
  }
  if(!formData.description.trim()) {
    errors.push("Description is required");
  }
  if(!formData.dueDate) {
    errors.push("Due date is required");
  }
  return errors;
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}