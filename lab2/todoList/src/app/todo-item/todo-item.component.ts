import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() listitem: any;
  @Output() sendtoparent = new EventEmitter()
  deletetask(id: number) {
    this.sendtoparent.emit(id);
  }


}
