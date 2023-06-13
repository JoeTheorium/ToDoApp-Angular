import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
// import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(
    private http: HttpClient
  ) { }

  // Devolviendo el endpoint en forma de promise JS (con protocolo get)
  getTask(): Observable<Task[]> {
    // return of(TASKS);
    return this.http.get<Task[]>(this.apiUrl+'/tasks')
  }

  deleteTask(task: Task): Observable<Task> {
    // const url = `${this.apiUrl}/${task.id}`;
    // return this.http.delete<Task>(url)
    return this.http.delete<Task>(this.apiUrl+'/tasks/'+task.id)
  }
}
