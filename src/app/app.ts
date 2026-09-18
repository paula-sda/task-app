import { Component, signal } from '@angular/core';
import { Task } from './task/task';

export interface TaskInterface {
  name: string;
  isCompleted: boolean;
}

export const taskArray: TaskInterface[] = [
  {
    name: 'Tarea1',
    isCompleted: false,
  },
  {
    name: 'Tarea2',
    isCompleted: false,
  },
  {
    name: 'Tarea3',
    isCompleted: false,
  },
  {
    name: 'Tarea4',
    isCompleted: false,
  },
  {
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
  tasks = signal<TaskInterface[]>(taskArray);
}
