import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = {
    text: 'Tengo algo que hacer',
    day: '18 de Junio',
    reminder: true
  };

  constructor() { }

  ngOnInit(): void {}

}
