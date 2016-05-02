import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {Professor, ProfessorService} from './professor.service';

@Component({
    selector: 'create-professor',
    templateUrl: 'create-professor.html',
    providers: [ProfessorService]
})
  
export class CreateProfessorComponent {
  createProfessorForm: ControlGroup;
  professor: Professor = new Professor();

  constructor(fb: FormBuilder, private router: Router, routeParams: RouteParams, private service: ProfessorService) {
    var id = routeParams.get('id');
    if (id == 'new') {
    	this.professor = service.buildProfessor();
    } else {
      service.getProfessor(id, function(professor) {
          this.professor = professor;
      }.bind(this));
    }
    this.createProfessorForm = fb.group({
      name: ["", Validators.required]
    });
  }
  
  submit(event) {
    this.service.setProfessor(this.professor);
    this.router.navigate(['Professors']);
  }
  
  get message() { return JSON.stringify(this.professor); }
}