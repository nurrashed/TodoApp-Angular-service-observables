import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.scss']
})
export class AddtodosComponent implements OnInit {

  /* newId: number = 3; */
  newTodo: string = '';
  /* completed: boolean = false; */ 

  constructor(private serviceTodo: TodoService) { }

  ngOnInit(): void {
  }

  updateText(newTitle:string){
    this.newTodo = newTitle;    
  }

  addTask(){
    this.serviceTodo.addTitle(this.newTodo);
    this.newTodo = '';
  }

}
