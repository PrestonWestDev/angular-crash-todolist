import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes={
      todo: true,
      iscomplete: this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    // Toggles the property in URL
    todo.completed = !todo.completed;

    // Toggles the property via Service
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
