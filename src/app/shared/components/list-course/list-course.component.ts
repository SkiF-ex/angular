import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../core/models/course.model';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  @Input() item: Course;

  @Output() deleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleted.emit(this.item.id);
  }
}
