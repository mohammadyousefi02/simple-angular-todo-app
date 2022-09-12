import { Component, OnInit } from '@angular/core';

import { v4 as uuid} from "uuid"

import { Todo } from "../test"

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  value:string = ""
  todos:Todo[] = []
  selectedTodoId:string = ""

  addTodo(){
    this.todos.push(
      {id:uuid(), title:this.value}
    )
    this.value = ""
  }

  deleteTodo(id:string){
    this.todos = this.todos.filter(t => t.id !== id)
  }

  editTodo(todo:Todo){
    this.value = todo.title
    this.selectedTodoId = todo.id
  }

  updateTodo(){
    const index = this.todos.findIndex(t=>t.id === this.selectedTodoId)
    this.todos[index].title = this.value
    this.selectedTodoId = ""
    this.value = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
