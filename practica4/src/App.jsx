import { useState } from "react"
import TaskList from "./taskList/TaskList"
import AddTaskForm from "./addTaskForm/AddTaskForm"


function App() {
const [tasks, setTasks] = useState([])
  return (
    
      <div>
        <h1>Lista de Tareas</h1>
        <TaskList tasks={tasks} setTasks={setTasks} />
        <AddTaskForm setTasks={setTasks} />

      
      </div>
      
    
  )
}

export default App
