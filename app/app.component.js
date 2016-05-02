System.register(['angular2/core', 'angular2/router', './professors.component', './professor.component', './courses.component', './create-professor.component', './create-course.component'], function(exports_1, context_1) {
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
    var core_1, router_1, professors_component_1, professor_component_1, courses_component_1, create_professor_component_1, create_course_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (professors_component_1_1) {
                professors_component_1 = professors_component_1_1;
            },
            function (professor_component_1_1) {
                professor_component_1 = professor_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (create_professor_component_1_1) {
                create_professor_component_1 = create_professor_component_1_1;
            },
            function (create_course_component_1_1) {
                create_course_component_1 = create_course_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<div class=\"container ng-scope\">\n  <ol class=\"breadcrumb\">\n      <li class=\"active\"><i class=\"fa fa-home\"></i> CourseBook University Administration</li>\n  </ol>\n  <nav>\n  \t<div>\n    <a [routerLink]=\"['Professors']\">Professors</a>\n    <a [routerLink]=\"['Courses']\">Courses</a>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/professors', name: 'Professors', component: professors_component_1.ProfessorsComponent },
                        { path: '/professor', name: 'Professor', component: professor_component_1.ProfessorComponent },
                        { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent },
                        { path: '/create-professor', name: 'CreateProfessor', component: create_professor_component_1.CreateProfessorComponent },
                        { path: '/create-course/:id', name: 'CreateCourse', component: create_course_component_1.CreateCourseComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map