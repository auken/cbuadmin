import {Injectable} from 'angular2/core';
export class Professor {
	id: string;
	name: string;
	university: string;
	
	constructor() {
		console.log('Creating a Professor!');
	}
}
@Injectable()
export class ProfessorService {
	professors: Array<any> = []; 
	firebase = new Firebase('https://shining-inferno-2018.firebaseio.com/professors');
	
    getProfessors() {
    	if (this.professors.length == 0) {
			this.firebase.once('value').then(function(snapshot) {
				snapshot.forEach(function(snap) {
					var professor = snap.val();
			  		this.professors.push({id: snap.key(), professor: snap.val()});
	    		}.bind(this));
			}.bind(this)); 
		}
		return this.professors; 
    }
    
    getProfessor(id, callback) {
		this.firebase.child(id).once('value').then(function(snapshot) {
			var val = snapshot.val();
			callback(val);
		});
    }
    
    setProfessor(professor: Professor) {
    	this.firebase.child(professor.id).set(professor);
    }
    
    buildProfessor() {
    	var professor = new Professor();
    	var professorRef = this.firebase.push(professor);
    	professor.id = professorRef.key();
    	return professor;
    }
}