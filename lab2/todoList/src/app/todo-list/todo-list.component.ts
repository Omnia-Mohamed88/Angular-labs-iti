import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnChanges {
  tasks: Array<any>;
  @Input() task: any;
  constructor() {
    this.tasks = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.tasks.push({ id: this.tasks.length, description: this.task, completed: false })
  }
  deletetask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }


}
