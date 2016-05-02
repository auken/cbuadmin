import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Professor, ProfessorService} from './professor.service';

@Component({
    selector: 'professor',
    template: `
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="http://prototypes.zoop.net/cbu/resources/images/avatars/Timothy_Ohiggins.png" class="avatar-md">
                        </div>
                        <div class="col-sm-8">
                            <h1>{{professor.name}} <span>{{mock.title}}, {{mock.areas}}</span></h1>
                            <div class="row profile-info">
                                <div class="col-sm-8">
                                    <h2>{{professor.university}}</h2>
                                    <h3>{{mock.university.department}}</h3>
                                    <h4>{{mock.university.address}}</h4>
                                    <br>
                                    <button class="btn btn-primary"><i class="fa fa-envelope"></i> Send message</button>
                                </div>
                                <div class="col-sm-3 profile-links">
                                    <i class="fa-linkedin-square fa"></i> <a>LinkedIn</a>
                                    <br>
                                    <i class="fa-globe fa"></i> <a>ResearchGate</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <i class="fa fa-2x fa-star-o fa-gold star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
    providers: [ProfessorService]
})


export class ProfessorComponent {
  professor: Professor = new Professor();

  constructor(private router: Router, routeParams: RouteParams, private service: ProfessorService) {
    var id = routeParams.get('id');
    service.getProfessor(id, function(professor) {
        this.professor = professor;
    }.bind(this));
  }

  get message() { return JSON.stringify(this.professor); }

  mock = {
    name: 'Jonas Auken',
    title: 'PhD',
    areas: ['Ecology', 'Oceanography'],
    university: {
      name: 'Aarhus Universitet',
      department: 'Datalogisk Institut',
      address: 'Aarhus Universitetspark'
    }
  }
}