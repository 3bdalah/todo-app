import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  tasks: string[] = [];
  newTask: string = '';
  isAvalible: boolean = false;
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
      this.isAvalible = true;
    }
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.isAvalible = this.tasks.length > 0;
  }

  editTask(index: number, newTaskEdit: string): string | void {
    // const trimedTask = newTaskEdit.trim();
    if (newTaskEdit.trim() !== '') {
      this.tasks[index] = newTaskEdit.trim();
    } else {
      newTaskEdit = this.tasks[index];
      return (this.newTask = newTaskEdit);
    }
    this.newTask = '';
  }
}
