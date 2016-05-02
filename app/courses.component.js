System.register(['angular2/core', 'angular2/router', './course.service'], function(exports_1, context_1) {
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
    var core_1, router_1, course_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(router, service) {
                    this.router = router;
                    this.courses = [];
                    this.courses = service.getCourses();
                }
                CoursesComponent.prototype.select = function (courseItem) {
                    this.router.navigate(['CreateCourse', { id: courseItem.id }]);
                };
                CoursesComponent.prototype.create = function () {
                    this.router.navigate(['CreateCourse', { id: 'new' }]);
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "<h1>List of Courses</h1>\n    <ul>\n      <li *ngFor=\"#courseItem of courses\" (click)=\"select(courseItem)\">\n        <a>{{courseItem.course.title}} <i>by {{courseItem.course.convener}}</i></a>\n      </li>\n    </ul>\n  \t <div class=\"pull-right\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"create()\">Create new</button>\n  \t </div>\n    ",
                        providers: [course_service_1.CourseService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map