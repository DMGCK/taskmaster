import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { List } from "../Models/List.js";

export function saveItem() {
  console.log('saving'); 
  
  let data = {
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }
  window.localStorage.setItem('todo',JSON.stringify(data));
}

export function loadItem() {
  
  let localData = JSON.parse(window.localStorage.getItem('todo'));
  if (localData) {
    console.log('loading'); 
    
    ProxyState.tasks = localData.tasks.map(t => new Task(t))
    ProxyState.lists = localData.lists.map(l => new List(l))
  }
  else {
    console.log('load not successful bc not written yet');
  }
}