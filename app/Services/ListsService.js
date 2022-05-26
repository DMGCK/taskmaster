import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  constructor() {

  }

  newList(listData) {
    console.log('found the data service', listData); 
    
    ProxyState.lists = [...ProxyState.lists, new List(listData)]

    console.log(ProxyState.lists, listData)
  }

  deleteList(id) {
    console.log('service unharmed'); 
    ProxyState.lists = ProxyState.lists.filter(a => a.id != id)
  }
}

export const listsService = new ListsService()