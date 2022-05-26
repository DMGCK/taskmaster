import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { listsService } from "../Services/listsService.js";
import { loadItem, saveItem } from "../Utils/localStorage.js";
import { Pop } from "../Utils/Pop.js";


function _drawLists() {
  console.log('drawing lists', ProxyState.lists); 
  let template= ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

export class ListsController {
  constructor() {
    console.log('L startup'); 
    ProxyState.on('lists', _drawLists)
    ProxyState.on('tasks', _drawLists)
    ProxyState.on('lists', saveItem)
    ProxyState.on('tasks', saveItem)
    loadItem()
    _drawLists()
    
  }

  newList() {
    window.event.preventDefault()
    let form = window.event.target

    console.log(form.color.value); 

    let listData = {
      title: form.title.value,
      color: form.color.value,
    }

    listsService.newList(listData)
    form.reset()
  }

  async deleteList(id) {
    if ( await Pop.confirm('are you sure you want to delete this?')) {

      listsService.deleteList(id)
      console.log('delete from control', id); 
      Pop.toast('GOODBYE LIST')
    }
  }
}


// controller 
  // func
    // for every class, that class draws class.tasks 

    // for each class, filter tasks
      // draw tasks