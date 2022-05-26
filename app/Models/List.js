import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"



export class List {
  constructor(dataObj) {
    this.id = dataObj.id || generateId(),
    this.title = dataObj.title,
    this.color = dataObj.color
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.parentId == this.id)
    let template = ''
    tasks.forEach(t => template += t.Template)
    return template
    
  }


  get Template() {
    return /*html */`
    <div class="col-md-4 col-6">
    <div class=" border shadow border-2 border-secondary m-1 p-3">
       <div style='background-color: ${this.color}' class="text-center rounded text-light p-3">
         <div onclick="app.listsController.deleteList('${this.id}')" class="rounded bg-dark p-2">
         ${this.title}
         </div>
       </div>
     <div id="${this.id}" class="my-2 p-2">

     ${this.Tasks}

     </div>
     <div>
       <form onsubmit="app.tasksController.newTask('${this.id}')">
        <input type="text" class="border border-0 bg-light" placeholder="New Task" name="body" id="body">
        <button class="border border-0 hover rounded">
          <span class="mdi mdi-plus "></span>
        </button>
      </form>
     </div>
   </div>
 </div>
 
    `
  }
}