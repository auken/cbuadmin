System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Course, CourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Course = (function () {
                function Course() {
                    this.codes = [];
                    this.format = [];
                    console.log('Creating a Course!');
                }
                return Course;
            }());
            exports_1("Course", Course);
            CourseService = (function () {
                function CourseService() {
                    this.courses = [];
                    this.firebase = new Firebase('https://shining-inferno-2018.firebaseio.com/courses');
                }
                CourseService.prototype.getCourses = function () {
                    if (this.courses.length == 0) {
                        this.firebase.once('value').then(function (snapshot) {
                            snapshot.forEach(function (snap) {
                                var course = snap.val();
                                this.courses.push({ id: snap.key(), course: snap.val() });
                            }.bind(this));
                        }.bind(this));
                    }
                    return this.courses;
                };
                CourseService.prototype.getCourse = function (id, callback) {
                    this.firebase.child(id).once('value').then(function (snapshot) {
                        var val = snapshot.val();
                        callback(val);
                    });
                };
                CourseService.prototype.setCourse = function (course) {
                    this.firebase.child(course.id).set(course);
                };
                CourseService.prototype.buildCourse = function () {
                    var course = new Course();
                    var courseRef = this.firebase.push(course);
                    course.id = courseRef.key();
                    return course;
                };
                CourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map