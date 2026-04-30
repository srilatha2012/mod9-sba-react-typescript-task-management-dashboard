# React + TypeScript + Vite

This is a simple Task Management Dashboard built using React and TypeScript
It allows users to add
 - Add tasks
 - Update task status
 - Delete tasks
 - Filter and sort tasks
 - Persist data using localStorage

 ## Setup Instructions
 1. clone the repository
    git clone https://github.com/srilatha2012/mod9-sba-react-typescript-task-management-dashboard.git
 2. install dependencies
     npm install
 3. Run the app
    npm run dev 
4. open in browser
   http://localhost:5173

### Dashboard
 - Main container component
 - Manages state('task', 'filters')
 - Handles add, update, delete logic

 ### TaskForm
props : 
onAddTask :(task: Task) => void

usage:
Used to add new tasks

### TaskFilter
props : 
filters: FilterOptions
setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>

usage:
Filters tasks by status, priority, and search

### TaskList
props:
tasks: Task[]
onStatusChange: (id: string, status: TaskStatus) => void
onDeleteTask: (id: string) => void

usage:
Displays all tasks
Handles status updates and deletion

### React Feature
`useState` for state management
`useEffect` for local storage persistence
component based architecture

## Typescript Features
Interfaces for type safety (`Task`, `FilterOptions`)
Typed props in components
Strong typing for state and functions




## Reflection Document
1. How you implemented React and TypeScript features
I used React hooks like `useState` and `useEffect` to manage state and side effects.
TypeScript helped ensure type safety by defining interfaces for tasks and props.

2. The challenges you encountered and how you overcame them
Handling optional filters correctly
Managing state updates without mutating data
Syncing localStorage with React state

sol: Used spread operator (`...`) and functional updates to keep state immutable
Also used `useEffect` to sync local storage

3. Your approach to component composition and state management
Broke the app into small reusable components (Form, List, Filter)
kept main state in Dashboard
Passed data and functions via props 

This made the app clean, reusable and easy to maintain

## Future imporvements
- Add drag & drop for task reordering
- Add dark and light mode
- Add animations 

## Conclustion
This project helped me understand
React component structure
Typescript integration
state management and data persistence