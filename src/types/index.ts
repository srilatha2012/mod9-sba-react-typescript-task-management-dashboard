export interface Task {
    id: string,
    title: string,
    description : string,
    status: "pending" | "in-progress" | "completed",
    priority: "low" | "medium" | "high",
    dueDate: string
    
}

export interface TaskFormData {
    title: string,
    description : string,
    status: "pending" | "in-progress" | "completed",
    priority: "low" | "medium" | "high",
    dueDate: string
}
export interface FilterOptions {
     status?: "pending" | "in-progress" | "completed",
     priority?: "low" | "medium" | "high",
     search?: string
}

export interface TaskListProps {
    tasks : Task[]
}

export interface TaskItemProps {
    task : Task
}