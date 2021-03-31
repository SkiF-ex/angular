import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Course } from '../../../core/models/course.model';
import {FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom.validators';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  @Input()
    set course(course: Course) {
      if (course && course.id) {
        this.id = course.id;
        this.existed = true;
        this.courseForm.patchValue(course);
      }
    }

  @Output() add = new EventEmitter<Course>();
  @Output() edit = new EventEmitter<Course>();

  courseForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    content: ['', [Validators.required, Validators.maxLength(50)]],
    duration: ['', [Validators.required, CustomValidators.range]],
    date: ['', [Validators.required]],
    author: ['', [Validators.required]],
  });

  get isTitleMaxLength(): boolean {
    return this.courseForm.get('title').value.length >= 50;
  }

  get isDescriptionMaxLength(): boolean {
    return this.courseForm.get('content').value.length >= 50;
  }

  existed: boolean;
  id: number;

  constructor(private fb: FormBuilder) { }

  onAdd(): void {
    if (this.courseForm.valid) {
      this.add.emit(this.courseForm.value);
    }
  }

  onEdit(): void {
    if (this.courseForm.valid) {
      this.edit.emit({...this.courseForm.value, id: this.id});
    }
  }

  ngOnInit(): void {
  }
}
