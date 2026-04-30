import { useState } from "react";
import type { Task, TaskFormData, TaskFormDataProp } from "../../types";
import { validateTaskForm } from "../../utils/taskUtils";

export function TaskForm({ onAddTask }: TaskFormDataProp) {

    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
        description: "",
        status: "pending",
        priority: "low",
        dueDate: ""
    });
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const errors = validateTaskForm(formData);
        if (errors.length > 0) {
            console.log(errors);
            return;
        }


        const newTask: Task = {
            id: crypto.randomUUID(),
            ...formData,
        }
        onAddTask(newTask);
        setFormData(
            {
                title: "",
                description: "",
                status: "pending",
                priority: "low",
                dueDate: ""
            }
        )
    }
    return (
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Add New Task</h2>
            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />
            <br />
            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
            />
            <br />
            <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.status}
                onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value as Task["status"] })
                }
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <br />
            <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.priority}
                onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value as Task["priority"] })
                }
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <br />
            <input
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                placeholder="dueDate"
                value={formData.dueDate}
                onChange={(e) =>
                    setFormData({ ...formData, dueDate: e.target.value })
                }
            />
            <br />
            <button 
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              type="submit">
                Add Task
            </button>
        </form>
    )
}