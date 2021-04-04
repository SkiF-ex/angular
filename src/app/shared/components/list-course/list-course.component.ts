import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../../core/models/course.model';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCourseComponent {
  @Input() item: Course;

  @Output() deleted = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  constructor() {  }

  onDelete(): void {
    this.deleted.emit(this.item.id);
  }

  onEdit(): void {
    this.edit.emit(this.item.id);
  }
}
