import { List } from './models/list.model';
import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DataService]
})
export class HomePage {
  public list: List;

    constructor(
      private readonly data: DataService

    ) { // Inializando um array vazio e adicionando novos itens a minha lista através do push//
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
    this.data.save(this.list);

  }

  removeTask(task: Task) { // Remover Tafefa

    const index = this.list.tasks.indexOf(task);
    this.list.tasks.splice(index, 1);
    this.data.save(this.list);

  }

  toogleDone(task: Task) {  // Marcar uma tarefa feita
  if (task.done) {
  task.done = false;
  } else {
  task.done = true;
  this.data.save(this.list);


  }

  }

  markAsUndone(task: Task) { // Marcar tarefa incompleta
  task.done = false;

  }


}
