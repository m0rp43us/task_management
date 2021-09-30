import { Component, OnInit } from '@angular/core';
import{Task} from '../../Tasks';
import {TaskService} from '../../services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = []
  constructor(private TaskService:TaskService) { }

  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }
  DeleteTask(task){
    this.TaskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    )}
  ToggleReminder(task){
      task.reminder = !task.reminder;
      this.TaskService.updateTaskReminder(task).subscribe()
    }
  addTask(task:Task){
    this.TaskService.addTask(task).subscribe((tasks) => this.tasks.push(task))
  }

}
