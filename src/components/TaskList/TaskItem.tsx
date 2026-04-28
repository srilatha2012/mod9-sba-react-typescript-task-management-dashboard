import type { TaskItemProps } from "../../types";

export function TaskItem({ task }: TaskItemProps) {

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold text-gray-800">{task.title}</h2>
            <p className="mt-2 text-gray-600">{task.description}</p>
            <div className="mt-4 space-y-1 text-sm">
                <p><span className="font-semibold"> {task.status}</span></p>
                <p><span className="font-semibold">{task.priority}</span></p>
                <p><span className="font-semibold">{task.dueDate}</span></p>
            </div>
        </div>

    )

}