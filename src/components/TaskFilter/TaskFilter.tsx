import type { TaskFilterProps, TaskStatus, TaskPriority } from "../../types";

export function TaskFilter({ filters, setFilters }: TaskFilterProps) {

    return (
        <div className="mb-4 flex gap-3">
            <input
                type="text"
                placeholder="Search tasks"
                value={filters.search || ""}
                onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                }
                className="rounded border p-2"
            />
            <select
                value={filters.status || ""}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        status: e.target.value as TaskStatus
                    })
                }
                className="rounded border p-2"
            >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <select
                value={filters.priority || ""}
                onChange={(e) => {
                    const value = e.target.value;
                    setFilters({
                        ...filters,
                        priority: value === "" ? undefined : (value as TaskPriority)

                    })
                }
                }
                className="rounded border p-2"
            >
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

        </div>
    )



}