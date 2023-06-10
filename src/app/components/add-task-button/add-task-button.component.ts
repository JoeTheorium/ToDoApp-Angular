import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-task-button',
  templateUrl: './add-task-button.component.html',
  styleUrls: ['./add-task-button.component.css']
})
export class AddTaskButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {}

}
