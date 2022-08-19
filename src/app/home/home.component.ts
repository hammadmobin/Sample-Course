import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$;
  Lessons = [];

  selectedLesson : any;

  constructor(private lessonService : LessonsService) {}

  ngOnInit() {
    this.Lessons = this.lessonService.lessons;
    this.lessons$ = this.lessonService.lessons$;
  }

  selectLesson(lesson)
  {
    this.selectedLesson = lesson;
  }

}
