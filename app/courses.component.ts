import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    template: `<h1>List of Courses</h1>
    <ul>
      <li *ngFor="#courseItem of courses" (click)="select(courseItem)">
        <a>{{courseItem.course.title}} <i>by {{courseItem.course.convener}}</i></a>
      </li>
    </ul>
  	 <div class="pull-right">
		<button class="btn btn-primary" type="button" (click)="create()">Create new</button>
  	 </div>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
  courses: Array<any> = []; 

  constructor (private router: Router, service: CourseService) {
	this.courses = service.getCourses();
  }

  select(courseItem) {
    this.router.navigate( ['CreateCourse', { id: courseItem.id }] );
  }
  
  create() {
    this.router.navigate( ['CreateCourse', { id: 'new' }] );
  }
}
