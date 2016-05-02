import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {Course, CourseService} from './course.service';

@Component({
    selector: 'create-course',
    templateUrl: 'create-course.html',
    providers: [CourseService]
})
  
export class CreateCourseComponent {
  createCourseForm: ControlGroup;
  course: Course = new Course();

  constructor(fb: FormBuilder, private router: Router, routeParams: RouteParams, private service: CourseService) {
    var id = routeParams.get('id');
    if (id == 'new') {
    	this.course = service.buildCourse();
    } else {
      service.getCourse(id, function(course) {
          this.course = course;
      }.bind(this));
    }
    this.createCourseForm = fb.group({
      title: ["", Validators.required]
    });
  }
  
  submit(event) {
    this.service.setCourse(this.course);
    this.router.navigate(['Courses']);
  }
  
  get message() { return JSON.stringify(this.course); }  
}