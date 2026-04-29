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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="title"
                value={formData.title}
                onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                }
            />
            <br />
            <input
                type="text"
                placeholder="description"
                value={formData.description}
                onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                }
            />
            <br />
            <select
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
                type="text"
                placeholder="dueDate"
                value={formData.dueDate}
                onChange={(e) =>
                    setFormData({ ...formData, dueDate: e.target.value })
                }
            />
            <br />
            <button type="submit">Add Task</button>
        </form>
    )
}