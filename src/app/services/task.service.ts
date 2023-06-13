import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Devolviendo el endpoint en forma de promise JS (con protocolo get)
  getTask(): Observable<Task[]> {
    return of(TASKS)
  }
}
