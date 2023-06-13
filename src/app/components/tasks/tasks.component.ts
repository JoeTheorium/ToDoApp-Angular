import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; // Nuestro propio tipo de dato

  constructor(
    private taskService: TaskService
  ) { }

  // Suscribirse a la promise para hacer fetch al fetch
  ngOnInit(): void {
    this.taskService.getTask().subscribe(data => {
      this.tasks = data;
    });
  }

}
