import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from '../../../../new/newTodo/src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private newId: number = 0;

  private todoArray: ToDo[] = [];  

  private TodoList = new Subject<ToDo[]>();
  $observableTodoList = this.TodoList.asObservable(); 

  private newTodoList = new Subject<ToDo[]>();
  $newTodoList = this.newTodoList.asObservable();

  constructor() { }

  addTitle(titleFromaAddTodosComponent:string){
    this.todoArray.push({
      id: ++this.newId,
      title: titleFromaAddTodosComponent, 
      completed: false,
    });
    this.TodoList.next(this.todoArray); 
  }
  DeleteItem(id: number): void {
    this.todoArray.forEach((todo, i)=>{
      if(todo.id === id){
        this.todoArray.splice(i,1);
      }
    });
    console.log('delId:', id );
  }  
  //sorting
  sortItem(){
    this.todoArray.sort(function(a, b){
      var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0 //default return value (no sorting)
    });
  } 
}


