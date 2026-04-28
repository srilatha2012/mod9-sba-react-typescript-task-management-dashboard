import type { TaskItemProps } from "../../types";

export function TaskItem({task}:TaskItemProps) {

    return (
       <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.priority}</p>
          <p>{task.dueDate}</p>
       </div>

    )

}