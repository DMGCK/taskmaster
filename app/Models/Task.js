import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(dataObj) {
    this.id = dataObj.id || generateId(),
    // NOTE might need parent ID here
    this.parentId = dataObj.parentId
    this.body = dataObj.body
  }

  get Template() {
    return /*html */`
    <p><span><input type="checkbox"></span> ${this.body} 
    <span><button onclick="app.tasksController.deleteTask('${this.id}')" class="border border-0 hover rounded">
    <span class="mdi mdi-delete "></span>
  </button> </span></p>
    `
  }
}

// for each task 
  // find parent id
    // draw func in correct place
