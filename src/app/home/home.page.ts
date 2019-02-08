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

    constructor() { // Inializando um array vazio e adicionando novos itens a minha lista através do push//
      const tasks: Task[] = [];
      tasks.push(new Task('Agendar Barboterapia', false));
      tasks.push(new Task('Ir para Academia', false));
      tasks.push(new Task('Desenvolver novos projetos', true));

      this.list = new List(
        'Minha Lista de Tarefas',
        tasks
        );
    }
}
