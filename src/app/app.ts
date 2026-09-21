import { Component, signal } from '@angular/core';
import { Task } from './task/task';

export interface TaskInterface {
  id: number;
  name: string;
  isCompleted: boolean;
}

export const taskArray: TaskInterface[] = [
  {
    id: 1,
    name: 'Tarea1 new',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Tarea2',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Tarea3',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'Tarea4',
    isCompleted: false,
  },
  {
    id: 5,
    name: 'Tarea5',
    isCompleted: true,
  },
];

@Component({
  imports: [Task],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  taskList = signal<TaskInterface[]>(taskArray);
  
  consolePrint() {
    console.log(this.taskList());
  }

  updateTaskValue(id: number) {
    this.taskList.update(tasks => 
      tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task)
    )
  }

  // Se podría utilizar esta función dentro del map
  //
  // mapTaskValues(task: TaskInterface, id: number) {
  //   if(task.id === id) {
  //     return {...task, isCompleted: !task.isCompleted}
  //   } else {
  //     return task;
  //   }
  // }
}
