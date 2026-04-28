import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDeleteTask }: TaskItemProps) {

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
            <p className="mt-2 text-gray-600">{task.description}</p>
            <div className="mt-4 space-y-1 text-sm">
                <p><span className="font-semibold"> {task.status}</span></p>
                <p><span className="font-semibold">{task.priority}</span></p>
                <p><span className="font-semibold">{task.dueDate}</span></p>
                <select
                    value={task.status}
                    onChange={(e) =>
                        onStatusChange(task.id, e.target.value as TaskStatus)
                    }
                    className="mt-2 rounde"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    onClick={() => onDeleteTask(task.id)
                    }
                    className="mt-3 rounded bg-red-500 px-3 py-1 text-white"
                >
                Delete
                </button>
            </div>
        </div>

    )

}