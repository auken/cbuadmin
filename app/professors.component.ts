import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProfessorService} from './professor.service';

@Component({
    selector: 'professors',
    template: `<h1>List of professors</h1>
    <ul>
      <li *ngFor="#professorItem of professors" (click)="select(professorItem)">
        <a>{{professorItem.professor.name}} @ {{professorItem.professor.university}}</a>
      </li>
    </ul>
  	 <div class="pull-right">
		<button class="btn btn-primary" type="button" (click)="create()">Create new</button>
  	 </div>
  	<div class="pull-left">
      <ul>
        <li *ngFor="#professorItem of professors" (click)="view(professorItem)">
          <a>View profile for {{professorItem.professor.name}} @ {{professorItem.professor.university}}</a>
        </li>
      </ul>
    </div>
    `,
    providers: [ProfessorService]
})

export class ProfessorsComponent {
  professors: Array<any> = []; 

  constructor (private router: Router, service: ProfessorService) {
	this.professors = service.getProfessors();
  }

  select(item) {
    this.router.navigate( ['CreateProfessor', { id: item.id }] );
  }
  
  view(item) {
    this.router.navigate( ['Professor', { id: item.id }] );
  }
  
  create() {
    this.router.navigate( ['CreateProfessor', { id: 'new' }] );
  }
}