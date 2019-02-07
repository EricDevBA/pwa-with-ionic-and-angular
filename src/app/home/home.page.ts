import { List } from './models/list.model';
import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public list: List;

    constructor() {
      let tasks: Task[]
      tasks.push(new Task('Agendar Barboterapia',false)),
      this.list = new List('Minha Lista de Tarefas'
      tasks,
      ),
      
      
    }

}
