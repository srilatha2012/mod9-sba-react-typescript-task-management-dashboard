import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

export function TaskList({ tasks }: TaskListProps) {

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    )
}