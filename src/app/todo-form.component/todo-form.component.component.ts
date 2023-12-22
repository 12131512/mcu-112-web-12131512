import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ITodoForm } from '../interface/todo-form.interface';

@Component({
  selector: 'app-todo-form.component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-form.component.component.html',
  styleUrl: './todo-form.component.component.css',
})
export class TodoFormComponentComponent {
  @HostBinding('class')
  class = 'todo-form';

  readonly form = new FormGroup<ITodoForm>({
    content: new FormControl<string | null>(null),
  });
}
