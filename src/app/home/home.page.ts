import { List } from './models/list.model';
import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public list: List;

    constructor(
      private alertCtrl: AlertController
    ) {
        this.list = this.get();
    }

   async showAddTask() {
        const alert = await this.alertCtrl.create({
          header: 'Adicionar nova tarefa',
          inputs: [
            {
              name: 'task',
              type: 'text',
              placeholder: 'Qual a sua tarefa?'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel'
            }, {
              text: 'Adicionar',
              handler: (data) => {
                this.list.tasks.push(new Task(data.task, false));
              }
            }
          ]
        });

        await alert.present();

      }


  addTask (task: Task) { // Adicionar Tarefa
     this.save (this.list);
  }

  removeTask (task: Task) { // Remover Tafefa

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

  // Esse trecho do código deve ficar no service
  public save(list: List) {
    const data = JSON.stringify(list);
    localStorage.setItem('list', data);
  }

  public get(): List {
    const data = localStorage.getItem('list');

    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }

  }




