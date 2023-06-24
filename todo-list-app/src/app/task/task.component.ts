import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input('tasksFromApp') tasks: { _id: string, task: string, class: string }[] = [];

  onComplete(taskId: string): void {
    this.tasks.map(x => {
      if (x._id === taskId) {
        if (x.class === '') {
          x.class = 'completed'
        } else {
          x.class = ''
        }
      }
    });
  };

  onEdit(taskId: string): void {
    console.log(taskId);

  };

  onDelete(taskId: string): void {
    const elementIndex = this.tasks.findIndex(x => x._id === taskId);
    this.tasks.splice(elementIndex, 1);
  };
}
