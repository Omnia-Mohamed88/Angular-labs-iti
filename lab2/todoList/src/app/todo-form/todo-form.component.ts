import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  newtask: string = '';
  @Output() sendtoparent = new EventEmitter()

  addtask() {
    this.sendtoparent.emit(this.newtask);
  }

}
