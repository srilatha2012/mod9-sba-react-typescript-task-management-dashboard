import { useState } from "react";
import type { Task, FilterOptions } from "../../types"
import { TaskList } from "../TaskList/TaskList";


export function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "1",
            title: "Learn React",
            description: "learn about hooks",
            status: "pending",
            priority: "low",
            dueDate: "2026-10-15"
        },
        {
            id: "2",
            title: "Learn spring boot",
            description: "authentication",
            status: "in-progress",
            priority: "medium",
            dueDate: "2026-10-15"
        }


    ])
    const [filters, setFilters] = useState<FilterOptions>({})
    return (
        <div>
            <h1>Task Management Dashboard</h1>
            <TaskList tasks ={tasks}/>
        </div>
    )
}
