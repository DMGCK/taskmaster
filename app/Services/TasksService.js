import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"

class TasksService {
  
  newTask(taskData) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(taskData)]
    console.log('got to service unharmed, ',ProxyState.tasks); 
    
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const tasksService = new TasksService()