import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  // newTask: Task = {
  //   text: "",
  //   day: "",
  //   reminder: false
  // };
  tasks: Task[] = []; // Nuestro propio tipo de dato

  constructor(
    private taskService: TaskService,
  ) { }

  // Suscribirse a la promise para hacer fetch al fetch
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id) // Feedback
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder; // Editamos el valor de 'reminder'
    this.taskService.updateTaskReminder(task).subscribe(() => { // Llamo a la func. "updateTaskReminder" que manda un 'put' para editar el 'json' de la 'API'
      console.log("el reminder de la tarea " + task.id + " cambió a " + task.reminder); // Feedback
    });
  }

  addNewTask(newTask: Task): void {
    this.taskService.createTask(newTask).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  drop($event: CdkDragDrop<Task[]>) {
    if ($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
    else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }
    let newTasks = this.tasks
    this.tasks.forEach((task) => {
      this.taskService.deleteTask(task).subscribe();
    })
    newTasks.forEach((task) => {
      this.taskService.createTask(task).subscribe((task) => {
        this.tasks.push(task);
      });
    });
  }
}
