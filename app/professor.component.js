System.register(['angular2/core', 'angular2/router', './professor.service'], function(exports_1, context_1) {
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
    var core_1, router_1, professor_service_1;
    var ProfessorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (professor_service_1_1) {
                professor_service_1 = professor_service_1_1;
            }],
        execute: function() {
            ProfessorComponent = (function () {
                function ProfessorComponent(router, routeParams, service) {
                    this.router = router;
                    this.service = service;
                    this.professor = new professor_service_1.Professor();
                    this.mock = {
                        name: 'Jonas Auken',
                        title: 'PhD',
                        areas: ['Ecology', 'Oceanography'],
                        university: {
                            name: 'Aarhus Universitet',
                            department: 'Datalogisk Institut',
                            address: 'Aarhus Universitetspark'
                        }
                    };
                    var id = routeParams.get('id');
                    service.getProfessor(id, function (professor) {
                        this.professor = professor;
                    }.bind(this));
                }
                Object.defineProperty(ProfessorComponent.prototype, "message", {
                    get: function () { return JSON.stringify(this.professor); },
                    enumerable: true,
                    configurable: true
                });
                ProfessorComponent = __decorate([
                    core_1.Component({
                        selector: 'professor',
                        template: "\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-3\">\n                            <img src=\"http://prototypes.zoop.net/cbu/resources/images/avatars/Timothy_Ohiggins.png\" class=\"avatar-md\">\n                        </div>\n                        <div class=\"col-sm-8\">\n                            <h1>{{professor.name}} <span>{{mock.title}}, {{mock.areas}}</span></h1>\n                            <div class=\"row profile-info\">\n                                <div class=\"col-sm-8\">\n                                    <h2>{{professor.university}}</h2>\n                                    <h3>{{mock.university.department}}</h3>\n                                    <h4>{{mock.university.address}}</h4>\n                                    <br>\n                                    <button class=\"btn btn-primary\"><i class=\"fa fa-envelope\"></i> Send message</button>\n                                </div>\n                                <div class=\"col-sm-3 profile-links\">\n                                    <i class=\"fa-linkedin-square fa\"></i> <a>LinkedIn</a>\n                                    <br>\n                                    <i class=\"fa-globe fa\"></i> <a>ResearchGate</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-1\">\n                            <i class=\"fa fa-2x fa-star-o fa-gold star\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  ",
                        providers: [professor_service_1.ProfessorService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, professor_service_1.ProfessorService])
                ], ProfessorComponent);
                return ProfessorComponent;
            }());
            exports_1("ProfessorComponent", ProfessorComponent);
        }
    }
});
//# sourceMappingURL=professor.component.js.map