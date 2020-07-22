import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // Remove the todo item from UI
    this.todos = this.todos.filter(item => item.id !== todo.id);

    // Remove the todo item from the service
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {

    // Adds the todo via service
    this.todoService.addTodo(todo).subscribe(todo => {
      // Adds the newly created todo (with unique ID generated from the service)
      this.todos.push(todo);
    });
  }

}
