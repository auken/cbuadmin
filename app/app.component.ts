import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfessorsComponent}   from './professors.component';
import {ProfessorComponent}   from './professor.component';
import {CoursesComponent}     from './courses.component';
import {CreateProfessorComponent}   from './create-professor.component';
import {CreateCourseComponent}   from './create-course.component';

@Component({
    selector: 'my-app',
    template: `
<div class="container ng-scope">
  <ol class="breadcrumb">
      <li class="active"><i class="fa fa-home"></i> CourseBook University Administration</li>
  </ol>
  <nav>
  	<div>
    <a [routerLink]="['Professors']">Professors</a>
    <a [routerLink]="['Courses']">Courses</a>
    </div>
  </nav>
  <router-outlet></router-outlet>
</div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/professors', name: 'Professors', component: ProfessorsComponent},
  {path:'/professor', name: 'Professor', component: ProfessorComponent},
  {path:'/courses',    name: 'Courses',    component: CoursesComponent},
  {path:'/create-professor', name: 'CreateProfessor', component: CreateProfessorComponent},
  {path:'/create-course/:id', name: 'CreateCourse', component: CreateCourseComponent}
]) 
export class AppComponent {	
}
