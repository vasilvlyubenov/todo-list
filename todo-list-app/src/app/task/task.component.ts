import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  constructor(private modalService: NgbModal) {}

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
    const editModal = this.modalService.open(EditTaskComponent);
    editModal.componentInstance.taskId = taskId;
    editModal.componentInstance.tasks = this.tasks;
  };

  onDelete(taskId: string): void {
    const elementIndex = this.tasks.findIndex(x => x._id === taskId);
    this.tasks.splice(elementIndex, 1);
  };
}
