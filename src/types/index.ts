export type TaskStatus = "pending" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";
export type SortOption = "title" | "priority" | "dueDate";
export interface Task {
    id: string,
    title: string,
    description : string,
    status: TaskStatus,
    priority: TaskPriority,
    dueDate: string
    
}

export interface TaskFormData {
    title: string,
    description : string,
    status: TaskStatus,
    priority: TaskPriority,
    dueDate: string
}

export interface TaskFormDataProp {
    onAddTask : (task : Task) => void
}
export interface FilterOptions {
     status?: TaskStatus,
     priority?: TaskPriority,
     search?: string,
     sortBy?: SortOption
}

export interface TaskFilterProps {
    filters: FilterOptions;
    setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
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

