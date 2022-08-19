import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BASE_URL = "http://localhost:3000";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    model = 'courses';

    constructor(private http: HttpClient){}

    all()
    {
      return this.http.get(this.geUrl());
    }

    find(id)
    {
      return this.http.get(this.getUrlWithID(id));
    }

    create(course)
    {
      return this.http.post(this.geUrl(), course);
    }

    update(course)
    {
      return this.http.put(this.getUrlWithID(course.id),course);
    }

    delete(id)
    {
      return this.http.delete(this.getUrlWithID(id));
    }

    private geUrl()
    {
      return `${BASE_URL}/${this.model}` ;
    }

    private getUrlWithID(id){
      return `${this.geUrl()}/${id}`
    }


  courses : Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'Angular 14 Fundamentals',
      description: 'Learn the fundamentals of Angular 14',
      percentComplete: 33,
      favorite: true
    },
    {
      id: '3',
      title: 'Rapid App Development',
      description: 'Learn the fundamentals of App Development',
      percentComplete: 88,
      favorite: true
    }
  ];
}
