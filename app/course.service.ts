import {Injectable} from 'angular2/core';
export class Course {
	id: string;
	title: string;
	convener: string;
	codes = [];
	format = [];
	
	constructor() {
		console.log('Creating a Course!');
	}
	
//	constructor(public id: string) {
//		this.id = id;
//	}
}
@Injectable()
export class CourseService {
	
	courses: Array<any> = []; 
	firebase = new Firebase('https://shining-inferno-2018.firebaseio.com/courses');
	
    getCourses() {
    	if (this.courses.length == 0) {
			this.firebase.once('value').then(function(snapshot) {
				snapshot.forEach(function(snap) {
					var course = snap.val();
			  		this.courses.push({id: snap.key(), course: snap.val()});
	    		}.bind(this));
			}.bind(this)); 
		}
		return this.courses; 
    }
    
    getCourse(id, callback) {
		this.firebase.child(id).once('value').then(function(snapshot) {
			var val = snapshot.val();
			callback(val);
		});
    }
    
    setCourse(course: Course) {
    	this.firebase.child(course.id).set(course);
    }
    
    buildCourse() {
    	var course = new Course();
    	var courseRef = this.firebase.push(course);
    	course.id = courseRef.key();
    	return course;
    }
}