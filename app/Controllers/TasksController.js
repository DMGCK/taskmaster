import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

// function _drawTasks() {
//   console.log('attempting draw tasks'); 
//   let tasks = ProxyState.tasks
  
// }

export class TasksController {
  constructor() {
    console.log('tControl startup'); 
    // _drawTasks()
  }

  newTask(id) {
    window.event.preventDefault()
    let form = window.event.target
    console.log('ITS ALIVE',form.body.value, id); 

    let taskData = {
      body: form.body.value,
      parentId: id,
    }
    
    tasksService.newTask(taskData)
    form.reset()
  }

  async deleteTask(id) {
    if ( await Pop.confirm('are you sure you want to delete this?')) {

      tasksService.deleteTask(id)
      console.log('delete from control', id); 
      Pop.toast('GOODBYE TASK')
    }
  }
}