import { Component} from '@angular/core';
import {NgForm} from '@angular/forms'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: {_id: string, task: string, class: string}[] = [];
  error: string = '';

  formHandler(form: NgForm): void | string {
    const task = form.form.value.task;
    const _id = Date.now().toString(36);

    if (!task) {
      throw this.error = 'Field cannot be empty!';
    }
    this.error = '';
    this.tasks.push({_id, task, class: ''});
    form.reset();
  }
  
}
