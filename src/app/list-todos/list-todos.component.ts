import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    //create  object of todo class
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo[]

  message : string
  // todos = [
  //   new Todo(1,'learn to dances', false, new Date()),
  //   new Todo(2,'Become an Expert', false, new Date()),
  //   new Todo(3, 'visit india', false, new Date())
  //   // { id: 1, description: 'learn to dances' },
  //   // { id: 2, description: 'Become an Expert' },
  //   // { id: 3, description: 'visit india' }
  // ]
  // todo = {
  //   id: 1,
  //   description: 'learn to dance'
  // }
  constructor(
    private todoservice:TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
    //passin username
    this.refreshTodos();
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`)
    //subscribe can delete it
    this.todoservice.deleteTodo('xiaoxin', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful`;
        this.refreshTodos();
      }
    )
  }

  refreshTodos() {
    this.todoservice.retrieveAllTodos('xiaoxin').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }



}
