import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: Task): void {
    this.onToggleTask.emit(task);
  }
}
