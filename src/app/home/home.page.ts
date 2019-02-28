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
  save: any;

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

  addTask(task: Task) { // Adicionar Tarefa
    this.save(this.list);

  }

  removeTask(task: Task) { // Remover Tafefa

    const index = this.list.tasks.indexOf(task);
    this.list.tasks.splice(index, 1);
    this.save(this.list);

  }

  toogleDone(task: Task) {  // Marcar uma tarefa feita
  if (task.done) {
  task.done = false;
  } else {
  task.done = true;
  this.save(this.list);

  }

  }

  markAsUndone(task: Task) { // Marcar tarefa incompleta
  task.done = false;

  }


}
