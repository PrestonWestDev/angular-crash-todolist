import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

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
    console.log("Toggled:", todo);
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todo) {
    console.log("Deleted:", todo);
  }

}
