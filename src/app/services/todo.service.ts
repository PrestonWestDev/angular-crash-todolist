import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10';

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(`${this.todosUrl}/${todo.id}`, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(`${this.todosUrl}/${todo.id}`, httpOptions);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(`${this.todosUrl}`, todo, httpOptions);
  }
}
