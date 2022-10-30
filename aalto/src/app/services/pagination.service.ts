import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  urlTodo =  "https://jsonplaceholder.typicode.com/todos";


  // ricercaService:string = "";


  constructor(private http: HttpClient) { }

  takeTodo(){
    return this.http.get<Todo[]>(this.urlTodo);
  }


}
