import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { // Ciclo de vida - OnInit: Cuando inicia

  title:string = 'My Task List';
  showAddTaskList:boolean = false;
  subscription?: Subscription; // ? == subscription: Subscription || undefined -> Puede ser tipo 'subscription' o tipo 'undefined'

  constructor(
    private uiService: UiService // Insertando en el objeto
  ) { }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
