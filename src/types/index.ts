export type TaskStatus = "pending" | "in-progress" | "completed";
export type priority = "low" | "medium" | "high";
export interface Task {
    id: string,
    title: string,
    description : string,
    status: TaskStatus,
    priority: "low" | "medium" | "high",
    dueDate: string
    
}

export interface TaskFormData {
    title: string,
    description : string,
    status: TaskStatus,
    priority: priority,
    dueDate: string
}

export interface TaskFormDataProp {
    onAddTask : (task : Task) => void
}
export interface FilterOptions {
     status?: "pending" | "in-progress" | "completed",
     priority?: "low" | "medium" | "high",
     search?: string
}

export interface TaskListProps {
    tasks : Task[];
    onStatusChange : (taskId : string, newStatus :TaskStatus) => void;
    onDeleteTask : (taskId: string) => void;
}

export interface TaskItemProps {
    task : Task;
    onStatusChange : (taskId : string, newStatus :TaskStatus) => void;
    onDeleteTask : (taskId: string) => void;
}