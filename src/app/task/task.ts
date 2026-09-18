import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task',
  styles: `
  .task {
    background: grey;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    gap: 8px;
  }`,
  templateUrl: './task.html',
})
export class Task {
  taskName = input<string>('Valor por defecto');
}
