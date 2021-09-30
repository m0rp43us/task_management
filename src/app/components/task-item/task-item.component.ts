import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()
  @Input() task : Task;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task){
    this.onToggleReminder.emit(task);
  }

}
