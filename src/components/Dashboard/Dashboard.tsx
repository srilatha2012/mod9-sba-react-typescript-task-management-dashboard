import { useState } from "react";
import type { Task, FilterOptions, TaskStatus } from "../../types"
import { TaskList } from "../TaskList/TaskList";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskFilter } from "../TaskFilter/TaskFilter";


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

    function handleStatusChange(taskId : string, newStatus : TaskStatus) {
          setTasks((prevTasks) => 
            prevTasks.map((task) => 
            task.id === taskId
            ? {...task, status:newStatus}
            :task
        )
        )
    }

    function handleDeleteTask (taskId: string) {
       setTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !==taskId )
       );
    }

    function handleAddTask(newTask : Task) {
        setTasks((prevTasks) => [ ...prevTasks, newTask])
        
    }

    const filteredTasks = tasks.filter((task) =>
        filters.status ? task.status === filters.status :true
        )
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Task Management Dashboard</h1>
            <TaskForm
              onAddTask = {handleAddTask}
            />
             <TaskFilter
              filters={filters}
              setFilters={setFilters}
            />
            <TaskList 
               tasks ={filteredTasks} 
               onStatusChange={handleStatusChange}
               onDeleteTask ={handleDeleteTask}
            />
           
            </div>
        </div>
    )
}
