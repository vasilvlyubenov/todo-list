import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms'; 


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor(private modal: NgbActiveModal) { }

  @Input('taskId') taskId: string = '';
  @Input('tasks') tasks: { _id: string, task: string, class: string }[] = [];

  error: string = '';

  
  onCancel() {
    this.modal.close();
  }

  onUpdate(form: NgForm): void {
    const changedTask = form.form.value.task;

    if (!changedTask) {
      throw this.error = 'Field cannot be empty!';
    }

    this.tasks.map(t => {
      if (t._id === this.taskId) {
        t.task = changedTask;
      }
    });
    this.error = '';
    form.reset();
    this.modal.close();
  }
}
