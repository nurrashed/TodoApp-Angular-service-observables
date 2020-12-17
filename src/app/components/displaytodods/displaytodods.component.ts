import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ToDo } from '../../../../../new/newTodo/src/app/models/todo';

@Component({
  selector: 'app-displaytodods',
  templateUrl: './displaytodods.component.html',
  styleUrls: ['./displaytodods.component.scss']
})
export class DisplaytododsComponent implements OnInit {

  TodoList: ToDo[] = [];

  newTodo: ToDo[] =[];

  constructor(public serviceTodo:TodoService) { }

  ngOnInit(): void {
    this.serviceTodo.$observableTodoList.subscribe((list)=>{
      this.TodoList = list;
    }) 
    this.serviceTodo.$newTodoList.subscribe(newList=>{
      this.newTodo = newList;
    })
  }

  onDelete(delId:number){
    this.serviceTodo.DeleteItem(delId)
    console.log(this.TodoList);
  }
  
  checkBox(task:ToDo):void{
    task.completed = !task.completed;
  }


  //Sorting
  sorting(){
    this.serviceTodo.sortItem();
  } 
  
  

  
}
