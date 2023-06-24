import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input('tasksFromApp') tasks: {_id: string, task: string}[] = [];

  onComplete(taskId: string) {
    console.log(taskId);
  };

  onEdit(taskId: string) {
    console.log(taskId);

  };

  onDelete(taskId: string) {
    console.log(taskId);

  };
}
