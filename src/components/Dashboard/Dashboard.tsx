import { useState } from "react";
import type { Task, FilterOptions } from "../../types"


export function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [filters, setFilters] = useState<FilterOptions>({})
    return (
        <div>
            <h1>Task Management Dashboard</h1>
        </div>
    )
}
