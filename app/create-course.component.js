System.register(['angular2/core', 'angular2/common', 'angular2/router', './course.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, course_service_1;
    var CreateCourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CreateCourseComponent = (function () {
                function CreateCourseComponent(fb, router, routeParams, service) {
                    this.router = router;
                    this.service = service;
                    this.course = new course_service_1.Course();
                    var id = routeParams.get('id');
                    if (id == 'new') {
                        this.course = service.buildCourse();
                    }
                    else {
                        service.getCourse(id, function (course) {
                            this.course = course;
                        }.bind(this));
                    }
                    this.createCourseForm = fb.group({
                        title: ["", common_1.Validators.required]
                    });
                }
                CreateCourseComponent.prototype.submit = function (event) {
                    this.service.setCourse(this.course);
                    this.router.navigate(['Courses']);
                };
                Object.defineProperty(CreateCourseComponent.prototype, "message", {
                    get: function () { return JSON.stringify(this.course); },
                    enumerable: true,
                    configurable: true
                });
                CreateCourseComponent = __decorate([
                    core_1.Component({
                        selector: 'create-course',
                        templateUrl: 'create-course.html',
                        providers: [course_service_1.CourseService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, course_service_1.CourseService])
                ], CreateCourseComponent);
                return CreateCourseComponent;
            }());
            exports_1("CreateCourseComponent", CreateCourseComponent);
        }
    }
});
//# sourceMappingURL=create-course.component.js.map